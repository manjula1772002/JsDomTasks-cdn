import"./modulepreload-polyfill-B5Qt9EMX.js";const d=document.getElementById("add"),o=document.getElementById("list"),n=document.getElementById("food-item");d.addEventListener("click",()=>{const t=n.value.trim();if(!t){alert("Please give valid input");return}const e=document.createElement("li");e.innerHTML=`
    <div class="flex justify-between mx-3">
      <p class="font-medium text-2xl">${t}</p>
      <span class="delete cursor-pointer font-medium text-red-700 hover:bg-red-700 px-2 py-1 rounded hover:text-white">X</span>
    </div>
  `,e.querySelector(".delete").addEventListener("click",()=>{e.remove()}),e.classList.add("items"),o.append(e),n.value=""});
