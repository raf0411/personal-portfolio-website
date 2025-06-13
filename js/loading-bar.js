let navigating = false;

export function setupLoadingBar() {
  if (!document.getElementById('top-loading-bar')) {
    const bar = document.createElement('div');
    bar.id = 'top-loading-bar';
    document.body.prepend(bar);
  }

  function isInternalLink(a) {
    return a.hostname === window.location.hostname && !a.hasAttribute('target');
  }

  function startLoadingBar(callback) {
    const bar = document.getElementById('top-loading-bar');
    bar.classList.remove('done');
    bar.style.width = '0%';
    bar.style.opacity = '1';
    navigating = true;
    setTimeout(() => {
      bar.style.width = '80%';
    }, 10);
    setTimeout(() => {
      bar.style.width = '100%';
      bar.classList.add('done');
      setTimeout(callback, 800);
    }, 600);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main') || document.body;
    // If navigating, keep blur and bar until window.onload
    if (navigating) {
      main.classList.add('page-blur');
      const bar = document.getElementById('top-loading-bar');
      bar.style.opacity = '1';
      bar.style.width = '100%';
    } else {
      main.classList.add('page-blur');
    }
    window.addEventListener('load', function() {
      main.classList.remove('page-blur');
      const bar = document.getElementById('top-loading-bar');
      bar.classList.add('done');
      bar.style.width = '0%';
      bar.style.opacity = '0';
      navigating = false;
    });
    document.body.addEventListener('click', function(e) {
      const a = e.target.closest('a');
      if (!a || !isInternalLink(a)) return;
      if (a.hash && a.pathname === window.location.pathname) return;
      e.preventDefault();
      startLoadingBar(() => {
        window.location.href = a.href;
      });
    });
  });
} 