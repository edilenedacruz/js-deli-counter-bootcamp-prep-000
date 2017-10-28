var katzDeli = [];

function takeANumber(katzDeli, customer) {
  katzDeli.push(customer);
  return (`Welcome, ${customer}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    
  }

}
