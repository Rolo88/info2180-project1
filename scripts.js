window.addEventListener("load", () => {
  const Form = document.querySelector("form");

  Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    const displayMessage = document.querySelector(".message");
    if (email === "") {
      displayMessage.textContent = "Please enter a valid email address.";
    } else {
      displayMessage.textContent =
        "Thank you! Your email address" +
        " " +
        email +
        " " +
        "has been added to our mailing list!";
    }
    document.getElementById("email").value = "";
  });
});
