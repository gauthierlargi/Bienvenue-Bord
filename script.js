//changé le background tout les X secondes
function changeImage() {

    const images = [
        'url("./Images/vehicule1.png")',
        'url("./Images/auto-g.jpg")'
    ]

    const header =  document.getElementById('Header');
    const background = images[Math.floor(Math.random()*images.length)];
    header.style.backgroundImage = background;
}
setInterval(changeImage, 5000) //interval entre les images de 5 seconde

// image rémanante avec une boucle For pour rappele les élément tant que l'utilisateur scrolllllll

function scrooll() {
    // pas eu le temp de continué sorry ! 
    // pas eu assez de temp de cours en JS pour savoir faire quoi que se soit
}