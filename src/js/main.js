(function () {
  var productDetails = document.querySelectorAll('.product-details');

  Array.prototype.forEach.call(productDetails, function (detail) {
    detail.addEventListener('toggle', function () {
      if (!detail.open) {
        return;
      }

      Array.prototype.forEach.call(productDetails, function (otherDetail) {
        if (otherDetail !== detail) {
          otherDetail.open = false;
        }
      });
    });
  });
})();
