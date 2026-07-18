
    // Get Method
    async function fetchData() {
        try{
            console.log("Fetching data");
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            if(!response.ok) {
                throw new Error (`HTTP error: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            

        } catch(err) {
            console.log(err);
        }
    }

    fetchData();