const API_KEY = "6cbb62afaa67e3b4e8bef3c110eb32c6";
const BASE_URL = "https://api.themoviedb.org/3/";
const BASE_IMG = "https://image.tmdb.org/t/p/w500";

let search = "movie/top_rated";
let media;
let click =true

const divTopMedia = document.querySelector(".topmedia");

async function getTopMedia(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    media = data.results;
    console.log(media);
    displayTopMedia();
  } catch (error) {
    console.log(error);
  }
}

const displayTopMedia = () => {
  const TopmediaNode = media.map((m, i) => {
    return createTopMediaElement(m);
  });
  divTopMedia.append(...TopmediaNode);
};



const createTopMediaElement = (value) => {
  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = `${BASE_IMG}${value.poster_path}`;
  img.style.width = "200px";
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const h4 = document.createElement("h4");
  const h42 = document.createElement("h4");
  h4.classList.add("note");
  img.addEventListener("click", () => {
    click=!click
    div.classList.width = "400px";
    h3.innerText = value.title;
    p.innerText = value.overview;
    h4.innerText = value.vote_average.toFixed(1);
    h42.innerText = value.vote_count;
    div.append(img, h3, p, h4, h42);
    img.addEventListener("click", () => {
      click=!click
      div.classList.width = "300px";
      h3.remove();
      p.remove();
      h4.remove();
      h42.remove();
      return div;
    });
  });

  div.append(img);
  return div;
};

getTopMedia(`${BASE_URL}${search}?api_key=${API_KEY}&language=fr-FR&page=1`);

let search2 = "movie/now_playing";
let media2;

const divRecentMedia = document.querySelector(".recentmedia");

async function getRecentMedia(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    media2 = data.results;
    console.log(media2);
    displayRecentMedia();
  } catch (error) {
    console.log(error);
  }
}

const displayRecentMedia = () => {
  const RecentmediaNode = media2.map((m, i) => {
    return createRecentMediaElement(m);
  });
  divRecentMedia.append(...RecentmediaNode);
};



const createRecentMediaElement = (value) => {
  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = `${BASE_IMG}${value.poster_path}`;
  img.style.width = "200px";
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const h4 = document.createElement("h4");
  const h42 = document.createElement("h4");
  h4.classList.add("note");
  img.addEventListener("click", () => {
    click=!click
    div.classList.width = "400px";
    h3.innerText = value.title;
    p.innerText = value.overview;
    h4.innerText = value.vote_average.toFixed(1);
    h42.innerText = value.vote_count;
    div.append(img, h3, p, h4, h42);
    img.addEventListener("click", () => {
      click=!click
      div.classList.width = "300px";
      h3.remove();
      p.remove();
      h4.remove();
      h42.remove();
      return div;
    });
  });

  div.append(img);
  return div;
};

getRecentMedia(
  `${BASE_URL}${search2}?api_key=${API_KEY}&language=fr-FR&page=1`
);

let search3 = "movie/upcoming";
let media3;

const divComingMedia = document.querySelector(".comingmedia");

async function getComingMedia(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    media3 = data.results;
    console.log(media3);
    displayComingMedia();
  } catch (error) {
    console.log(error);
  }
}

const displayComingMedia = () => {
  const ComingmediaNode = media3.map((m, i) => {
    return createComingMediaElement(m);
  });
  divComingMedia.append(...ComingmediaNode);
};

const createComingMediaElement = (value) => {
  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = `${BASE_IMG}${value.poster_path}`;
  img.style.width = "200px";
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const h4 = document.createElement("h4");
  const h42 = document.createElement("h4");
  h4.classList.add("note");
  img.addEventListener("click", () => {
    click=!click
    div.classList.width = "400px";
    h3.innerText = value.title;
    p.innerText = value.overview;
    h4.innerText = value.vote_average.toFixed(1);
    h42.innerText = value.vote_count;
    div.append(img, h3, p, h4, h42);
    img.addEventListener("click", () => {
      click=!click
      div.classList.width = "300px";
      h3.remove();
      p.remove();
      h4.remove();
      h42.remove();
      return div;
    });
  });

  div.append(img);
  return div;
};

getComingMedia(
  `${BASE_URL}${search3}?api_key=${API_KEY}&language=fr-FR&page=1`
);

let searchtv = "tv/top_rated";
let tv;

const divTopTv = document.querySelector(".toptv");

