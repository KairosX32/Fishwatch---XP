console.log("loaded");

const srchBtn = document.querySelector('.btn');
const fish = document.querySelector('#search');

const findFish = () => {
  const api = `https://www.fishwatch.gov/api/species/${fish.value}`
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  console.log(api);
fetch(proxyurl + api)
  .then(function(response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // Name
    const nameOutput = document.querySelector('#name');
    nameOutput.innerText = data[0]["Species Name"];
    const scientificNameOutput = document.querySelector('#sci-name')
    scientificNameOutput.innerHTML = data[0]['Scientific Name'];

    // Biology
    const biologyOutput = document.getElementById('biology');
    biologyOutput.innerHTML = data[0].Biology;

    // Population Status
    const populationOutput = document.querySelector('.population p');
    populationOutput.innerHTML = data[0]['Population Status'];

    // Harvest
    const harvestOutput = document.querySelector('.harvest-box p');
    harvestOutput.innerHTML = data[0].Harvest;

    // Physical Description
    const descriptionOutput = document.querySelector('.description-box p');
    descriptionOutput.innerHTML = data[0]["Physical Description"];

    // Quote
    const quoteOutput = document.querySelector('.quote-box p');
    quoteOutput.innerHTML = `	&quot;${data[0].Quote}&quot;`;

    // Research
    const researchOutput = document.querySelector('.research-box p');
    researchOutput.innerHTML = data[0].Research;

  }).catch(err => {
      console.log(err);
      alert('Invalid Entry')
  })


}

srchBtn.addEventListener('click', findFish);

