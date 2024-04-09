const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(sum);

function sum(total, currentValue){

  return total += currentValue;
};

console.log(totalBatteries);