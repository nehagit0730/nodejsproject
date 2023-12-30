let a =20;
let b =0;

let waitingData = new Promise((resolve, reject) => {    //use of promise
    setTimeout(()=>{
        resolve(30);
    },2000)
})

waitingData.then((data)=>{
    b = data;
    console.log(a+b);
})

/*Promises are a powerful tool in Node. js for simplifying asynchronous code, 
making it more readable and maintainable. Promises have three states: pending, 
fulfilled (resolved), and rejected. 
This state-based model allows for clear handling of success and error scenarios.*/