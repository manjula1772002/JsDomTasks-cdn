const addBtn = document.getElementById("add");
const container = document.getElementById("list");
const foodItemInput = document.getElementById("food-item");

addBtn.addEventListener("click", () => {
  const foodItemValue = foodItemInput.value.trim();
  if (!foodItemValue) {
    alert("Please give valid input");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="flex justify-between mx-3">
      <p class="font-medium text-2xl">${foodItemValue}</p>
      <span class="delete cursor-pointer font-medium text-red-700 hover:bg-red-700 px-2 py-1 rounded hover:text-white">X</span>
    </div>
  `;
  const deleteBtn=li.querySelector('.delete');
  deleteBtn.addEventListener("click", () => {
    li.remove();
  })
  li.classList.add("items");
  container.append(li);
  foodItemInput.value = "";
});
