document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./createAccount.html";
  });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("form");
    createAccountForm.classList.remove("form");
  });

  document.querySelector("#login").addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "./ToDoList.html";
  });

  document.querySelector("#createAccount").addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "./ToDoList.html";
  });

  document.querySelector("#login .form__button").addEventListener("click", () => {
    window.location.href = "./ToDoList.html";
  });

  document.querySelector("#createAccount .form__button").addEventListener("click", () => {
    window.location.href = "./ToDoList.html";
  });
});
