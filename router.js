(function() {
  var d = document;

  function isInternal(url) {
    var a = d.createElement('a');
    a.href = url;
    return !a.hostname || a.hostname === location.hostname;
  }

  var content = d.createElement('div');
  content.id = 'pageContent';

  var kids = [];
  while (d.body.firstChild) kids.push(d.body.removeChild(d.body.firstChild));
  kids.forEach(function(child) {
    if (child.id === 'mpMini' || child.id === 'mpFull') {
      d.body.appendChild(child);
    } else {
      content.appendChild(child);
    }
  });
  d.body.appendChild(content);

  window.__routerNavigate = function(url) {
    loadPage(url);
  };

  function loadPage(url) {
    if (!url) url = '/';

    fetch(url).then(function(r) { return r.text(); }).then(function(html) {
      var titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      if (titleMatch) d.title = titleMatch[1];

      var bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      var newHTML = bodyMatch ? bodyMatch[1] : html;

      content.innerHTML = newHTML;

      var a = d.createElement('a');
      a.href = url;
      history.pushState({}, '', a.pathname + a.search + a.hash);

      content.querySelectorAll('script').forEach(function(s) {
        if (s.src && (s.src.indexOf('player.js') > -1 || s.src.indexOf('router.js') > -1 || s.src.indexOf('nav-manager.js') > -1)) return;
        if (!s.src || s.src.indexOf('.js') > -1) {
          var ns = d.createElement('script');
          if (s.src) ns.src = s.src;
          else ns.textContent = s.textContent;
          d.body.appendChild(ns);
        }
      });

      var event = new CustomEvent('pagechange', { bubbles: true, detail: { url: url } });
      d.dispatchEvent(event);
    }).catch(function() {
      location.href = url;
    });
  }

  d.addEventListener('click', function(e) {
    var a = e.target.closest('a');
    if (!a) return;
    if (a.hasAttribute('target')) return;
    if (!isInternal(a.href)) return;
    if (a.getAttribute('href') === '#' || a.getAttribute('href') === '') return;
    if (a.pathname === location.pathname && a.hash) return;
    e.preventDefault();
    __routerNavigate(a.href);
  });

  window.addEventListener('popstate', function() {
    loadPage(location.pathname + location.search + location.hash);
  });
})();
