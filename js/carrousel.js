// Carrousel

let images = Array.from(document.getElementsByClassName("imgCarrousel"));

let mainPhoto = document.getElementById("mainPhoto");


function updateImage(event){
    let image = event.target

    mainPhoto.src = image.src
}

images.forEach(function(image){
    image.addEventListener('click', updateImage)
});