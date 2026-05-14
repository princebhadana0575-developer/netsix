let signinBtn = document.querySelector("#sign");
let login = document.querySelector(".signin-modal");
let crossBtn = document.querySelector("#cross");

signinBtn.addEventListener("click", () => {
  login.classList.add("showmodal");
});
crossBtn.addEventListener("click", () => {
  login.classList.remove("showmodal");
});

let allQuestion = document.querySelectorAll(".faqitems h3");

allQuestion.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("hide");
    item.lastElementChild.classList.toggle("rotate");
  });
});
