
const accesKey="O1TXW3jFtz2naAXtMQcvFkQ3RlkTXo64HtO76eubnyQ";

const formE1 =document.querySelector('form');
const searchInputE1=document.querySelector("#search-input");

const searchResults=document.querySelector(".search-results");
const showMore=document.getElementById('show-more-button');
let inputData='';
let page =1;

async function searchImage(){
    inputData=searchInputE1.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesKey}`;
    const response=await fetch(url); //await : if your using await u should mention function as async
    const data= await response.json();  //await must
    if(page===1){
        searchResults.innerHTML="";
    }
    const results=data.results;
    
    results.map((result)=>{
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add('card');
    
        const image=document.createElement('img');
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);

        searchResults.appendChild(imageWrapper);

    });
    page++;
    if(page > 1){
        showMore.style.display='block';
    }
}

formE1.addEventListener('submit',(e)=>{
        e.preventDefault();
        page=1;
        searchImage();
})


showMore.addEventListener('click',()=>{
    searchImage()
})