'use strict';

let time =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];

let seattleLocation =['Seattle',23,65,6.3];
let tokyoLocation = ['Tokyo',3,24,1.2];
let dubaiLocation = ['Dubai',11,38,3.7];
let parisLocation = ['Paris',20,38,2.3];
let limaLocation = ['Lima',2,16,4.6];
let globalLocation = [seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation];



function CityLocation (city, minCust, maxCust, avgCookieSale){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
}
CityLocation.prototype.salesPerHour =function(){
  let citySalesDay = [];
  for (let hours = 0; hours<time.length; hours++){
    let citySalesPH = Math.floor((this.minCust+ Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1)))* this.avgCookieSale);
    // console.log('test');
    citySalesDay.push(citySalesPH);
  }
  return citySalesDay;
};

let seattleTotal = new CityLocation(globalLocation[0][0],globalLocation[0][1],globalLocation[0][2],globalLocation[0][3]);
let tokyoTotal = new CityLocation(globalLocation[1][0],globalLocation[1][1],globalLocation[1][2],globalLocation[1][3]);
let dubaiTotal = new CityLocation(globalLocation[2][0],globalLocation[2][1],globalLocation[2][2],globalLocation[2][3]);
let parisTotal = new CityLocation(globalLocation[3][0],globalLocation[3][1],globalLocation[3][2],globalLocation[3][3]);
let limaTotal = new CityLocation(globalLocation[4][0],globalLocation[4][1],globalLocation[4][2],globalLocation[4][3]);

console.log(seattleTotal.salesPerHour());
console.log(tokyoTotal.salesPerHour());
console.log(dubaiTotal.salesPerHour());
console.log(parisTotal.salesPerHour());
console.log(limaTotal.salesPerHour());

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




// // function to create all of the sales page
// function printSales(){
// // for loop to iterate through all the cities
//   for (let cities= 0; cities<salesGlobal.length; cities++){
// // targets the section tag with city id
//     let targetClass = document.getElementById('city');
//     console.log(targetClass);
// // creates title for each city
//     let loCation = document.createElement('h3');
//     loCation.innerHTML =
//     targetClass.appendChild(loCation);
//     loCation.textContent = cityTitle[cities];
// // creates ul associated with each city
//     let postSales = document.createElement('ul');
//     targetClass.appendChild(postSales);
// // creates li's for each hour of the sales day
//     for (let salesHours = 0; salesHours<salesGlobal[cities].length; salesHours++){
//       let hourlySales = document.createElement('li');
//       postSales.appendChild(hourlySales);
//       hourlySales.textContent = time[salesHours] + ' : ' + salesGlobal[cities][salesHours] + ' cookies';
//     }
// // creates another li to print the total
//     let hourlyTotal = document.createElement('li');
//     postSales.appendChild(hourlyTotal);
// // adds each element of the purchase totals of each day
//     let total = salesGlobal[cities][0];
//     for (let i =1; i<salesGlobal[cities].length; i++){
//       total = total + salesGlobal[cities][i];
//       console.log(total);
//     }
//     hourlyTotal.textContent = 'Total Cookies Sold: ' + total;
//   }
// }


// printSales();








