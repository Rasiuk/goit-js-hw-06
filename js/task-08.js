const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  if (formElements.email.value && formElements.password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  //   const formData = new FormData(event.currentTarget);
  const email = formElements.email.value;
  const password = formElements.password.value;
  console.log(email, password);

  event.currentTarget.reset();
}
