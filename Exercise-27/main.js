
  //promise
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

fetchItems()
.then((items) => console.log("Items " ,items))
.catch((err) => console.log(err));