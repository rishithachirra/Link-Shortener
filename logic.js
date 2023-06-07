let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


async function short(){
    let longLink = document.getElementById("longlink").value;
    let shortLink = document.getElementById("shortlink");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`);
    const data = await result.json();

    shortLink.value = data.result.short_link2;
}
