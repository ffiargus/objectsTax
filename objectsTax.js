var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calcTotalSales(sales){
  var total = 0;
  for(var i = 0; i < sales.length; i++)
    total += sales[i];
  return total;
}

function calculateTax(totalSales, province) {
  return totalSales * salesTaxRates[province];
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var resultObj = {};

  for(var i = 0; i < salesData.length; i++){
    resultObj[salesData[i].name] = {
      totalSales: 0,
      totalTaxes: 0
    }
  }

  for(var i = 0; i < salesData.length; i++){
    resultObj[salesData[i].name].totalSales +=
      calcTotalSales(salesData[i].sales);
    resultObj[salesData[i].name].totalTaxes +=
      calculateTax(calcTotalSales(salesData[i].sales),
      salesData[i].province);
  }

  return resultObj;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/