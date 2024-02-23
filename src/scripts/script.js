window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const heroHeight = document.querySelector('.hero').offsetHeight;
  
  // Check if scrolled past the hero section
  if (window.scrollY > heroHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});





// card section
/*document.addEventListener('DOMContentLoaded', function() {
  const viewMoreBtn = document.getElementById('view-more-btn');
  const hiddenCards = document.querySelectorAll('.hidden');

  viewMoreBtn.addEventListener('click', function() {
    hiddenCards.forEach(card => {
      card.classList.toggle('hidden');
    });

    if (viewMoreBtn.textContent === 'View More Projects') {
      viewMoreBtn.textContent = 'View less';
    } else {
      viewMoreBtn.textContent = 'View More Projects';
    }
  });
});*/
// active link switching
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbar a");

  window.addEventListener("scroll", function() {
    let bottomOfViewport = window.scrollY + window.innerHeight;
    let offset = window.innerHeight * 0.4; // 20% of the viewport height

    sections.forEach(section => {
      let sectionTop = section.offsetTop;
      let sectionBottom = sectionTop + section.offsetHeight;

      if (
        sectionTop < bottomOfViewport - offset &&
        sectionBottom > window.scrollY + offset
      ) {
        navLinks.forEach(link => {
          if (link.hash === "#" + section.id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  });
});
