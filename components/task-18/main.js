const projectName=document.getElementById('ProjectName');
const work=document.getElementById('framework');
const complex=document.getElementById('Level');
const count=document.getElementById('developers');
const durations=document.getElementById('durations');
const btnEl=document.getElementById('btn');
const resultEl=document.getElementById('Result');

const frameworkPrice={
    React:6000,
    Angular:7000,
    vuejs:4000,
    Phython:5000,
    PHP:4500
};

const multiplyLevel={
    Easy: 1,
  Medium: 1.5,
  Complex: 2
};




btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    try{if(!work.value||!projectName.value||!complex.value){
         throw new Error("Please fill the Required");
    }
     const framePrice=frameworkPrice[work.value];
     const levelPrice=multiplyLevel[complex.value];
     const developers=Number(count.value);
     const Weeks=Number(durations.value);
     
    const hours=Number(durations.value)*168;
     const totalCost=framePrice*levelPrice*developers*Weeks;
       resultEl.innerHTML = `
    <p class="text-green-700 font-bold">
      Estimated Cost ₹${totalCost} for${hours}hr
      
    </p>
  `;}
        catch (error) {
    resultEl.innerHTML = `<p class="text-red-700 font-medium">${error.message}</p>`;
  }
      

    })