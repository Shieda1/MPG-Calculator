// https://www.omnicalculator.com/everyday-life/mpg

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fueleconomyRadio = document.getElementById('fueleconomyRadio');
const distanceRadio = document.getElementById('distanceRadio');
const fuelusedRadio = document.getElementById('fuelusedRadio');

let fueleconomy;
let distance = v1;
let fuelused = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

fueleconomyRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance';
  variable2.textContent = 'Fuel used';
  distance = v1;
  fuelused = v2;
  result.textContent = '';
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Fuel economy';
  variable2.textContent = 'Fuel used';
  fueleconomy = v1;
  fuelused = v2;
  result.textContent = '';
});

fuelusedRadio.addEventListener('click', function() {
  variable1.textContent = 'Fuel economy';
  variable2.textContent = 'Distance';
  fueleconomy = v1;
  distance = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fueleconomyRadio.checked)
    result.textContent = `Fuel economy = ${computefueleconomy().toFixed(2)}`;

  else if(distanceRadio.checked)
    result.textContent = `Distance = ${computedistance().toFixed(2)}`;

  else if(fuelusedRadio.checked)
    result.textContent = `Fuel used = ${computefuelused().toFixed(2)}`;
})

// calculation

function computefueleconomy() {
  return (Number(fuelused.value) / Number(distance.value)) * 100;
}

function computedistance() {
  return Number(fuelused.value) / (Number(fueleconomy.value) / 100);
}

function computefuelused() {
  return (Number(fueleconomy.value) / 100) * Number(distance.value);
}