(function() {
  var d = document;

  function initFolder() {
    var toggle = d.getElementById('folderToggle');
    var close = d.getElementById('folderClose');
    if (!toggle) return;
    var body = d.getElementById('folderBody');

    function folderOpen(open) {
      var arrow = d.querySelector('.folder-header .arrow');
      if (open) {
        body.classList.add('open');
        arrow.classList.add('open');
        if (close) close.style.display = 'block';
      } else {
        body.classList.remove('open');
        arrow.classList.remove('open');
        if (close) close.style.display = 'none';
        d.querySelectorAll('.sub-folder-body').forEach(function(sb) { sb.classList.remove('open'); });
        d.querySelectorAll('.sub-folder-header .arrow').forEach(function(a) { a.classList.remove('open'); });
      }
      window.__folderLock = open;
    }

    toggle.onclick = function() { folderOpen(!body.classList.contains('open')); };
    if (close) {
      close.onclick = function(e) { e.stopPropagation(); folderOpen(false); };
    }

    d.querySelectorAll('.sub-folder-header').forEach(function(header) {
      header.addEventListener('click', function(e) {
        e.stopPropagation();
        var id = header.dataset.target;
        var sb = d.getElementById(id);
        var arw = header.querySelector('.arrow');
        if (sb && arw) {
          sb.classList.toggle('open');
          arw.classList.toggle('open');
        }
      });
    });
  }

  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', initFolder);
  } else {
    initFolder();
  }
  window.addEventListener('pagechange', initFolder);
})();
