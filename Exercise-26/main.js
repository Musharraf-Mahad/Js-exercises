

    //synchronous
  function fetchItems() {
    alert("Fetch data");
    return {product:"milk", quantity:10};
  }

  const items = fetchItems();
  console.log("items: " + items);

  console.log("After fetching items this message appears");


        //Asynchrounous
  function fetchItems(callback) {
    setTimeout(()=> {
      const items = {product:'milk', quanitiy:10};
      callback(items);
    },2000);
  }

  fetchItems(function(item) {
    console.log(item);
  });

  console.log("Before fetching log this message");