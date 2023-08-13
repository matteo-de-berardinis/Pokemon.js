// inizializziamo tutte le variabili che ci serviranno

const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

// qui generiamo una variabile che ci genera un numero casuele che ci serivira per metterlo dvaanti l url e farci capitare un numero casuale
let getPokemonData = () => {
  let id = Math.floor(Math.random() * 150) + 1;
  console.log(id);
  const finalUrl = url + id;
  console.log(finalUrl);
  /// adesso ci andiamo a creare il metodo fetch che ci permette di risalrie al api di pokemon
  fetch(finalUrl)
    //passiamo ll return del metodo fetch  e lo asseganmo alla variabile response
    .then((response) => {
      return response.json();
      //dopodiche il return cioe il file json estrapolato lo passiamo alla variabile data
    })
    .then((data) => {
      generateCard(data);
      //console.log(data)
    });
};

/// generiamo in html la card del pokemon
//abbiamo messo in window il metodo he ci genera un pokemon in modo che abbiamo la varaiabile data con all interno qualcosa

let generateCard = (data) => {
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name;
  const statAtt = data.stats[1].base_stat;
  const statDif = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  card.innerHTML = `
    <p class="hp">
    <span>HP</span>
    ${hp}
</p>
<img src=${imgSrc}>
<h2 class="poke-name"> ${pokeName}</h2>
<div class="types">
  
</div>
<div class="stats">
    <div>
        <h3>${statAtt}</h3>
        <p>attak</p>
    </div>
    <div>
        <h3>${statDif}</h3>
        <p>defence</p>
    </div>
    <div>
        <h3>${statSpeed}</h3>
        <p>speed</p>
    </div>
</div>
          
    
    `;
};

btn.addEventListener("click", getPokemonData);
window.addEventListener("load", getPokemonData);

let types = (types) => {
  console.log(types);
  types.forEach((items) => {
    let span = document.createElement("span");
    span.textContent = items.type.name;
    console.log(span);
    document.querySelectorAll(".types").appendChild(span);
  });
};
// esempio fetch
