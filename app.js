'use strict';

let hoursOperation =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];

let seattleLocation =['Seattle',23,65,6.3];
let tokyoLocation = ['Tokyo',3,24,1.2];
let dubaiLocation = ['Dubai',11,38,3.7];
let parisLocation = ['Paris',20,38,2.3];
let limaLocation = ['Lima',2,16,4.6];
let globalLocation = [seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation];

// sets up times to have the correct amount of zeros for the amount of hours there are. Adds additional value for total location
let times =[];
let timesLength = (hoursOperation.length) + 1;
for (let i = 0; i < (timesLength); i ++){
	times.push(0);
}


// constructor function that creates the city instance
function CityLocation (city, minCust, maxCust, avgCookieSale){
	this.city = city;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgCookieSale = avgCookieSale;
}

//creates sales data -- will be run by demand of salesTable
CityLocation.prototype.salesPerHour =function(){
	let citySalesDay = [];
	let daySales = 0;

	for (let hours = 0; hours<hoursOperation.length; hours++){
		let citySalesPH = Math.floor((this.minCust+ Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1)))* this.avgCookieSale);
// add the city sales of that hour to the global variable that sums to global hourly total
		times[hours] = times[hours] + citySalesPH;
// adds the next hour to the array to create an array of every cookie sold in each hour
		citySalesDay.push(citySalesPH);
// adds all the sales to a day total
		daySales = daySales + citySalesPH;
	}
// adds day total to global variable that sums to global total
	times[hoursOperation.length]=times[hoursOperation.length] + daySales;
// this adds the day total to the end of the hourly sales array to make it easier to print
	citySalesDay[hoursOperation.length] = daySales;
	return citySalesDay;
};

// creates method to identify parent element, creat and append child element
// CityLocation.prototype.byIdCreateappendChild = function (parentById,childElement){
// 	let parentEl = document.getElementById(parentById);
// 	let childEl = document.createElement(childElement);
// 	parentEl.appendChild(childEl);
// };



//creates table header -- only need to run for one city
CityLocation.prototype.salesHeader = function(){

	let salesFigures = document.getElementById('sales-figures');
	let tableRow = document.createElement('tr');
	salesFigures.appendChild(tableRow);

	let tableCity = document.createElement('td');
	tableCity.textContent ='';
	tableRow.appendChild(tableCity);

	for (let hours = 0; hours <hoursOperation.length; hours++){
		let tableCell= document.createElement('td');
		tableCell.textContent =hoursOperation[hours];
		tableRow.appendChild(tableCell);
	}

	let columnTotal = document.createElement('td');
	columnTotal.textContent = 'Daily Locatioin Totals';
	tableRow.appendChild(columnTotal);
};

// creates sales data table --
CityLocation.prototype.salesTable = function(){
	let saleVar =this.salesPerHour();
	let salesFigures = document.getElementById('sales-figures');
	let tableRow = document.createElement('tr');
	salesFigures.appendChild(tableRow);
	let tableCity = document.createElement('td');
	tableCity.textContent = this.city;
	tableRow.appendChild(tableCity);

	for (let hours = 0; hours <hoursOperation.length; hours++){
		let tableCell= document.createElement('td');
		tableCell.textContent = saleVar[hours];
		tableRow.appendChild(tableCell);
	}

	let totalCell = document.createElement('td');
	totalCell.textContent =this.city + ' Total:' + saleVar[hoursOperation.length];
	tableRow.appendChild(totalCell);
};

// creates footer for sales table -- only needs to be run for one city
CityLocation.prototype.salesFooter = function(){
	let salesFigures = document.getElementById('sales-figures');
	let tableRow = document.createElement('tr');
	salesFigures.appendChild(tableRow);
	let totalRow = document.createElement('td');
	totalRow.textContent = 'Global Totals:';
	tableRow.appendChild(totalRow);

	for (let hours = 0; hours <hoursOperation.length; hours++){
		let tableCell= document.createElement('td');
		tableCell.textContent = times[hours];
		tableRow.appendChild(tableCell);
	}

	let totalCell = document.createElement('td');
	totalCell.textContent ='Global Day Total:' + times[hoursOperation.length];
	tableRow.appendChild(totalCell);
};

// creates new instantaces of CityLocation
let seattleTotal = new CityLocation(globalLocation[0][0],globalLocation[0][1],globalLocation[0][2],globalLocation[0][3]);
let tokyoTotal = new CityLocation(globalLocation[1][0],globalLocation[1][1],globalLocation[1][2],globalLocation[1][3]);
let dubaiTotal = new CityLocation(globalLocation[2][0],globalLocation[2][1],globalLocation[2][2],globalLocation[2][3]);
let parisTotal = new CityLocation(globalLocation[3][0],globalLocation[3][1],globalLocation[3][2],globalLocation[3][3]);
let limaTotal = new CityLocation(globalLocation[4][0],globalLocation[4][1],globalLocation[4][2],globalLocation[4][3]);

// generates sales Header
seattleTotal.salesHeader();

// generates data table
seattleTotal.salesTable();
tokyoTotal.salesTable();
dubaiTotal.salesTable();
parisTotal.salesTable();
limaTotal.salesTable();

// generates sales Footer
seattleTotal.salesFooter();







