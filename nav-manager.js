(function() {
  var pageOrder = [
    'index',
    'about',
    'skills',
    'certifications',
    'projects',
    'event-blogs'
  ];
  var currentPage = '';
  var locked = false;

  function getPageName() {
    var path = location.pathname.split('/').pop() || 'index';
    var name = path.replace(/\.html$/, '');
    if (name === 'index') return name;
    var match = pageOrder.find(function(p) { return p.toLowerCase() === name.toLowerCase(); });
    return match || name;
  }

  function getNext() {
    var idx = pageOrder.indexOf(currentPage);
    return (idx >= 0 && idx < pageOrder.length - 1) ? pageOrder[idx + 1] : null;
  }

  function getPrev() {
    var idx = pageOrder.indexOf(currentPage);
    return (idx > 0) ? pageOrder[idx - 1] : null;
  }

  function navigateTo(url) {
    if (!url || locked) return;
    locked = true;
    url = url.toLowerCase();
    if (window.__routerNavigate) {
      window.__routerNavigate(url);
    } else {
      location.href = url;
    }
    setTimeout(function() { locked = false; }, 800);
  }

  function setup() {
    var html = document.documentElement;
    currentPage = getPageName();
    locked = false;

    var isLinear = pageOrder.indexOf(currentPage) >= 0;
    var isLanding = currentPage === 'index';

    if (!isLinear) return;

    var handler = function(e) {
      if (locked || window.__folderLock) return;
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      var atTop = window.scrollY <= 2;
      if (e.deltaY > 0 && atBottom) {
        var next = getNext();
        if (next) navigateTo(next);
      } else if (e.deltaY < 0 && atTop && !isLanding) {
        var prev = getPrev();
        if (prev) navigateTo(prev);
      }
    };

    var touchStartY = 0;
    var touchHandler = function(e) {
      touchStartY = e.changedTouches[0].screenY;
    };
    var touchEndHandler = function(e) {
      if (locked || window.__folderLock) return;
      var atTop = window.scrollY <= 10;
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      var diff = touchStartY - e.changedTouches[0].screenY;
      if (diff > 40 && atBottom) {
        var next = getNext();
        if (next) navigateTo(next);
      } else if (diff < -40 && atTop && !isLanding) {
        var prev = getPrev();
        if (prev) navigateTo(prev);
      }
    };

    window.addEventListener('wheel', handler, { passive: true });
    window.addEventListener('touchstart', touchHandler, { passive: true });
    window.addEventListener('touchend', touchEndHandler, { passive: true });

    // Store cleanup
    window.__navCleanup = function() {
      window.removeEventListener('wheel', handler);
      window.removeEventListener('touchstart', touchHandler);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }

  // Clean up previous nav, then set up new one
  window.addEventListener('pagechange', function() {
    if (window.__navCleanup) window.__navCleanup();
    setup();
  });

  setup();
})();
