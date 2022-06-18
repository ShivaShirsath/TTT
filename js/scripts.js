o="&#11093";
x="&#10060";
s="";
turn=true;
steps=0;
document.onclick = function(e){
    e.target.disabled=true;
    //alert(e.target.id)
    if(turn){
        s=o;
    } else {
        s=x;
    }
    e.target.innerHTML=s;
    turn =! turn;
    steps++;
    if(steps==9){
        alert("tia");
    }
}
