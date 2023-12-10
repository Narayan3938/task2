const header = document.querySelector(".navbar");
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

function submitForm() {
  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var comment = document.getElementById("comment").value;

  // Construct mailto link
  var mailtoLink =
    "mailto:someone@example.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + comment
    );

  // Open user's email client
  window.location.href = mailtoLink;
}