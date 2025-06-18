document.getElementById('scroll-down-btn').addEventListener('click', function () {
    document.getElementById('poker-night').scrollIntoView({ behavior: 'smooth' });
});

const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide the button when scrolling
function handleScroll() {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

// Scroll to top on click
function scrollToTopHandler() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listeners
window.addEventListener('scroll', handleScroll);
scrollToTopBtn.addEventListener('click', scrollToTopHandler);

// Run once on load
handleScroll();

// Count-up animation using Intersection Observer
function animateCountUp(el, target, suffix = '') {
  let start = 0;
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
