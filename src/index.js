
const KEY = config.NASA_KEY;
const container = document.querySelector('.container-grid');
const nasaImg = document.querySelector('.nasa-img');
const title = document.querySelector('.title');
const copyright = document.querySelector('.copyright');
const explanation = document.querySelector('.explanation');
const searchBtn = document.querySelector('.search-btn');
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=' + KEY;

// function renderNasaImage(image) {
//   nasaImg.setAttribute('src', image)
// }
// function renderImageInfo(titlemsg, copyrightmsg, explanationmsg) {
//   title.textContent = titlemsg;
//   copyright.textContent = copyrightmsg;
//   explanation.textContent = explanationmsg
// }

async function nasaImage() {
  const fetchAPI = await fetch(API_URL);
  const data = await fetchAPI.json();
  console.log(data)
  // console.log(data.url)
  // renderNasaImage(data.url)
  // renderImageInfo(data.title, data.copyright, data.explanation)

  const showData = `
  <section class="img">
    <img class="nasa-img" src="${data.url}" alt="" />
  </section>
  <section class="img-info">
    <p class="title">${data.title}</p>
    <p class="copyright">Author: ${data.copyright}</p>
    <p class="explanation">${data.explanation}</p>
  </section>`;
  container.innerHTML = showData;
}



searchBtn.addEventListener('click', () => {
  nasaImage()
  
  // fetch(API_URL)
  // .then(response => response.json())
  // .then(data => {
  //   console.log('data', data)
  //   return data;
  // })
  // console.log(data)
});
