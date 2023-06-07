let newLink = document.getElementById("shortlink");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    newLink.select();

    window.navigator.clipboard.writeText(newLink.value);
}
