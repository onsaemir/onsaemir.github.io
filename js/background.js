const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#background-image");

bgImage.src = `img/${chosenImage}`;
