document.getElementById("getStart").addEventListener("click",randomPokemon);
function randomPokemon(){
    var quantityNumbers=898;
    var myArray=[];
    while(myArray.length<quantityNumbers){
        var numberRandom=Math.ceil(Math.random()*quantityNumbers);
        var exist=false;
        for(var i=0;i<myArray.length;i++){
            if(myArray[i]==numberRandom){
                exist=true;
                break;
            }
        }
        if(!exist){
            myArray[myArray.length]=numberRandom;
        }
    }
    var key_input=myArray[0];
    var key_output=myArray[myArray.length-1];
    searchPokemon(key_input,key_output)

}
async function searchPokemon(id_1,id_2){
    var dataPokemon_1= await fetch(`https://pokeapi.co/api/v2/pokemon/${id_1}`);
    var dataPokemon_2= await fetch(`https://pokeapi.co/api/v2/pokemon/${id_2}`);
    var jsonP1=await dataPokemon_1.json();
    var jsonP2=await dataPokemon_2.json();
    innerPokemon(jsonP1,jsonP2)
}

function innerPokemon(p1,p2){
    var pk1=document.getElementById("pkm1");
    var pk2=document.getElementById("pkm2");
    var name1=document.getElementById("ptext1");
    var name2=document.getElementById("ptext2");
    name1.innerHTML=p1.name;
    name2.innerHTML=p2.name;
    pk1.setAttribute("src",p1.sprites.front_default);
    pk2.setAttribute("src",p2.sprites.front_default);
}