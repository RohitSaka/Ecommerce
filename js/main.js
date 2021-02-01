fetch("https://rohitsaka.github.io/Ecommerce/data/data.json").then
(response=>{
    return response.json()
}).then(data=>{
    console.log(data)
    displayData(data)
})

function displayData(info){
    var bodyElement = document.querySelector("body")
    var row= document.createElement("section")
    row.classList.add("row" , "justify-content-center")
    bodyElement.append(row)
    info.mobiles.map(value => {
        var column = document.createElement("article")
        column.classList.add("col-sm-10","col-md-6","col-lg-3")
        row.append(column)

        var card = document.createElement("div")
        card.classList.add("card")

        // card - body
        var cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        //Image

        var imageElement = document.createElement("img")
        imageElement.src = value.image;
        imageElement.classList.add("img-responsive")
        imageElement.alt = value.name;

        //name 

        var name = document.createElement("h2");
        name.textContent = value.name;
        name.classList.add("text-center" ,"text-primary")


        //Original price

        var original  = document.createElement("p");
        original.innerHTML = "<s>₹"+value.originalPrice+"/-</s>";
        original.classList.add("text-center","text-danger");

        //price

        var price = document.createElement("p");
        price.innerHTML = "₹"+value.price+"/-";
        price.classList.add("text-center", "text-secondary" , "text-block")

        //button
        var buttonParent = document.createElement("div");
        buttonParent.classList.add("d-grid","gap-2");

        var button = document.createElement("button");
        button.classList.add("btn","btn-sm","btn-outline-info","btn-block");
        button.textContent = "Add to Cart"
        buttonParent.append(button)

        //Buy Now
        var buttonNew = document.createElement("div");
        buttonNew.classList.add("d-grid","gap-2");

        var buy = document.createElement("button");
        buy.classList.add("btn","btn-sm","btn-success","btn-block");
        buy.textContent = "Buy Now"
        buttonNew.append(buy)

        
        cardBody.append(imageElement)
        cardBody.append(name)
        cardBody.append(original)
        cardBody.append(price)
        cardBody.append(buttonParent)
        cardBody.append(buttonNew)
        card.append(cardBody)
        column.append(card)

    })
}




























// // console.log(info.mobile[0])
    // // var element = document.getElementsByTagName("div");
    // // var nodeData = document.querySelectorAll("div") 
    // // console.log(nodeData[1])
    // // var bodyElement = document.querySelector("body")
    // // var newElement = document.createElement("h1")
    // // newElement.textContent="Rohit"
    // // console.log(newElement)
    // // bodyElement.append(newElement)
    // var bodyElement = document.querySelector("body")
    // var element = document.createElement("img")
    
    // element.src ="../img/1.jpg"
    // // element.setAttribute("class","image1")
    // element.classList.add("class1","class2","class3")
    // element.classList.remove("class3")
    // bodyElement.append(element)
