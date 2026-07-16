
    function fetchItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if(success) {
                resolve({product:'milk', quantity:10});
            } else {
                reject("Failed to fetch items");
            }
        },2000);
    });
}

    async function DisplayItems() {
        try{
            const items = await fetchItems();
            console.log(items);
        } catch(err) {
            console.log(err);
        }
    }

    DisplayItems();