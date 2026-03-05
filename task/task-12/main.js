let upperCasebtn=document.getElementById('toUpperCaseText');
let lowerCasebtn=document.getElementById('toLowerCaseText');
let clearbtn=document.getElementById('clearText');
let text=document.getElementById('TextArea');
let errorMsg=document.getElementById('error');
let btnEl=document.querySelectorAll('.button');
let count=document.getElementById('count');

const maxLimit=200;
//  text limiting 
text.addEventListener('input', () => {
    let content = text.value;

    count.textContent = content.length;

    if (content.length >= maxLimit) {
        errorMsg.textContent = "Text limit reached (200 words)";
        errorMsg.style.display = "block"; 
        text.style.border = "solid 4px red"; 
    } else {
        errorMsg.style.display = "none"; 
    }
});



//  btn functions  validations
btnEl.forEach(btn => {
    btn.addEventListener('click', () =>{
        let content =text.value.trim();
        
        if  (content===''){
            errorMsg.textContent="*Please enter some text";
            errorMsg.style.display='block';
            return;
        }
        if (content.length<2){
            errorMsg.textContent="Text content should be at least two letters";
            errorMsg.style.display='block';
            return;
        }
        errorMsg.style.display = 'none';
    })    
});
//  upperCasebtn
upperCasebtn.addEventListener('click', () => {
    let content=text.value.trim();
    if (content.length>=2){
    let upper= content.toUpperCase();
      return text.value=upper;}

})
//  lowerCasebtn
lowerCasebtn.addEventListener('click', () => {
    let content=text.value.trim();
    if (content.length>=2){
    let lower= content.toLowerCase();
      return text.value=lower;}

})

// clearbtn
clearbtn.addEventListener('click', () => {
    return text.value="";
})





