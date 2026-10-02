const filterButtons = document.querySelectorAll('.filter-button');
const photoCards = document.querySelectorAll('.photo-card');
const emptyMessage = document.querySelector('.filter-empty');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const year = document.querySelector('[data-year]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;
    let visibleCards = 0;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle('is-active', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });

    photoCards.forEach((card) => {
      const shouldShow = selectedCategory === 'todos' || card.dataset.category === selectedCategory;
      card.hidden = !shouldShow;
      visibleCards += Number(shouldShow);
    });

    emptyMessage.hidden = visibleCards > 0;
  });
});

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}
