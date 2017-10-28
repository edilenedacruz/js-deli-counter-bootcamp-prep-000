var katzDeli = [];

function takeANumber(katzDeli, customer) {
  katzDeli.push(customer)
  return (`Welcome, ${customer}. You are number $(katzDeli.length) in line.`); 
}
