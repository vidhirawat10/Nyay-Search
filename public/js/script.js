const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// redirecting to chatbot pg
function redirectToChatbot() {
    window.location.href = "chatbotpg.html";
  }

  // redirecting to login pg
function redirectTologinpg(){
    window.location.href = "login.html";
}

// redirect to community forum pg
function redirectTocommunityforum(){
    window.location.href = "communityforum.html";
} 

// redirect to lawyer search
function redirectTolawyersearch(){
    window.location.href = "lawyersearch.html";
}

// redirect to search page
function redirectTosearchpage(){
    window.location.href = "search.html";
}