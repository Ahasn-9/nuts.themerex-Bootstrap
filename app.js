// Scroll down to poker night section
const scrollDownBtn = document.getElementById('scroll-down-btn');
if (scrollDownBtn) {
  scrollDownBtn.addEventListener('click', function () {
    const pokerNight = document.getElementById('poker-night');
    if (pokerNight) pokerNight.scrollIntoView({ behavior: 'smooth' });
  });
}

// Scroll to top button logic
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
  function handleScroll() {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }
  function scrollToTopHandler() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.addEventListener('scroll', handleScroll);
  scrollToTopBtn.addEventListener('click', scrollToTopHandler);
  handleScroll();
}

// Count-up animation using Intersection Observer
function animateCountUp(el, target, suffix = '') {
  const duration = 1500;
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }
  requestAnimationFrame(update);
}

const countUpElements = document.querySelectorAll('.count-up');
if (countUpElements.length) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.textContent.trim().endsWith('+') ? '+' : '';
        animateCountUp(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.6 });
  countUpElements.forEach(el => observer.observe(el));
}

// Handle custom mobile menu overlay
function openMobileMenu() {
  document.getElementById('mobileMenuOverlay').classList.add('active');
  document.getElementById('mobileMenuBg').classList.add('active');
  document.body.classList.add('menu-open');
}

function closeMobileMenu() {
  document.getElementById('mobileMenuOverlay').classList.remove('active');
  document.getElementById('mobileMenuBg').classList.remove('active');
  document.body.classList.remove('menu-open');
}

document.addEventListener('DOMContentLoaded', function() {
  // Open menu on toggler click
  var toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    toggler.addEventListener('click', function(e) {
      e.preventDefault();
      openMobileMenu();
    });
  }
  // Close menu on close button click
  var closeBtn = document.getElementById('closeMobileMenu');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeMobileMenu();
    });
  }
});
