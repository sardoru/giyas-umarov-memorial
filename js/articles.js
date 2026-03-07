(function () {
  'use strict';

  var THEME_KEY = 'umarov-theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
  }

  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    var toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      applyTheme(getPreferredTheme());
      toggleBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // Mobile menu
    var hamburger = document.querySelector('.nav__hamburger');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
      });
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileMenu.classList.remove('open');
          hamburger.classList.remove('active');
        });
      });
    }

    // Header show/hide on scroll
    var header = document.querySelector('.site-header');
    var lastScroll = 0;
    if (header) {
      window.addEventListener('scroll', function () {
        var current = window.pageYOffset;
        if (current > lastScroll && current > 100) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
        lastScroll = current;
      }, { passive: true });
    }

    // Intersection Observer for reveals
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0 && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(function (el) { observer.observe(el); });
    }

    // Language button active state
    var langBtns = document.querySelectorAll('.lang-btn');
    var currentPath = window.location.pathname;
    langBtns.forEach(function (btn) {
      var lang = btn.getAttribute('data-lang');
      if (lang === 'en' && !currentPath.match(/^\/(ru|uz|fr|es)\//)) {
        btn.classList.add('active');
      } else if (currentPath.indexOf('/' + lang + '/') !== -1) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  });
})();
