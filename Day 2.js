// Exercise 8
// Consider this function:
function message(product, inBudget){
  if(inBudget) {
    return "Product is within budget"
  } else {
    return "Product is beyond budget"
  }
}
// And consider this variable:
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
// Write a function checkBudget that takes a product, budget and the message function as arguments, determines whether the product is within budget and returns the result of the message function.
function checkBudget(product, budget, message()){
    if (product.price <= budget) {
      return message(product,true)
    } else {
      return message(product,false)
    }
}
