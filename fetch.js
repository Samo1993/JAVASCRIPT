async function fetchData() {
    try {
        const response = await fetch("https://ringsdb.com/api/public/cards/?_format=json");
        const responseJson = await response.json();
        const card = responseJson[0];

        const name = card.name;
        const flavor = card.flavor;
        const imagesrc = card.imagesrc;

        const h2 = document.querySelector('.character-name');
        const h3 = document.querySelector('.my-title');
        const img = document.querySelector('.img-character');

        h2.innerHTML = name;
        h3.innerHTML = flavor;
        img.setAttribute("src", "https://ringsdb.com/" + imagesrc);
    } catch (error) {
        console.log(error);
    }
}
  
fetchData();
