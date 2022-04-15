function toggle() {
    let element =document.getElementById("extra");
    if(element.style.display==='none'){
        element.style.display='inline';
        document.getElementsByClassName("button")[0].innerText="Less";
    }else{
        element.style.display='none';
        document.getElementsByClassName("button")[0].innerText="More";
    }
}