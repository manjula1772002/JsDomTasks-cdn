const btnEl=document.getElementById('btn');
const inputEl=document.getElementById('input');
const result=document.getElementById('result');

btnEl.addEventListener('click',async() => {
   try {
  const url = inputEl.value.trim();

  if (!url) {
    throw new Error("Please enter the URL");
  }
  if (!url.includes("github.com/")){
    throw new Error("Please enter a valid GitHub URL")
  }


const username=url.split("github.com/")[1] .replace("/", "");
const response = await fetch(`http://api.github.com/users/${username}`);
 
 if(!response.ok){
    throw new Error('User not found');
    
 }
 const data = await response.json();

  result.innerHTML = `<img src="${data.avatar_url}">
                     <h2>${data.name}</h2>`;
   }
     catch (error) {
    result.innerHTML = `<p>${error.message}</p>`;
  }
 

})