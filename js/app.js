'use strict';

let hoursOperation =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',
];

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
	this.citySalesDay = [];
	this.daySales = 0;
}

// gives a random amount of customers in a hour within the max and min
CityLocation.prototype.randomCustQuant = function(){
	let randomCust = Math.floor((Math.random() *(this.maxCust-this.minCust) +1)+this.minCust);
	return randomCust;
};




//creates sales data -- will be run by demand of salesTable
CityLocation.prototype.salesPerHour =function(){

	for (let hours = 0; hours<hoursOperation.length; hours++){
		let citySalesPH = Math.floor(this.randomCustQuant() * this.avgCookieSale);
// add the city sales of that hour to the global variable that sums to global hourly total
		times[hours] = times[hours] + citySalesPH;

// adds the next hour to the array to create an array of every cookie sold in each hour
		this.citySalesDay.push(citySalesPH);

// adds all the sales to a day total
		this.daySales = this.daySales + citySalesPH;
	}
// adds day total to global variable that sums to global total
	times[hoursOperation.length]=times[hoursOperation.length] + this.daySales;

// this adds the day total to the end of the hourly sales array to make it easier to print
	this.citySalesDay[hoursOperation.length] = this.daySales;
	console.log(this.citySalesDay + this.city);
	return this.citySalesDay;
};




// creates table header -- only need to run for one city
 function tableHeader(){

// creates table header row
	let salesFigures = document.getElementById('sales-figures');
	let tableRow = document.createElement('tr');
	salesFigures.appendChild(tableRow);

// creates table head row 1st blank data cells
	let tableCity = document.createElement('td');
	tableCity.textContent ='';
	tableRow.appendChild(tableCity);

// creates a heading for each hour
	for (let hours = 0; hours <hoursOperation.length; hours++){
		let tableCell= document.createElement('td');
		tableCell.textContent =hoursOperation[hours];
		tableRow.appendChild(tableCell);
	}

// creates final cell in header defining totals column
	let columnTotal = document.createElement('td');
	columnTotal.textContent = 'Daily Locatioin Totals';
	tableRow.appendChild(columnTotal);
}




// creates sales data table -- run for every city
CityLocation.prototype.salesTable = function(){

// brings data in from salesPerHour method for this instance
	let saleVar =this.salesPerHour();

// creates the table rows
	let salesFigures = document.getElementById('sales-figures');
	let tableRow = document.createElement('tr');
	salesFigures.appendChild(tableRow);

// creates the first row data cell with the city name
	let tableCity = document.createElement('td');
	tableCity.textContent = this.city;
	tableRow.appendChild(tableCity);

// creates the data cells contaning hourly sales
	for (let hours = 0; hours <hoursOperation.length; hours++){
		let tableCell= document.createElement('td');
		tableCell.textContent = saleVar[hours];
		tableRow.appendChild(tableCell);
	}
// creates the data cells containing daily total for location
	let totalCell = document.createElement('td');
	totalCell.textContent =this.city + ' Total:' + saleVar[hoursOperation.length];
	tableRow.appendChild(totalCell);
};




// creates footer for sales table -- only needs to be run for one city
function tableFooter (){
	let salesFigures = document.getElementById('sales-figures');
	let tableRow = document.createElement('tr');
	tableRow.setAttribute('id','remove');
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
}



// creates new instantaces of CityLocation
let seattleTotal = new CityLocation('Seattle',23,65,6.3);
let tokyoTotal = new CityLocation('Tokyo',3,24,1.2);
let dubaiTotal = new CityLocation('Dubai',11,38,3.7);
let parisTotal = new CityLocation('Paris',20,38,2.3);
let limaTotal = new CityLocation('Lima',2,16,4.6);
let newCity = new CityLocation('carnation',1,88,6);

// generates sales Header
tableHeader();

// generates data table
seattleTotal.salesTable();
tokyoTotal.salesTable();
dubaiTotal.salesTable();
parisTotal.salesTable();
limaTotal.salesTable();
newCity.salesTable();

// targets the form feild to get values
let newStandForm = document.getElementById('new-stand');


// function to creat new instance of CityLocation
function createNewCity(event){
	event.preventDefault();
	console.log('yeah');
	let cityName = event.target.minCust2.value;
	let minCustomer = event.target.minCust.value;
	let maxCustomer = event.target.maxCust.value;
	let averageCustomer = event.target.maxCust2.value;

	let newCityTotal = new CityLocation(cityName,minCustomer,maxCustomer,averageCustomer);

	let salesFigures = document.getElementById('sales-figures');
	let removeFooter = document.getElementById('remove');
	salesFigures.removeChild(removeFooter);

	newCityTotal.salesTable();

	tableFooter();
}

// adds event listener to the form pages submit button
newStandForm.addEventListener('submit',createNewCity);


// generates sales Footer
tableFooter();







