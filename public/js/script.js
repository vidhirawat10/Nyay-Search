document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const menuBtn = document.getElementById("menu-btn");
    const userBtn = document.getElementById("user-btn");
    const userDropdown = document.getElementById("user-dropdown");
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

   


    
   
    // Scroll to Hero Section on Brand Click
    document.querySelector('.brand').addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });

});

// Scroll functionality for navbar visibility
let lastScrollY = window.scrollY;
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down - hide navbar
        navbar.classList.add('hide');
        navbar.classList.remove('show');
    } else {
        // Scrolling up - show navbar
        navbar.classList.add('show');
        navbar.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});

// Redirect functions
function redirectToChatbot() {
    window.location.href = "chatbotpg.html";
}

function redirectTologinpg() {
    window.location.href = "login.html";
}

function redirectTocommunityforum() {
    window.location.href = "communityforum.html";
}

function redirectTolawyersearch() {
    window.location.href = "lawyersearch.html";
}

function redirectTosearchpage() {
    window.location.href = "search.html";
}

// Smooth scrolling to sections
function redirectToFeature() {
    document.querySelector('#feature').scrollIntoView({ behavior: 'smooth' });
}

function redirectToUser() {
    document.querySelector('#user').scrollIntoView({ behavior: 'smooth' });
}

// Update Live Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = "Live Time: " + timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Chat Support Function
function openChat() {
    alert("Live chat support is coming soon!");
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const closeButton = document.querySelector('.close-sidebar');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    }
});
