let fullName=document.getElementById('name');
let password=document.getElementById('password');
let submitBtn=document.getElementById('submit');
let showbtn=document.getElementById('checkbox');

showbtn.addEventListener('click', () => {
    if(password.type==='password'){
        password.setAttribute('type','text');       
    }else{
        password.setAttribute('type','password');
    }
})