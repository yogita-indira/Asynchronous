const urls=[
    'https://dummyjson.com/products/1',
    'https://dummyjson.com/products/2',
    'https://dummyjson.com/products/3'
]


const Animal = async () => {
   const res=await fetch('https://dummyjson.com/products/1')
   const data =await res.json();
  return data;
};
Animal().then((result)=>{
    console.log(result)
})

const Animal1 = async () => {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url))); // Fetch all URLs concurrently
        const jsons = await Promise.all(responses.map(response => response.json())); // Parse JSON for all responses
        return jsons;
    } catch (error) {
        console.error("Error:", error);
        throw error; // Re-throw the error for further handling
    }
};

Animal1().then((results) => {
    console.log(results);
});
