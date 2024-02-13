
setTimeout(()=>{
    document.querySelector("#image1").style.visibility = "visible" ;
},2000);
setTimeout(()=>{
    document.querySelector("#image2").style.visibility = "visible" ;
},4000);
setTimeout(()=>{
    document.querySelector("#image3").style.visibility = "visible" ;
},6000);
setTimeout(()=>{
    document.querySelector("#image1").style.visibility = "hidden" ;
    document.querySelector("#image2").style.visibility = "hidden" ;
    document.querySelector("#image3").style.visibility = "hidden" ;
    document.querySelector("#image4").style.visibility = "visible" ;
},10000);