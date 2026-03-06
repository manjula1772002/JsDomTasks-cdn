const toggleBtn=document.getElementById('Toggle');
const cardEl=document.getElementById('card');


toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark=document.body.classList.contains("dark");

    cardEl.classList.toggle("active", dark);
  toggleBtn.textContent = dark ? "☀️" : "🌙";
  

})