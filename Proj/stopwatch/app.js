var x=y=z=0
var mytimer
var flag=false
function start(){
    x=y=z
    flag=false
    mytimer=setInterval(myInterval,10)
    document.getElementById('btn1').disabled=true

}
function myInterval(){
    x+=1
    if(x===100){
        y+=1
        x=0
        if(y===60){
            z+=1
            y=0
            if(z===60){
                x=y=z=0
            }
        }
    }
    document.getElementById('result').innerHTML=`<h1>`+String(z).padStart(2,0)+`:`+String(y).padStart(2,0)+`:`+String(x).padStart(2,0)+`</h1>`

}
function pause_resume(){
    flag=!flag
    if(flag===true){
        clearInterval(mytimer)
    }
    else{
        mytimer=setInterval(myInterval,10)
    }

}
function clear_all(){
    clearInterval(mytimer)
    x=y=z=0
    flag=false
    document.getElementById('result').innerHTML=
    `<h1>00:00:00</h1>`
    document.getElementById('btn1').disabled=false

}