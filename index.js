const mobile_nav =document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector('.header')

mobile_nav.addEventListener('click', () =>{
    nav_header.classList.toggle('active')
})












// <!-- JS Part -->
// <script type="text/javascript">
// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const address = document.getElementById('address');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');

// form.addEventListener('submit' , (event) => { 
//      event.preventDefault();
//      validate();
// })

// const isEmail = (emailVal)=>{
//     var atSymbol = emailVal.indexOf("@");
//     if(atSymbol< 1) return false;
//     var dot = emailVal.lastIndexOf('.')
//     if(dot <= atSymbol + 2) return false
//     if(dot === emailVal.length -1) return false
//     return true
// }
// //remove white spaces
// const validate = () => {       
//     const usernameVal = username.value.trim();
//     const addressVal = address.value.trim();
//     const emailVal = email.value.trim();
//     const phoneVal = phone.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();

//     //validate username
//     if(usernameVal === ""){
//         setErrormsg(usernameVal,'name cannot be blank');
//     }else if(usernameVal.length <= 2 ){
//         setErrormsg(usernameVal,'name min 3 characters');
//     }else{
//         setSuccessMsg(usernameVal);
//     }

//     if(emailVal === ""){
//         setErrormsg(emailVal,'email cannot be blank');
//     }else if(!isEmail(emailVal)) {
//         setErrormsg(emailVal,'enter a valid email')
//     }else{
//         setSuccessMsg(emailVal);
//     }

 
// }

// function setErrormsg (input, errormsg)  {
//     const formControl = input.parentElement
//     const small = formControl.querySelector('small');
//     formControl.className = "form_control error";
//     small.innerText = errormsg;
    
// }

// function setSuccessMsg(input){
//     const formControl = input.parentElement;
//     formControl.className = "form_control success";
    
// }


