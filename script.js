// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission message
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  this.reset();  // Reset form fields after submission
});
