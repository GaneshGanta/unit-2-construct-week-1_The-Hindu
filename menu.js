window.addEventListener('load',function(){
    document.querySelector('#menuDiv').style.display='none';
});
document.querySelector('#menu').addEventListener('click',function(){
    document.querySelector('#menuDiv').style.display='block';
    document.querySelector('#menuDiv').style.backgroundColor='#2a5e88';
    document.querySelector('#tp').style.display='none';
    
});
document.querySelector('#startClose').addEventListener('click',function(){
    document.querySelector('#menuDiv').style.display='none';
    document.querySelector('#tp').style.display='block';
    document.querySelector('body').style.backgroundColor='#eaeaea';
});
document.querySelector('#endClose').addEventListener('click',function(){
    document.querySelector('#menuDiv').style.display='none';
    document.querySelector('#tp').style.display='block';
    document.querySelector('body').style.backgroundColor='#eaeaea';
    window.location.href='#page';
});