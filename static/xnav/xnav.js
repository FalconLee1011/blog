const RWD_WITDH = 800;

// UI Events
function registerNavbarShrinkEvent(){
  const nav = document.getElementById("nav");
  window.onscroll = () => {
    if(window.innerWidth < RWD_WITDH){
      return;
    }
    if (document.body.scrollTop  > 30 || document.documentElement.scrollTop > 30){
      nav.classList.add("shrink");
    }
    else{
      nav.classList.remove("shrink");
    }
  }
}

function registerNavbarExpandEvent(){
  const navMenuBtn = document.getElementById("nav-menu-button");
  const navItems = document.getElementById("nav-items");
  navMenuBtn.onclick = () => {
    console.log("navMenuBtn.onclick");
    if(navItems.classList.contains("show")){
      navItems.classList.remove("show");
      navMenuBtn.classList.remove("show");
    }
    else{
      navItems.classList.add("show");
      navMenuBtn.classList.add("show");
    }
  }
}

function registerUIEvents() {
  registerNavbarShrinkEvent();
  registerNavbarExpandEvent();
  console.log("events registered");
}

document.addEventListener("DOMContentLoaded", function () {
  registerUIEvents();
});