function getItems(){
    db.collection("items").get().then((querySnapshot) => {
        //console.log(querySnapshot);
        let items = [];
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`); {it will get id & data}
         items.push({
             id:doc.id,
             image:doc.data().image,
             name:doc.data().name,
             make:doc.data().make,
             rating:doc.data().doc,
             price:doc.data().price
         })   
        });
        generateItems(items)    
    });
}

function addToCart(item){
    console.log("Add to cart clicked");
    console.log(item);
}


function generateItems(items) {
    let itemsHTML = "";
    items.forEach((items)=> {
        let doc = document.createElement("div");
        doc.classList.add("main-product","mr-5");
        doc.innerHTML = `
        <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
        <img class="w-full h-full object-contain" src="images/prod-3.jpg">
    </div>
    <div class="product-name text-gray-700 font-bold mt-2 text-sm">
        Apple MacBook Pro 
    </div>
    <div class="product-make text-green-700 font-bold">
        Apple
    </div>
    <div class="product-rating text-yellow-500 font-bold my-1">
        ⭐⭐⭐⭐⭐4.7
    </div>
    <div class="product-price">
        $1,520.14 
    </div>
    <div class ="hover:bg-yellow-600 cursor-pointer text-md rounded text-white flex items-center justify-center add-to-cart h-8 w-28 bg-yellow-500">
        Add to Cart
    </div>
        
        
        
        `
         itemsHTML += `
         
         <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
             <img class="w-full h-full object-contain" src="$(items.image)">
         </div>
         <div class="product-name text-gray-700 font-bold mt-2 text-sm">
            $(items.name)
         </div>
         <div class="product-make text-green-700 font-bold">
         $(items.make)
         </div>
         <div class="product-rating text-yellow-500 font-bold my-1">
             ⭐⭐⭐⭐⭐ $(items.rating)
         </div>
         <div class="product-price">
            $(items.price)
         </div>
         
     `
    let addToCartEl = document.createElement("div");
    addToCartEl.classList.add("hover:bg-yellow-600","cursor-pointer","product-add","h-8","w-28","rounded","bg-yellow-500","text-white","text-md","flex","justify-center","items-center");
    addToCartEl.innerHTML = "Add to cart";
    addToCartEl.addEventListener("click",function(){
        addToCart(items);
    })
    doc.appendChild(addToCartEl);
    document.querySelector(".main-section-products").appendChild(doc);
    })

    
}


getItems();