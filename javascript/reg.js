const mail = document.querySelector('input[name="email"]');
const name = document.querySelector('input[name="name"]');
const password = document.querySelector('input[name="password"]');
const registerBtn = document.querySelector('input[type ="submit"');
if(localStorage.data === undefined){
    var arr = [];
}else{
    var arr = localStorage.data.split('.!.');
}


registerBtn.addEventListener('click',(e)=>{checkRegister(e)});
mail.addEventListener('blur', checkEmail);
name.addEventListener('blur', checkName);
password.addEventListener('blur',checkPassword);


function checkEmail(){
    let exists = mailExists();
    if(mail.value == ''){
        mail.value = '';
        mail.placeholder = "Enter your email Address...";
        mail.style.border = ' 1px solid red';
        return false;
    }else if(!exists){
        mail.value = '';
        mail.placeholder = "This email is exists...";
        mail.style.border = ' 1px solid red';
        return false;
    }
    else{
        mail.placeholder = "yourmail@example.com";
        mail.style.border = ' 1px solid #dedede';        
        return true;    
    }
}
function checkName(){
    if(name.value == ''){
        name.value = '';
        name.placeholder = "Enter your name ...";
        name.style.border = ' 1px solid red'; 
        return false;
    }else{
        name.style.border = ' 1px solid #dedede';    
        return true;    
    }
}
function checkPassword(){
    if(password.value == ''){
        password.value = '';
        password.placeholder = "Enter your password ...";
        password.style.border = ' 1px solid red';
        return false;
    }else{
        password.style.border = ' 1px solid #dedede';        
        return true;    
    }
}
function checkRegister(e){
    e.preventDefault();
    let mailCheck = checkEmail();
    let nameCheck = checkName();
    let passwordCheck = checkPassword();
    let checkBox = document.querySelector('input[type="checkbox"]');
    if(checkBox.checked){
        document.querySelector('.checkError').style.display= 'none';
        if(mailCheck && nameCheck && passwordCheck){
            completeRegister();
            window.location.href = './index.html';
        }
    }else{
        document.querySelector('.checkError').style.display= 'inline';
    }
}

function completeRegister(){
    let obj = new Object();
    obj.name = name.value;
    obj.mail = mail.value;
    obj.password = password.value;
    obj.loginStatus = true;
    arr.push(JSON.stringify(obj));
    localStorage.data = arr.join('.!.');
}

function mailExists(){
    for(let i =0; i< arr.length; i++){
       let obj = JSON.parse(arr[i]);
       if(obj.mail === mail.value){
            return false;
       }
    }
    return true;
}

