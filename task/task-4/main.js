let inputEl = document.querySelector(".inputBtn");
let submitEl = document.querySelector(".submit");
let displayEl = document.getElementById("display");

submitEl.addEventListener("click", (e) => {
    e.preventDefault();

    let name = inputEl.value.trim();

    if (name.length === 0) {
        alert("Please enter the name");
        displayEl.style.display = "none";
        return;
    }

    displayEl.style.display = "block";
    displayEl.innerText = `Hello ${name}, Welcome to CyberDude Networks`;
    inputEl.value = "";
});
 