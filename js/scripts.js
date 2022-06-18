o = document.getElementById("o");
o.innerHTML = "&#11093";
x = document.getElementById("x");
x.innerHTML = "&#10060";

turns = document.getElementById("turns");
turns.innerHTML = x.innerHTML;
t = "";
s = "";
turn = true;
steps = 0;
document.onclick = function(e) {
  if (e.target.id=="turn") {
    if (turns.innerHTML.includes(o.innerHTML)) {
      s = o.innerHTML;
      t = x.innerHTML;
    } 
    if (turns.innerHTML.includes(x.innerHTML)) {
      s = x.innerHTML;
      t = o.innerHTML;
    }
  }
  if (e.target.type == "submit" && e.target.innerHTML == "") {
    e.target.disabled = true;
    document.getElementById("turn").disabled = true;
    
    turns.innerHTML = t;
    e.target.innerHTML = s;
    steps++;
    if (steps == 9) {
      alert(e.target.innerHTML);
      document.location.reload(true);
    } else if (isWin()){

    }
  }
};/*
function isWin(turn) {
  return 
      012 345 678
      036 147 258
        048 246
}*/
