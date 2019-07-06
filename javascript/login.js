const loginBtn = document.querySelector('input[type="submit"]');
const mail = document.querySelector('input[name="mail"]');
const password = document.querySelector('input[name="password"]');

loginBtn.addEventListener('click', (e)=>{login(e)});



function login(e){
    // e.preventDefault();
    if(localStorage.data != undefined){
        let arr = localStorage.data.split('.!.');
        for(let i = 0; i< arr.length;i++){
            let obj = JSON.parse(arr[i]);
            if(obj.mail === mail.value){
                if(obj.password === password.value){
                    obj.loginStatus = true;
                    arr[i] = JSON.stringify(obj);
                    localStorage.data = arr.join('.!.');
                    break;
                    // window.location.href = ''
                }
            }
        }
    }
}