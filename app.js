const nam = document.getElementById("names");
const spe = document.getElementById("spent");
let totspent = 0;
let listnames = [];
let listspent = [];

function SavePerson(names,spent){
    listnames.push(names);
    listspent.push(spent);
    totspent += spent;
}

function ShowSpent(names,spent){
    const divlist = document.getElementById("listspent");
    let p = document.createElement("p");
    p.innerText = names+": $"+spent;
    divlist.append(p);
}

function TotalAndEach(spent){
    let people = listnames.length;
    let division = (spent/people).toFixed(2);
    total.innerText=`Total: $${spent}`;
    final.innerText=`A cada uno le toca aportar: $${division}`;
}

function totaldivision(){
    let names = nam.value;
    let spent = parseFloat(spe.value);
    SavePerson(names,spent);
    ShowSpent(names,spent);
    TotalAndEach(totspent); 
}

function refresh(){
    location.reload(true);
  }