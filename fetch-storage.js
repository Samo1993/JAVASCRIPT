/* fetch("https://ringsdb.com/api/public/packs/?jsonp=parseSets")
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
});


con questa formula, mi segnala questo errore:
Uncaught (in promise) SyntaxError: Unexpected token 'p', "parseSets("... is not valid JSON
*/



async function fetchData() {
    try {
        const response = await fetch("https://ringsdb.com/api/public/packs/?jsonp=parseSets");  /* non è lo stesso link dell'esercizio perché anche con quello della domanda mi segna errore */
        const responseJson = await response.json();
        const card = responseJson.data[0];

        const name = card.attributes.name;
        const character = card.attributes.character;

        const h2 = document.querySelector('my-title');
        const h3 = document.querySelector('character-name');
        const img = document.querySelector('img-character');

        h2.innerText = name;
        h3.innerText = character;
        img.setAttribute("src", img-character);

        console.log(responseJson);
        console.log(card);
    } catch (error) {
        console.error(error);
    }
}

/* pur avendo seguito il video alla lettera, per ogni elemento che scrivo ispezionando il file sul live server, mi compare questo errore:
SyntaxError: Unexpected token 'p', "parseSets("... is not valid JSON */

fetchData();
