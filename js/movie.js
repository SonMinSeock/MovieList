const displayMovieList = document.querySelector("#movies");

let movieList = [];
const showTopFiveMovieList = () => {
  console.log("show : ", movieList);
  movieList.forEach((movie) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    img.src = IMG_PATH + movie.backdrop_path;
    console.dir(img);
    h3.innerText = movie.title;
    div.appendChild(img);
    div.appendChild(h3);
    displayMovieList.appendChild(div);
    console.log(displayMovieList);
  });

  $(document).ready(function () {
    $(".multiple-items").slick({
      autoplay: true,
      speed: 300 /* 이미지가 슬라이딩시 걸리는 시간 */,
      infinite: true,
      autoplaySpeed: 30000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      touchMove: true /* 마우스 클릭으로 끌어서 슬라이딩 가능여부 */,
      nextArrows: true /* 넥스트버튼 */,
      fade: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
};

const getMovies = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const movies = data.results.slice(0, 12);
  movieList = [...movies];
  showTopFiveMovieList();
  console.log("movie List : ", movieList);
};
