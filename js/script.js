const btnMobile = document.querySelector('.btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDeafault();
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu, { passive: true });

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animascroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }
    animascroll();

    window.addEventListener('scroll', animascroll);
  }
}

initAnimacaoScroll();
