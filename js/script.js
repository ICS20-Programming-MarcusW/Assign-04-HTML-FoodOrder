// Copyright (c) 2022 Marcus Wehbi All rights reserved
//
// Created by: Marcus Wehbi
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/*
 * This function displays the burrito cost including: subtotal, total, tax, and a summary of the order
*/
function orderBurrito() {
  // initialize variables (tax, subtotal, and total) + constant (taxRate)
  const taxRate = 0.13;
  let subtotal = 0;
  let tax = 0;
  let total = 0;
  // variable to summarize the order
  let orderSummary = "Order: "
  // assign values to constants (burrito sizes)
  const small = 8.9
  const medium = 10.9
  const large = 12.9
  // assign values to constants (drink sizes or no drink)
  const smallDrink = 3.59
  const mediumDrink = 4.59
  const largeDrink = 6.59
  // assign values to constants (topping prices)
  const meatPrice = 2.22
  const cilantroPrice = 0.77
  const lettucePrice = 0.77
  const cheesePrice = 1.05
  const pepperPrice = 1.11
  const guacamolePrice = 1.25
  
    
	// get the size of burrito the user wants using select drop down menu
	let sizeBurrito = document.getElementById('sizeBurrito');
	let burritoSize = sizeBurrito.options[sizeBurrito.selectedIndex].value;
  
  	if (burritoSize == "small") {
    // if the burrito is small, add the price of a small burrito to the subtotal and update order summary
		subtotal = subtotal + small;
    orderSummary = orderSummary + "<br><b>Small Burrito $" + small.toFixed(2) + "</b>"
	}
	else if (burritoSize == "medium") {
    // if the burrito is medium, add the price of a medium burrito to the subtotal and update order summary
		subtotal = subtotal + medium;
    orderSummary = orderSummary + "<br><b>Medium Burrito $" + medium.toFixed(2) + "</b>"
	}
	else if(burritoSize == "large"){	
    // if the burrito is large, add the price of a large burrito to the subtotal and update order summary
		subtotal = subtotal + large
    orderSummary = orderSummary + "<br><b>Large Burrito $" + large.toFixed(2) + "</b>"
	}

  // checking for which toppings are selected
  // check if meat is checked
  let meatChecked = document.getElementById("meat").checked;  
  if (meatChecked){  
    // if meat is checked, add meat to price
    subtotal = subtotal + meatPrice;
    orderSummary = orderSummary + "<br>  - Meat (Chicken/Beef)";
  }  
  // check if cilantro is checked
  let cilantroChecked = document.getElementById("Cilantro").checked;  
  if (cilantroChecked){
    // if cilantro is checked, add cilantro to price
    subtotal = subtotal + cilantroPrice;
    orderSummary = orderSummary + "<br>  - Cilantro";
  }  
  // check if lettuce is checked
  let lettuceChecked = document.getElementById("Lettuce").checked;  
  if (lettuceChecked){  
    // if lettuce is checked, add lettuce to price
    subtotal = subtotal + lettucePrice;
    orderSummary = orderSummary + "<br>  - Lettuce";
  }  
  // check if cheese is checked
  let cheeseChecked = document.getElementById("Cheddar-Cheese").checked;  
  if (cheeseChecked){  
    // if cheese is checked, add cheese to price
    subtotal = subtotal + cheesePrice;
    orderSummary = orderSummary + "<br>  - Cheddar Cheese";
  }  
  // check if pepper is checked
  let pepperChecked = document.getElementById("Bell-Pepper").checked;  
  if (pepperChecked){  
    // if pepper is checked, add pepper to price
    subtotal = subtotal + pepperPrice;
    orderSummary = orderSummary + "<br>  - Bell Pepper";
  }  
  // check if guacamole is checked
  let guacamoleChecked = document.getElementById("Guacamole").checked;  
  if (guacamoleChecked){  
    // if guacamole is checked, add guacamole to price
    subtotal = subtotal + guacamolePrice;
    orderSummary = orderSummary + "<br>  - Guacamole";
  }  
  
	// get the size of drink the user wants using select drop fown menu
  let drink = document.getElementById('drinkSize');
	let drinkSize = drink.options[drink.selectedIndex].value;

  if (drinkSize == "small") {
    // if the drink size is small, add the price of a small drink to the subtotal and update order summary
		subtotal = subtotal + smallDrink;
     orderSummary = orderSummary + "<br><b>Small Drink $" + smallDrink.toFixed(2) + "</b>"
	}
	else if (drinkSize == "medium") {
    // if the drink size is mdeium, add the price of a medium drink to the subtotal and update order summary
		subtotal = subtotal + mediumDrink;
     orderSummary = orderSummary + "<br><b>Medium Drink $" + mediumDrink.toFixed(2) + "</b>"
	}
	else if (drinkSize == "large") {	
    // if the drink size is large, add the price of a large drink to the subtotal and update order summary
		subtotal = subtotal + largeDrink;
     orderSummary = orderSummary + "<br><b>Large Drink $" + largeDrink.toFixed(2) + "</b>"
	}else{
      // if a drink size is not selected, add nothing to subtotal and update order summary
      orderSummary = orderSummary + "<br><b>No Drink</b>"
  }

  // calculate different costs (subtotal, tax, total)
  tax = subtotal * taxRate;
  total = subtotal + tax;

  // display the costs of the order
  // display order summary
  document.getElementById('order-summary').innerHTML = "<h4>" + orderSummary + "</h4>";
  // display subtotal price of order
  document.getElementById('display-subtotal').innerHTML = "<p>The order's subtotal is $" + subtotal.toFixed(2) + ".</p>";
  // display tax price of order
  document.getElementById('display-tax').innerHTML = "<p>The order's tax is $" + tax.toFixed(2) + ".</p>";
  // display total price of order
  document.getElementById('display-total').innerHTML = "<p>The order will cost $" + total.toFixed(2) + ".</p>";
}
