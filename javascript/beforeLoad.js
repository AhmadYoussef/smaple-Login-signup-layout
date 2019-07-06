window.addEventListener('load', checkLoginStatus());

function checkLoginStatus(){
    if(localStorage.data != undefined){
        let exe = window.location.href.split('/').pop();
        let count =0;
        var arr = localStorage.data.split('.!.');
        for(let i =0; i< arr.length; i++){
            let obj = JSON.parse(arr[i]);
            if(obj.loginStatus === true){
                count++;
                if(/index.html/.test(exe) || /signup.html/.test(exe)){
                    window.location.href= './logout.html';
                }
            }
        }
        if(count === 0 && /logout.html/.test(exe))
        window.location.href= './index.html';
    }
}