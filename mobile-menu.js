(function () {
  var overlay = document.getElementById('mobile-menu-overlay');
  var panel = document.getElementById('mobile-menu-panel');
  var openBtn = document.getElementById('mobile-menu-btn');
  var closeBtn = document.getElementById('mobile-menu-close');

  function openMenu() {
    if (overlay && panel) {
      overlay.classList.remove('hidden');
      panel.classList.remove('translate-x-full');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeMenu() {
    if (overlay && panel) {
      overlay.classList.add('hidden');
      panel.classList.add('translate-x-full');
      document.body.classList.remove('overflow-hidden');
    }
  }

  if (openBtn) {
    openBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openMenu();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }
})();
