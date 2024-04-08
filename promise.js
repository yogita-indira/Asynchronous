const promise=new Promise((resolve, reject)=>{
if(true)
resolve("Resolved.....");
else
reject("Node resolveee, get rejected ")
})
const promise1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
console.log("i am promnise 1")
    }, 1000);
})
const promise2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
console.log("i am promise 2")
    }, 8000);
})


const promise3=new Promise((resolve, reject)=>{
   setTimeout(resolve, 7000, ' mmm')
})

Promise.all([promise1, promise2, promise3]).then((values)=>{
    console.log(values);
})

promise
.then(result2 =>
result2+" got solved or not????"
)
.then(result3=>{
console.log(result3)
})

