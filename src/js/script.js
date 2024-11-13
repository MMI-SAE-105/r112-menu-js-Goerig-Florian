const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const body = document.body


toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true"; 
    const isClosed = !isOpen; 
    console.log("isOpen : ", isOpen, "isClosed : "),
  
  nav.ariaHidden = isOpen;
  toggle.ariaExpanded=isClosed;
  body.classList.toggle("noscroll")
});