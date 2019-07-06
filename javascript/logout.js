let logoutBtn = document.querySelector('input[type="submit"');
let arr =  (localStorage.data).split('.!.');

logoutBtn.addEventListener('click',(e)=>{logout(e)});


function logout(e){
    e.preventDefault();
    for(let i =0; i< arr.length; i++){
        let obj = JSON.parse(arr[i]);
        if(obj.loginStatus === true){
            obj.loginStatus = false;
            arr[i]= JSON.stringify(obj);
            break;
        }
     }
     localStorage.data = arr.join('.!.');
     window.location.href = './index.html';
}