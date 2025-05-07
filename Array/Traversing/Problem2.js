let data=[10, 20, 30, 40, 50]
console.log(data);

for(let i=0; i<data.length; i++){
  if(i%2==0){
    console.log(`Even index is ${i} value : ${data[i]}`);
  }
  else{
    console.log(`Odd index is ${i} value : ${data[i]}`);
    
  }
}