

    let list = document.querySelector('#list');

    function addItem() {
        let newItem = document.createElement('li');

        newItem.textContent = "new course";

        list.appendChild(newItem);
    }

    function removeItem() {
        if(list.lastChild) {
            list.removeChild(list.lastChild);
        } else {
            alert('No more remove');
        }
    }