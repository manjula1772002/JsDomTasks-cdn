let redBtn=document.getElementById("Red");
let orangeBtn=document.getElementById("Orange");
let greenBtn=document.getElementById("Green");
let randomBtn=document.getElementById("Random");

let body=document.body;

// RED
redBtn.addEventListener('click',()=>{
    body.style.background="red";
})
//yellow
orangeBtn.addEventListener('click',()=>{
    body.style.background="orange";
})
// green
greenBtn.addEventListener('click',()=>{
    body.style.background="green";
})




// random 
randomBtn.addEventListener('click', () => {
  const randomColorFunc = () => {
    let letters = 'ABCDEF1234567890';
    let color = '#';

    
    for (let i = 0; i < 6; i++) {
      let colorCode = letters[Math.floor(Math.random() * 16)];
      color += colorCode;
    }

    return color;
  };

  body.style.background = randomColorFunc();

  
});