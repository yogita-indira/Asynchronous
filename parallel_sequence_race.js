// Function to make API calls using fetch
const makeAPICall = (url) => {
    const startTime = Date.now(); // Record start time of the API call
    return fetch(url)
        .then(response => {
            const endTime = Date.now(); // Record end time of the API call
            const responseTime = endTime - startTime; // Calculate response time
            console.log(`Response time for ${url}: ${responseTime} ms`);
            return response.json();
        });
};

// URLs for the API endpoints
const urls = [
    'https://dummyjson.com/products/1',
    'https://dummyjson.com/products/2',
    'https://dummyjson.com/products/3'
];

// Async function to make parallel API calls
async function parallelAPICalls() {
    try {
        const promises = urls.map(url => makeAPICall(url)); // Create an array of promises
        const [data1, data2, data3] = await Promise.all(promises); // Wait for all promises to resolve
        return [data1, data2, data3]; // Return the data obtained from API calls
    } catch (error) {
        throw error; // Propagate any errors
    }
}

// Async function to race API calls
async function races() {
    try {
        const promises = urls.map(url => makeAPICall(url));
        const results = await Promise.race(promises);
        return results;
    } catch (error) {
        throw error; // Propagate any errors
    }
}

// Async function to make sequential API calls
async function sequenceApiCalls() {
    try {
        const response1 = await makeAPICall(urls[0]);
        console.log('Response 1:', response1);
        
        const response2 = await makeAPICall(urls[1]);
        console.log('Response 2:', response2);
        
        const response3 = await makeAPICall(urls[2]);
        console.log('Response 3:', response3);
        
        return [response1, response2, response3]; // Return responses as an array
    } catch (error) {
        throw error; // Propagate any errors
    }
}

// Record start time
const startTime = Date.now();

// Call parallel API calls
parallelAPICalls()
    .then(dataArray => {
        console.log('Data from parallel API calls:', dataArray);
        const endTime = Date.now();
        console.log('Total time for parallel API calls:', endTime - startTime, 'ms');
    })
    .catch(error => {
        console.error('Error in parallel API calls:', error);
    });

// Call race API calls
races()
    .then(res => {
        console.log('Data from race API calls:', res);
        const endTime = Date.now();
        console.log('Total time for race API calls:', endTime - startTime, 'ms');
    })
    .catch(error => {
        console.error('Error in race API calls:', error);
    });

// Call sequential API calls
sequenceApiCalls()
    .then(responseArray => {
        console.log("Response of sequence API calls:", responseArray);
        const endTime = Date.now();
        console.log('Total time for sequence API calls:', endTime - startTime, 'ms');
    })
    .catch(error => {
        console.error('Error in sequence API calls:', error);
    });
