// as js in included in index before this file, we can use in here?
function loadCountry(clickedLink){
     console.log(clickedLink);

    //  $('#location').innerHTML = "";
     $('#location').innerHTML = "";
     $('#location').load('../trips/'+clickedLink+'.html');
}

document.querySelectorAll('#country-nav li').forEach(link => {
    link.addEventListener('click', event => {
        loadCountry(event.target.innerText);
    })
})

function clickedOnGalleryImage(){
    console.log("clicking-on-gallery-image");

    loadCountry("Leamington")
}

// document.querySelectorAll('#country-nav').forEach(item => {
//     item.addEventListener('click', event => {
//       console.log("this-element-clicked");
//     })
//   })