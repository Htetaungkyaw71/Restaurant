import "./style.css"
import bg2 from "./images/bg2.jpg"
import bg1 from "./images/bg1.jpg"
import bg3 from "./images/bg3.jpg"
import bg5 from "./images/bg5.jpg"




let eat = document.querySelector(".eat");
let re = document.querySelector("#re");
let re1 = document.querySelector("#re1");
let order = document.querySelector("#order");
let order1 = document.querySelector("#order1");
let order2 = document.querySelector("#order2");
let order3 = document.querySelector("#order3");
let menu = document.querySelector("#menu");
let drink = document.querySelector(".drink");
let visit = document.querySelector(".visit");
let home = document.querySelector("#home");

eat.onmouseover = () =>{
    document.querySelector("#home").style.backgroundImage = `url(${bg2})`;
}
eat.onmouseout = () =>{
    document.querySelector("#home").style.backgroundImage = `url(${bg1})`;
}
drink.onmouseover = () =>{
    document.querySelector("#home").style.backgroundImage = `url(${bg3})`;
}
drink.onmouseout = () =>{
    document.querySelector("#home").style.backgroundImage = `url(${bg1})`;
}
visit.onmouseover = () =>{
    document.querySelector("#home").style.backgroundImage = `url(${bg5})`;
}
visit.onmouseout = () =>{
    document.querySelector("#home").style.backgroundImage = `url(${bg1})`;
}


// main js

let eatPage = document.querySelector("#eat-page")
let drinkPage = document.querySelector("#drink-page")
let visitPage = document.querySelector("#visit-page")
let outerdiv = document.querySelector("#outer-div")
let main_bgColor = document.querySelector("#home").style.backgroundColor;

eat.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "block"
    outerdiv.style.display = "flex";
    drinkPage.style.display = "none"
    visitPage.style.display = "none"
    main_bgColor = "white";
  

}
menu.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "block"
    outerdiv.style.display = "flex";
    drinkPage.style.display = "none"
    visitPage.style.display = "none"
    main_bgColor = "white";
  

}
drink.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "none"
    drinkPage.style.display = "block"
    visitPage.style.display = "none"
    main_bgColor = "white";


}
visit.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "none"
    drinkPage.style.display = "none"
    visitPage.style.display = "block"
    main_bgColor = "white";
 

}
order.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "none"
    drinkPage.style.display = "none"
    visitPage.style.display = "block"
    main_bgColor = "white";
 

}
order1.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "none"
    drinkPage.style.display = "none"
    visitPage.style.display = "block"
    main_bgColor = "white";
 

}
order2.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "none"
    drinkPage.style.display = "none"
    visitPage.style.display = "block"
    main_bgColor = "white";
 

}
order3.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "none"
    drinkPage.style.display = "none"
    visitPage.style.display = "block"
    main_bgColor = "white";
}
re.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "none"
    drinkPage.style.display = "none"
    visitPage.style.display = "block"
    main_bgColor = "white";
 

}

re1.onclick = ()=>{
    document.querySelector("#home").style.display = 'none'
    home.style.display = "none";
    eatPage.style.display = "none"
    drinkPage.style.display = "none"
    visitPage.style.display = "block"
    main_bgColor = "white";

}





