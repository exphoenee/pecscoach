function sctollToContent() {
  document.querySelectorAll('.scrollTo').forEach(scrollToBtn => {
    scrollToBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(scrollToBtn.dataset.target);
      const headerHeight = document.getElementsByTagName('header')[0]?.offsetHeight || 100;
      const to = target.offsetTop - headerHeight;

      window.scrollTo({ top: to, left: 0, behavior: 'smooth' });

      const navButton = document.querySelector('.navbar-toggler');
      const navMenu = document.querySelector('.navbar-collapse');
      if (navButton) navButton.classList.add('collapsed');
      if (navMenu) navMenu.classList.remove('show');
    });
  });
}

function initHidingButtons() {
  const hideAtPosition = document.querySelectorAll('.hideAtPosition');
  if (hideAtPosition.length > 0) {
    hideAtPosition.forEach(button => {
      const hideAt = parseInt(button.dataset.hideat) || 0;
      window.addEventListener('scroll', () => {
        if (window.scrollY > hideAt) {
          button.classList.remove('hide-btn');
        } else {
          button.classList.add('hide-btn');
        }
      });
    });
  }
}

function initGliders() {
  if (typeof Glide !== 'undefined') {
    new Glide('#testimonials-glider', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      gap: 20,
      autoplay: 4000,
      hoverpause: true,
      animationDuration: 500,
      breakpoints: {
        1200: { perView: 2 },
        800: { perView: 1 }
      }
    }).mount();

    new Glide('#blog-glider', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      autoplay: 10000,
      hoverpause: true,
      animationDuration: 500,
      breakpoints: {
        1400: { perView: 2 },
        850: { perView: 1 }
      }
    }).mount();
  }
}

function mottoAnimations() {
  const motto = document.querySelector('.title');
  if (!motto) return;
  const mottoText = motto.querySelector('h2.motto-title');
  if (!mottoText) return;

  const text1 = mottoText.innerHTML;
  const text2 = mottoText.dataset.target;

  setInterval(() => {
    setTimeout(() => {
      motto.classList.add('out');
      setTimeout(() => {
        if (mottoText.innerHTML === text1) {
          mottoText.innerHTML = text2;
        } else {
          mottoText.innerHTML = text1;
        }
        motto.classList.remove('out');
      }, 500);
    }, 500);
  }, 5000);
}

window.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
  sctollToContent();
  initHidingButtons();
  initGliders();
  mottoAnimations();
});
