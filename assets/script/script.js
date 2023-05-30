let hoodies1 = [
    {
        id: 1,
        heading: "Haikyu Hoodie",
        image: "https://i.postimg.cc/zBB11Sqt/Haiyku-Logo-Hoodie-Anime-Hoodie-1011-L.jpg",
        des: "A description about the hoodie",
    },
    {
        id: 2,
        heading: "Death Note Hoodie",
        image: "https://i.postimg.cc/QtcDxNRw/8-5-US-41-OFF-Death-Note-Anime-Sweatshirt-Manga-Sweatshirt-Women-Kawaii-Hoodies-Death-Note-H.jpg",
        des: "A description about the hoodie",
    },
    {
        id: 3,
        heading: "Demon Slayer Rengoku Hoodie",
        image: "https://i.postimg.cc/5yctnRVd/Cute-Rengoku-Eating-Bento-Box-Hoodie-purple-L.jpg",
        des: "A description about the hoodie",
    },
    {
        id: 4,
        heading: "Demon Slayer Nezuko Hoodie",
        image: "https://i.postimg.cc/2jTJdBFT/Birlap-imagine-fluff-smut.jpg",
        des: "A description about the hoodie",
    },
];

let displayHoodies1 = document.querySelector(".hoodies1");
hoodies1.forEach((data) => {
    displayHoodies1.innerHTML += `
    <div class="row text-center m-3 p-3">
        <div class="col">
            <h4>${data.heading}</h4>
            <img src="${data.image}" width="250px height="220px"">
            <p>${data.des}</p>
        </div>
    </div>`;
});
let hoodies2 = [
    {
        id: 1,
        heading: "Demon Slayer Hoodie",
        image: "https://i.postimg.cc/rynR7x6K/Tanjiro-x-Zenitsu-x-Inosuke-Cute-Hoodie-28666-M.jpg",
        des: "A description about the hoodie",
    },
    {
        id: 2,
        heading: "Hunter X Hunter Hoodie",
        image: "https://i.postimg.cc/1XtBsS56/Japanese-Anime-Hoodies-Hunter-X-Hunter-Men-Women-Pullovers-Hoodies-Sweatshirts-Killua-Zoldyck-Hisoka.jpg",
        des: "A description about the hoodie",
    },
    {
        id: 3,
        heading: "Spy X Family Anya Forger Hoodie",
        image: "https://i.postimg.cc/k5Jtkc5R/Anya-Forger-Hoodie.jpg",
        des: "A description about the hoodie",
    },
    {
        id: 4,
        heading: "Jujutsu Kaisen Itadori Yuuji Hoodie",
        image: "https://i.postimg.cc/FHBf1Jg7/Jujutsu-Kaisen-Itadori-Yuuji-Print-Tracksuit-Men-Autumn-Fleece-Warm-Clothing-Fashion-Cartoon-Streetw.jpg",
        des: "A description about the hoodie",
    },
];

let displayHoodies2 = document.querySelector(".hoodies2");
hoodies2.forEach((data) => {
    displayHoodies2.innerHTML += `
    <div class="row text-center m-3 p-3">
        <div class="col">
            <h4>${data.heading}</h4>
            <img src="${data.image}" width="250px height="220px"">
            <p>${data.des}</p>
        </div>
    </div>`;
});
let tShirts = [
    {
        id: 1,
        heading: "Beserk T-Shirt",
        image: "https://i.postimg.cc/W40RD6N1/Berserk-tees.png",
        des: "A description about the hoodie",
    },
    {
        id: 2,
        heading: "One Piece T-Shirt",
        image: "https://i.postimg.cc/d3YVkVPz/One-Piece-Roronoa-Zoro-T-shirt-Anime-Cartoon-Anime-Harajuku-Graphic-Kawaii-T-shirt-For-Men-s-Women-s.jpg",
        des: "A description about the hoodie",
    },
    {
        id: 3,
        heading: "Demon Slayer T-Shirt",
        image: "https://i.postimg.cc/j541FWVx/download.jpg",
        des: "A description about the hoodie",
    },
    {
        id: 4,
        heading: "Jujutsu Kaisen T-Shirt",
        image: "https://i.postimg.cc/26X3twnx/Harajuku-Anime-Japanese-Unisex-T-shirt-Harajuku-Short-Sleeve-Vintage-Loose-T-shirt-Black-Clothes-Ove.jpg",
        des: "A description about the hoodie",
    },
];

let displayTshirts = document.querySelector(".t-shirts");
tShirts.forEach((data) => {
    displayTshirts.innerHTML += `
    <div class="grid text-center">
        <div class="g-col-6">
            <h4>${data.heading}</h4>
            <img src="${data.image}" width="390px height="420px"">
            <p>${data.des}</p>
        </div>
    </div>`;
});
