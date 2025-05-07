let items=[20,89,63,54,30,78,67,39];
        let pos=5;
        let x=100;

        console.log(items);
        console.log("New Element: ", x);
        console.log("Position: ", pos);
        

        for(let i=items.length-1; i>=pos;i--){
            items[i+1]=items[i]
        }
        items[pos]=x;
        console.log(items);