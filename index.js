var katzDeli = [];

function takeANumber(katzDeli, customer) {
  katzDeli.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }

  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(katzDeli) {
  let i = 0;
  while(i < katzDeli.length) {
    i++;
  }
  return 
  `The line is currently: ${line.index}`
}
