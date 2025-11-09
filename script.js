document.addEventListener("DOMContentLoaded", () => {
  const regform= document.getElementById("regform");
  if (regform) {
    regform.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("registermessage");

      if (!fullname || !email || !password) {
        if (message) {
          message.textContent = "Please fill in all fields.";
          message.style.color = "red";
        }
        return;
      }

      const user = { fullname,email, password };
      localStorage.setItem("registeredUser", JSON.stringify(user));

      if (message) {
        message.textContent = `Registration successful for ${fullname}!`;
        message.style.color = "green";
      }

      regform.reset();

      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    });
  }

  //login form
  const loginform=document.getElementById("loginform");
  if(loginform){
    loginform.addEventListener("submit", function(e){
      e.preventDefault();

      const email=document.getElementById("email").value.trim();
      const password=document.getElementById("password").value.trim();
      const message=document.getElementById("loginmessage");

      const storedUser=JSON.parse(localStorage.getItem("registeredUser"));
        if(!storedUser){
            message.textContent="No User found. Please register first.";
            message.style.color="red";
            return;
        }
        if(email===storedUser.email && password===storedUser.password){
            message.textContent=`Login successful! Welcome ${storedUser.fullname}!`;
            message.style.color="green";
            loginform.reset();
            localStorage.setItem("currentUser", JSON.stringify(storedUser));
            setTimeout(function() {
                window.location.href = "home.html";
            }, 2000);

        }else{
            message.textContent="Invalid email or password!";
            message.style.color="red";
            return;
        }
        });
    }

    const logoutlink=document.getElementById("logoutlink");
    if(logoutlink){
        logoutlink.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.href="login.html";
        });
    };

    // Display greeting on index.html
    const greeting=document.getElementById("greeting");
    const currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser && greeting){
        greeting.textContent=`Hello, ${currentUser.fullname}!`;
    }
});
const images = document.querySelector('.images');
if (images) {
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const totalImages = document.querySelectorAll('.images img').length;

let index = 0;

function showImage() {
  images.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalImages;
  showImage();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  showImage();
});

// Optional: auto-slide every 5 seconds
setInterval(() => {
  nextBtn.click();
}, 5000);
}