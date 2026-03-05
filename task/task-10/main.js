const fruits = document.querySelectorAll(".fruit");
const cartTotal = document.getElementById("cartTotal");

function updateCartTotal() {

let sum = 0;

document.querySelectorAll(".fruit").forEach((fruit) => {

const count = Number(fruit.querySelector(".count").textContent);
const price = Number(fruit.dataset.price);

sum += count * price;

});

cartTotal.textContent = sum;

if(sum === 0){
cartTotal.classList.add("text-red-600");
cartTotal.classList.remove("text-green-600");
}else{
cartTotal.classList.add("text-green-600");
cartTotal.classList.remove("text-red-600");
}

}

fruits.forEach((fruit)=>{

let count = 0;
const price = Number(fruit.dataset.price);

const minus = fruit.querySelector(".minus");
const plus = fruit.querySelector(".plus");
const qty = fruit.querySelector(".count");
const total = fruit.querySelector(".total");

plus.addEventListener("click",()=>{

count = Math.min(15,count+1);
qty.textContent = count;
total.textContent = "₹ " + count * price;

updateCartTotal();

});

minus.addEventListener("click",()=>{

count = Math.max(0,count-1);
qty.textContent = count;
total.textContent = "₹ " + count * price;

updateCartTotal();

});

});