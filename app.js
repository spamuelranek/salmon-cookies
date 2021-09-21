'use strict';

let time =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];

let seattleLocation =['Seattle',23,65,6.3];
let tokyoLocation = ['Tokyo',3,24,1.2];
let dubaiLocation = ['Dubai',11,38,3.7];
let parisLocation = ['Paris',20,38,2.3];
let limaLocation = ['Lima',2,16,4.6];
let globalLocation = [seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation];

let sixAm = 0;
let sevenAm = 0;
let eightAm = 0;
let nineAm = 0;
let tenAm = 0;
let elevenAm = 0;
let twelvePm = 0;
let onePm = 0;
let twoPm = 0;
let threePm = 0;
let fourPm = 0;
let fivePm = 0;
let sixPm = 0;
let sevenPm = 0;
let grandestTotal =0;

function CityLocation (city, minCust, maxCust, avgCookieSale){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
}
CityLocation.prototype.salesPerHour =function(){
  let citySalesDay = [];
  let daySales = 0;
  for (let hours = 0; hours<time.length; hours++){
    let citySalesPH = Math.floor((this.minCust+ Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1)))* this.avgCookieSale);
    citySalesDay.push(citySalesPH);
    daySales = daySales + citySalesPH;
  }
  // console.log(daySales);
  citySalesDay[time.length] = daySales;
  console.log(citySalesDay);
  return citySalesDay;
};

CityLocation.prototype.salesTable = function(){
  let saleVar =this.salesPerHour();
  let salesFigures = document.getElementById('sales-figures');
  let tableRow = document.createElement('tr');
  salesFigures.appendChild(tableRow);
  let tableCity = document.createElement('td');
  tableCity.textContent = this.city;
  tableRow.appendChild(tableCity);
  for (let hours = 0; hours <time.length; hours++){
    let tableCell= document.createElement('td');
    tableCell.textContent =time[hours] + ' Total:' + saleVar[hours];
    tableRow.appendChild(tableCell);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent ='Daily Total:' + saleVar[time.length];
  tableRow.appendChild(totalCell);
};




let seattleTotal = new CityLocation(globalLocation[0][0],globalLocation[0][1],globalLocation[0][2],globalLocation[0][3]);
let tokyoTotal = new CityLocation(globalLocation[1][0],globalLocation[1][1],globalLocation[1][2],globalLocation[1][3]);
let dubaiTotal = new CityLocation(globalLocation[2][0],globalLocation[2][1],globalLocation[2][2],globalLocation[2][3]);
let parisTotal = new CityLocation(globalLocation[3][0],globalLocation[3][1],globalLocation[3][2],globalLocation[3][3]);
let limaTotal = new CityLocation(globalLocation[4][0],globalLocation[4][1],globalLocation[4][2],globalLocation[4][3]);

console.log(seattleTotal.salesTable());
console.log(tokyoTotal.salesTable());
console.log(dubaiTotal.salesTable());
console.log(parisTotal.salesTable());
console.log(limaTotal.salesTable());

// let seattle = {
//   city: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale:6.3,
//   customersPerhour:(this.minCust + Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1))),
//   seattle_sales: function(){
//     let seattleSalesDay = [];
//     for (let hours = 0; hours<time.length; hours++){
//       let seattleSalesPH = Math.floor((this.minCust + Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1)))* this.avgCookieSale);
//     //   console.log(seattleSalesPH);
//       seattleSalesDay.push(seattleSalesPH);
//     }
//     // console.log(seattleSalesDay);
//     return seattleSalesDay;
//   }

// };

// let tokyo = {
//   city: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale:1.2,
//   tokyo_sales: function(){
//     let tokyoSalesDay = [];
//     for (let hours = 0; hours<time.length; hours++){
//       let tokyoSalesPH = Math.floor((this.minCust + Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1)))* this.avgCookieSale);
//     //   console.log(tokyoSalesPH);
//       let hourTotal = tokyoSalesDay.push(tokyoSalesPH);
//     }
//     // console.log(tokyoSalesDay);
//     return tokyoSalesDay;
//   }

// };

// let dubai = {
//   city: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale:3.7,
//   dubai_sales: function(){
//     let dubaiSalesDay = [];
//     for (let hours = 0; hours<time.length; hours++){
//       let dubaiSalesPH = Math.floor((this.minCust + Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1)))* this.avgCookieSale);
//     //   console.log(dubaiSalesPH);
//       let hourTotal = dubaiSalesDay.push(dubaiSalesPH);
//     }
//     console.log(dubaiSalesDay);
//     return dubaiSalesDay;
//   }

// };

// let paris = {
//   city: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale:2.3,
//   paris_sales: function(){
//     let parisSalesDay = [];
//     for (let hours = 0; hours<time.length; hours++){
//       let parisSalesPH = Math.floor((this.minCust + Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1)))* this.avgCookieSale);
//     //   console.log(parisSalesPH);
//       let hourTotal = parisSalesDay.push(parisSalesPH);
//     }
//     // console.log(parisSalesDay);
//     return parisSalesDay;
//   }

// };


// let lima = {
//   city: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale:4.6,
//   lima_sales: function(){
//     let limaSalesDay = [];
//     for (let hours = 0; hours<time.length; hours++){
//       let limaSalesPH = Math.floor((this.minCust + Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1)))* this.avgCookieSale);
//     //   console.log(limaSalesPH);
//       let hourTotal = limaSalesDay.push(limaSalesPH);
//     }
//     // console.log(limaSalesDay);
//     return limaSalesDay;
//   }

// };
// let salesTokyo = tokyo.tokyo_sales();
// let salesDubai = dubai.dubai_sales();
// let salesParis = paris.paris_sales();
// let salesLima = lima.lima_sales();
// let salesSeattle = seattle.seattle_sales();
// let salesGlobal = [salesSeattle,salesTokyo,salesDubai,salesParis,salesLima];

// let cityTitle = [seattle.city,tokyo.city,dubai.city,paris.city,lima.city];
// // console.log(cityTitle);







// printSales();








