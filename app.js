// let tblCountries = document.getElementById('tblCountries');

// let tableBody = `<tr class="table-dark">
//                     <th>Country Name</th>
//                     <th></th>
//                     <th>Country Flag</th>
//                 </tr>`;

// fetch("https://restcountries.com/v3.1/all")
// .then((res)=>res.json())
// .then(data=>{
                
// data.forEach(element => {
                
//     tableBody+=`<tr>
//                     <td><h1>${element.name.common}&nbsp;&nbsp;${element.flag}</h1><br><b>${element.name.official}</b></td>
//                     <td></td>
//                     <td></td>
//                 </tr>`
//     console.log(element.name.common);
// });
                
//     tblCountries.innerHTML=tableBody;
// })

let countryCards = document.getElementById('countryCards');

fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{
    data.forEach(element => {
        let card = `<div class="card" style="width: 18rem; margin: 10px;">
                        <img src="${element.flags.svg}" class="card-img-top" alt="${element.name.common} flag">
                        <div class="card-body">
                            <h2 class="card-title">${element.name.common}</h2><br><b>${element.name.official}</b>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Capital: ${element.capital}</li>
                            <li class="list-group-item">Region: ${element.region}</li>
                            <li class="list-group-item">Population: ${element.population.toLocaleString()}</li>
                        </ul>
                        <div class="card-body">
                            <a href="${element.maps.googleMaps}" target="_blank" class="card-link">Google Maps</a>
                        </div>
                    </div>`;
        countryCards.innerHTML += card;
    });
});

// function searchCountry() {
//     let userInput = document.getElementById("txtInput").value;

//     let flagImg = document.getElementById("flagImg");
//     let name = document.getElementById("name");
//     let officialName = document.getElementById("officialName");
//     let capital = document.getElementById("Capital");
//     let region = document.getElementById("region");
//     let population = document.getElementById("population");

//     fetch(`https://restcountries.com/v3.1/name/${userInput}`)
//     .then(res=>res.json())
//     .then(data=>{
//         data.forEach(obj=>{
//             console.log(obj);
//                 flagImg.src = obj.flags.png;
//                 name.innerText = obj.name.common;
//                 officialName.innerText = obj.name.official;
//                 capital.innerText = obj.capital;
//                 region.innerText = obj.region;
//                 population.innerText = obj.population;
//             })
//         })
//     }

function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let capital = document.getElementById("capital");
    let region = document.getElementById("region");
    let population = document.getElementById("population");
    let googleMapsLink = document.getElementById("googleMapsLink");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official
            capital.innerText=obj.capital;
            region.innerText=obj.region;
            population.innerText=obj.population.toLocaleString()
            googleMapsLink.href=obj.maps.googleMaps

            document.querySelector('.searchCard1').classList.remove('hidden');
        })
    })
}