let ele1 = document.getElementById('one');


function anime(){
    const val=Math.floor(Math.random()*10*10)+'%';
    if(ele1.childElementCount<=10){
       let el= ele1.appendChild(document.createElement('h2'))
       el.setAttribute('id','love')
       el.innerText='🌸'
       el.style.left = val;
    }else{
       ele1.removeChild(ele1.firstElementChild)   
    }
}
setInterval(anime,100)
