let button = document.getElementById("myButton");
button.addEventListener("click", () => {
  button.textContent = button.textContent === "On" ? "Off" : "On";
});