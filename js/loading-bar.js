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
    // Show loading bar on initial page load
    const bar = document.getElementById('top-loading-bar');
    bar.classList.remove('done');
    bar.style.width = '0%';
    bar.style.opacity = '1';
    setTimeout(() => {
      bar.style.width = '100%';
    }, 10);
    setTimeout(() => {
      bar.classList.add('done');
      bar.style.width = '0%';
      bar.style.opacity = '0';
    }, 700);

    window.addEventListener('load', function() {
      // No-op, handled above
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