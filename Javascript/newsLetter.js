document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("newsletter-modal");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("newsletter-form");


  modal.style.display = "block";

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;


    alert("¡Gracias por suscribirte!");
    modal.style.display = "none";
  });
});