async function getTopTv(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    tv = data.results;
    console.log(tv);
    displayTopTv();
  } catch (error) {
    console.log(error);
  }
}

const displayTopTv = () => {
  const TopTvNode = tv.map((m, i) => {
    return createTopTvElement(m);
  });
  divTopTv.append(...TopTvNode);
};

const createTopTvElement = (value) => {
  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = `${BASE_IMG}${value.poster_path}`;
  img.style.width = "200px";
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const h4 = document.createElement("h4");
  const h42 = document.createElement("h4");
  h4.classList.add("note");
  img.addEventListener("click", () => {
    click=!click
    div.classList.width = "400px";
    h3.innerText = value.name;
    p.innerText = value.overview;
    h4.innerText = value.vote_average.toFixed(1);
    h42.innerText = value.vote_count;
    div.append(img, h3, p, h4, h42);
    img.addEventListener("click", () => {
      click=!click
      div.classList.width = "300px";
      h3.remove();
      p.remove();
      h4.remove();
      h42.remove();
      return div;
    });
  });

  div.append(img);
  return div;
};

getTopTv(`${BASE_URL}${searchtv}?api_key=${API_KEY}&language=fr-FR&page=1`);

let searchtv2 = "tv/airing_today";
let tv2;

const divAiringTv = document.querySelector(".airingtv");

async function getAiringTv(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    tv2 = data.results;
    console.log(tv2);
    displayAiringTv();
  } catch (error) {
    console.log(error);
  }
}

const displayAiringTv = () => {
  const AiringTvNode = tv2.map((m, i) => {
    return createAiringTvElement(m);
  });
  divAiringTv.append(...AiringTvNode);
};

const createAiringTvElement = (value) => {
  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = `${BASE_IMG}${value.poster_path}`;
  img.style.width = "200px";
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const h4 = document.createElement("h4");
  h4.classList.add("note");
  const h42 = document.createElement("h4");
  img.addEventListener("click", () => {
    click=!click
    div.classList.width = "400px";
    h3.innerText = value.name;
    p.innerText = value.overview;
    h4.innerText = value.vote_average.toFixed(1);
    h42.innerText = value.vote_count;
    div.append(img, h3, p, h4, h42);
    img.addEventListener("click", () => {
      click=!click
      div.classList.width = "300px";
      h3.remove();
      p.remove();
      h4.remove();
      h42.remove();
      return div;
    });
  });

  div.append(img);
  return div;
};

getAiringTv(`${BASE_URL}${searchtv2}?api_key=${API_KEY}&language=fr-FR&page=1`);

let searchtv3 = "tv/popular";
let tv3;

const divPopularTv = document.querySelector(".populartv");

async function getPopularTv(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    tv3 = data.results;
    console.log(tv3);
    displayPopularTv();
  } catch (error) {
    console.log(error);
  }
}

const displayPopularTv = () => {
  const PopularTvNode = tv3.map((m, i) => {
    return createPopularTvElement(m);
  });
  divPopularTv.append(...PopularTvNode);
};

const createPopularTvElement = (value) => {
  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = `${BASE_IMG}${value.poster_path}`;
  img.style.width = "200px";
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const h4 = document.createElement("h4");
  const h42 = document.createElement("h4");
  h4.classList.add("note");
  img.addEventListener("click", () => {
    click=!click
    div.classList.width = "400px";
    h3.innerText = value.name;
    p.innerText = value.overview;
    h4.innerText = value.vote_average.toFixed(1);
    h42.innerText = value.vote_count;
    div.append(img, h3, p, h4, h42);
    img.addEventListener("click", () => {
      click=!click
      div.classList.width = "300px";
      h3.remove();
      p.remove();
      h4.remove();
      h42.remove();
      return div;
    });
  });

  div.append(img);
  return div;
};

getPopularTv(
  `${BASE_URL}${searchtv3}?api_key=${API_KEY}&language=fr-FR&page=1`
);

const body = document.querySelector("body");
const svg = document.querySelector("svg");
const a = document.querySelector(".film");
const a2 = document.querySelector(".serie");

svg.addEventListener("click", () => {
  click=!click
  if (body.style.width <= "430px") {
    console.log("ok");
    a.style.display = "block";
    a2.style.display = "block";

    svg.addEventListener("click", () => {
      click=!click
      console.log("moi");
      a.style.display = "none";
      a2.style.display = "none";
    });
  } else {
    a.style.display = "inline-block";
    a2.style.display = "inline-block";
  }
});
