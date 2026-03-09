// script.js – Enhanced

window.addEventListener('load', () => {

const pre = document.getElementById('preloader');

setTimeout(() => {

pre.style.opacity = '0';

setTimeout(() => pre.style.display = 'none', 1200);

}, 4500); // Longer cinematic delay

});

// Particles – more subtle & premium

particlesJS('particles-js', {

particles: {

number: { value: 40, density: { enable: true, value_area: 1000 } },

color: { value: ['#00f0ff', '#ff3d00'] },

shape: { type: 'circle' },

opacity: { value: 0.4, random: true, anim: { enable: true, speed: 0.8 } },

size: { value: 2.5, random: true },

line_linked: { enable: false },

move: { enable: true, speed: 0.8, direction: 'none', random: true, out_mode: 'out' }

},

interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: false } } },

retina_detect: true

});

// Typewriter

const roles = ["Web3 Collab Manager", "Moderator", "Graphic Designer", "Web Developer"];

let i=0, j=0, isDeleting=false;

const tw = document.getElementById('typewriter-text');

function type() {

const cur = roles[i];

if (!isDeleting && j <= cur.length) {

tw.innerHTML = cur.substring(0,j++) + '<span class="cursor">|</span>';

setTimeout(type,80);

} else if (isDeleting && j >=0) {

tw.innerHTML = cur.substring(0,j--) + '<span class="cursor">|</span>';

setTimeout(type,40);

} else if (!isDeleting && j > cur.length) {

isDeleting = true; setTimeout(type,1800);

} else {

isDeleting = false; i = (i+1)%roles.length; setTimeout(type,600);

}

}

type();

// Progress bar

window.addEventListener('scroll', () => {

const scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

document.getElementById('progress-bar').style.width = scrolled + '%';

});

// AOS

AOS.init({ duration: 1300, once: true, easing: 'ease-out-back' });

// Parallax on hero NFT

window.addEventListener('scroll', () => {

const heroNft = document.querySelector('.parallax');

const scrollPos = window.scrollY;

heroNft.style.transform = `translateY(${scrollPos * 0.15}px)`;

});

// Skill bars trigger

const progressBars = document.querySelectorAll('.progress');

const obs = new IntersectionObserver(entries => {

entries.forEach(e => { if (e.isIntersecting) e.target.style.width = e.target.style.width; });

}, { threshold: 0.5 });

progressBars.forEach(bar => obs.observe(bar));

// Mobile navbar toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.innerHTML = navLinks.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});
