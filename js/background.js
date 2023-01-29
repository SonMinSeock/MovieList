const BACKROUND_IMG_URL =
  "https://static-assets.bamgrid.com/product/disneyplus/images/background.dc67869b698f6c927aae59c68d9dda46.png";

const backgrundImgList = [
  "https://static-assets.bamgrid.com/product/disneyplus/images/background.dc67869b698f6c927aae59c68d9dda46.png",
  "https://cdn.wallpapersafari.com/55/33/xdzY9h.jpg",
  "https://i.ytimg.com/vi/2LoaD6tTB08/maxresdefault.jpg",
];

const bgImage = document.createElement("img");
const body = document.querySelector("body");

bgImage.src =
  backgrundImgList[Math.floor(Math.random() * backgrundImgList.length)];
bgImage.id = "bgImage";

body.prepend(bgImage);
//body.appendChild(bgImage);
