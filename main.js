'use strict';

const GITHUB_USERNAME = 'Tiogatito';
const API_URL = `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}`;
const profile = document.getElementById('profile');
const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const username = document.getElementById('username');
const repositories = document.getElementById('repositories');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const profileLink = document.getElementById('profile-link');
const status = document.getElementById('status');
const retry = document.getElementById('retry');
const numberFormat = new Intl.NumberFormat('pt-BR');

function httpError(response) {
    if (response.status === 404) {
        return new Error('O perfil não foi encontrado no GitHub.');
    }

    if (response.status === 403 || response.status === 429) {
        return new Error('O GitHub limitou as consultas neste momento. Aguarde alguns minutos e tente novamente.');
    }

    return new Error(`Não foi possível consultar o GitHub (HTTP ${response.status}). Tente novamente em instantes.`);
}

function validateProfile(data) {
    const counters = [data?.public_repos, data?.followers, data?.following];
    if (!data || typeof data.login !== 'string' || !data.login.trim()
        || typeof data.avatar_url !== 'string' || typeof data.html_url !== 'string'
        || counters.some(value => !Number.isSafeInteger(value) || value < 0)) {
        throw new Error('O GitHub retornou dados de perfil incompletos. Tente novamente em instantes.');
    }

    const avatarUrl = new URL(data.avatar_url);
    const profileUrl = new URL(data.html_url);
    if (avatarUrl.protocol !== 'https:' || avatarUrl.hostname !== 'avatars.githubusercontent.com'
        || profileUrl.protocol !== 'https:' || profileUrl.hostname !== 'github.com') {
        throw new Error('O GitHub retornou um endereço de perfil inválido.');
    }
}

async function loadProfile() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    profile.setAttribute('aria-busy', 'true');
    retry.hidden = true;
    retry.disabled = true;
    status.textContent = 'Buscando os dados do perfil…';
    name.textContent = 'Carregando perfil…';

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal
        });

        if (!response.ok) {
            throw httpError(response);
        }

        const data = await response.json();
        validateProfile(data);

        name.textContent = data.name?.trim() || data.login;
        username.textContent = `@${data.login}`;
        repositories.textContent = numberFormat.format(data.public_repos);
        followers.textContent = numberFormat.format(data.followers);
        following.textContent = numberFormat.format(data.following);
        avatar.alt = `Foto de perfil de ${data.name?.trim() || data.login}`;
        avatar.src = data.avatar_url;
        profileLink.href = data.html_url;
        profileLink.hidden = false;
        status.textContent = 'Dados atualizados pela API do GitHub.';
    } catch (error) {
        name.textContent = 'Perfil indisponível';
        username.textContent = 'Não foi possível carregar os dados';
        repositories.textContent = '—';
        followers.textContent = '—';
        following.textContent = '—';
        avatar.src = 'avatar-placeholder.svg';
        avatar.alt = 'Foto de perfil indisponível';
        profileLink.hidden = true;
        profileLink.removeAttribute('href');

        if (error.name === 'AbortError') {
            status.textContent = 'A consulta demorou mais que o esperado. Tente novamente.';
        } else if (error instanceof TypeError) {
            status.textContent = 'Não foi possível conectar ao GitHub. Confira sua conexão e tente novamente.';
        } else {
            status.textContent = error.message || 'Não foi possível carregar o perfil. Tente novamente.';
        }

        retry.hidden = false;
    } finally {
        clearTimeout(timeout);
        profile.setAttribute('aria-busy', 'false');
        retry.disabled = false;
    }
}

avatar.addEventListener('error', () => {
    if (avatar.getAttribute('src') !== 'avatar-placeholder.svg') {
        avatar.src = 'avatar-placeholder.svg';
        avatar.alt = 'A foto do perfil não pôde ser carregada';
    }
});

retry.addEventListener('click', loadProfile);
loadProfile();
