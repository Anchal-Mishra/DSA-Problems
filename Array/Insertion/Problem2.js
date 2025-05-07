let data = [2, 3]
let startValue = 1 
let endValue = 4 

console.log(data);


for(let i=data.length; i>=0; i--){
    data[i+1]=data[i]
}

data[data.length-1]=endValue
data[0]=startValue

console.log(data);
