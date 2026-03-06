const searchInput = document.getElementById("input");
const categories = document.querySelectorAll(".division");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  categories.forEach((category) => {
    const vegItems = [...category.querySelectorAll("li")];

    // check if any item matches
    const match = vegItems.some((veg) => {
      const matchItem = veg.textContent.toLowerCase().includes(searchValue);


      veg.style.display = matchItem ? "block" : "none";
      return matchItem;
    });

    
    // category.style.display = match ? "block" : "none";
  });
});
