

console.log('test app');
//
const page = document.getElementById('datas');
// const moreButton = document.getElementById('loadMoreBtn');
const url = "http://localhost:3000/jobs"; //datafrom api end point
var numberofDataDisplayed = 10;

//testing the api

async function getData() {

   fetch(url)
   .then(res => res.json())
   .then(jobs =>{
    let html ="";
     const slicedDatas = jobs.slice(0, numberofDataDisplayed);

     slicedDatas.forEach(slicedData => {
        let htmlSegment = `<div>
        <h2>${slicedData.id}</h2>
        <h2>${slicedData.Jobtitle}</h2>
        </div>`;
        html += htmlSegment
       });
   page.innerHTML = html;
     
   })
}

getData();
//function to load more data from the api
const moreButton = document.getElementById('loadMoreBtn');
moreButton.addEventListener('click', () => {
    numberofDataDisplayed += 10
getData();
  
} );

