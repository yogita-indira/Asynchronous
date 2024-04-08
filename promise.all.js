const urls = [
    'https://dummyjson.com/products/1',
    'https://dummyjson.com/products/2',
    'https://dummyjson.com/products/3'
];
const response= Promise.all(urls.map(url=>{
    return fetch(url).then(res=>{
        return res.json();
    })
})).then(dataArray => {
    console.log(dataArray)
    const [data1, data2, data3] = dataArray;
    console.log(data1, data2, data3); 
}).catch(error => {
    console.error("Error:", error);
});