let headerbtn =document.querySelectorAll('.header');
let contentbtn =document.querySelectorAll('.contenta');


headerbtn.forEach(header => {
    header.addEventListener('click', () =>{
        contentbtn.forEach(content =>{
            content.style.display="none"
        });
         header.nextElementSibling.style.display = "block";
    });
    
});