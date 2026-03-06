import"./modulepreload-polyfill-B5Qt9EMX.js";const d=document.getElementById("ProjectName"),t=document.getElementById("framework"),n=document.getElementById("Level"),i=document.getElementById("developers"),o=document.getElementById("durations"),v=document.getElementById("btn"),l=document.getElementById("Result"),E={React:6e3,Angular:7e3,vuejs:4e3,Phython:5e3,PHP:4500},p={Easy:1,Medium:1.5,Complex:2};v.addEventListener("click",r=>{r.preventDefault();try{if(!t.value||!d.value||!n.value)throw new Error("Please fill the Required");const e=E[t.value],c=p[n.value],s=Number(i.value),m=Number(o.value),u=Number(o.value)*168,a=e*c*s*m;l.innerHTML=`
    <p class="text-green-700 font-bold">
      Estimated Cost ₹${a} for${u}hr
      
    </p>
  `}catch(e){l.innerHTML=`<p class="text-red-700 font-medium">${e.message}</p>`}});
