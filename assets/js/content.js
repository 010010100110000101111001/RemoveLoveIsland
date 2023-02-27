const kittens = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptplztERFZEvWNki4FaXhvwdwR2MxLwXq-Ztslssv9LB31ev6igyRAmFrGwYZwhAyp5g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_c-YzdfJgGj1maLYhy29KvGgah3whPxPKkkXjaoPqqG8syzKNRiW6xkbuNKL3s6lNcrk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqLKhn2D5cIob2wxtZEnwBpDv1hYBABGKsJs9mCcyoi9Js9MzodIJtf5eYVIpy2NA4oY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPrGFW4uu7bM8pjpWaTwei7Dx6tPKtzt7xpXpOEXr9vyXBEqbHVQ9X2hBbBkS7owBX3s&usqp=CAU"
];

const words = [
    "love island",
    "loveisland",
    "LOVE ISLAND",
    "Love Island",
    "LOVEISLAND",
];

/// generate a number based on how many items are in the kittens array
const generateRandom = () => {
    let randomKittenImage = Math.floor(Math.random() * kittens.length);
    return randomKittenImage;
};

newImage = generateRandom()

const replace = () => {
    /// replace images
    words.forEach((word) => {
        const images = document.querySelectorAll(`img[alt*="${word}"]`);
        images.forEach((image) => {
            image.src = kittens[newImage];
        });
    });

    /// replace text
    const aria = document.querySelectorAll(`span[aria-label*="Love Island"]`);
    aria.forEach((elem) => {
        elem.innerText = "Cute Kittens!";
    });
};

replace();
document.addEventListener(`scroll`, replace);
