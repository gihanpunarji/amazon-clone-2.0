function getCartItems() {
    db.collection("cart-items").onSnapshot((snapshot) => {
        let totalCount = 0;
        snapshot.forEach((doc)=> {
            totalCount += doc.data().quantity;
        })
        getCartCounter(totalCount);
    })
}

function getCartCounter(totalCount) {
    let cart = document.querySelector(".cart-number");
    cart.innerHTML = totalCount;
}

getCartItems();