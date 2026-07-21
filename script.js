const search = document.getElementById("search");
const games = document.querySelectorAll(".card");


search.addEventListener("keyup",()=>{

let value = search.value.toLowerCase();


games.forEach(game=>{

let name = game.innerText.toLowerCase();

if(name.includes(value)){
    game.style.display="block";
}else{
    game.style.display="none";
}

});


});
