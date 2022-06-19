o = document.createElement("span");
x = document.createElement("span");
turns = document.getElementById("turns");

o.innerHTML = "&#11093";
x.innerHTML = "&#10060";
turns.innerHTML = x.innerHTML;

t = "";
s = "";
steps = 0;

document.onclick = function(e) {
  if (e.target.id == "turn" || e.target.id == "turns") {
    toggle();  
  } else if (e.target.type == "submit" && e.target.innerHTML == "") {
    e.target.disabled = true;
    document.getElementById("turn").disabled = true;
    document.getElementById("turns").disabled = true;
    toggle();
    e.target.innerHTML = s;
    steps++;
    checkWin();
  }
};

function checkWin(){
  r = "";
  if (isWin(s)){
    r = s + " is Winner";
  } else if (steps == 9) {
    r = "Draw";
  }
  if (!r == "") {
    alert(r);
    reload(); 
  } 
}

function toggle(){
  if (turns.innerHTML.includes(o.innerHTML)) {
    s = o.innerHTML;
    t = x.innerHTML;
  } 
  if (turns.innerHTML.includes(x.innerHTML)) {
    s = x.innerHTML;
    t = o.innerHTML;
  }
  turns.innerHTML = t;
}

function check(e0, e1, e2, s){
  return document.getElementById(e0).innerHTML.includes(s) &&
    document.getElementById(e1).innerHTML.includes(s) &&
    document.getElementById(e2).innerHTML.includes(s);
}

function isWin(s) {
  return check("0", "1", "2", s) || 
         check("3", "4", "5", s) ||
         check("6", "7", "8", s) ||
         check("0", "3", "6", s) ||
         check("1", "4", "7", s) ||
         check("2", "5", "8", s) ||
         check("0", "4", "8", s) ||
         check("6", "4", "2", s)
  ;
}

function reload(){
  document.location.reload(true);
}
