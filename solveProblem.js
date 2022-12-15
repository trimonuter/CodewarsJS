// url: https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
// program: 5_supermarketQueue.js

function queueTime(customers, n){
  console.log(customers, n);
  if (customers.length <= n){
    return (customers.length === 0) ? 0 : Math.max(...customers);
  }
  if (n === 1){
    let time = 0;
    for (let i = 0; i < customers.length; i++){
      time += customers[i];
    }
    return time;
  }
  let i = 0;
  let time = 0;
  while (i < customers.length){
    i = 0;
    let servedCustomers = [];
    while (servedCustomers.length < n){
      if (customers[i] > 0){
        servedCustomers.push(customers[i]);
      }
      i++;
    }
    for (let j = 0; j < i; j++){
      customers[j] -= Math.min(...servedCustomers);
    }
    if (i < customers.length){
      time += Math.min(...servedCustomers);
    }
    else{
      time += Math.max(...servedCustomers);
    }
    console.log(time)
  }
  return time;
}

// Success, but code timeout