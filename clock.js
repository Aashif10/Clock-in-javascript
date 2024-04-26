let Hour=document.getElementById("hour");
let Minute=document.getElementById("minute")
let Second=document.getElementById("second")

function setDial(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

       // logic of rotation
       let hRotate=30*hh + 0.5*mm;
       let mRotate=6*mm;
       let sRotate=6*ss;

       // Rotation Niddle
       Hour.style.transform=`rotate(${hRotate}deg)`;
       Minute.style.transform=`rotate(${mRotate}deg)`;
       Second.style.transform=`rotate(${sRotate}deg)`;
    }
    setInterval(setDial,1000)