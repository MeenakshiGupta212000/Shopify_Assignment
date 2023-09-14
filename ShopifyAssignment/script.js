document.addEventListener("DOMContentLoaded", function () {
    const chocolates = [
        {
            name: "Kitkat 1",
            price: 1,
            imageSrc: "images/kitkat.jpeg",
            description: "Crispy and crunchy One",
        },
        {
            name: "Milk Chocolate",
            price: 1.5,
            imageSrc: "images/milkchocolate.jpeg",
            description: "Creamy and sweet milk chocolate",
        },
        {
            name: "Ferraro Rocher",
            price: 5.5,
            imageSrc: "images/ferraro.jpeg",
            description: "Crunchy whole hazelnut with a creamy rich filling",
        },
        {
            name: "Dark Chocolate",
            price: 3.5,
            imageSrc: "images/darkchocolate.jpeg",
            description: "Chocolate with the highest cocoa solids content",
        },
        {
            name: "Dairy Milk",
            price: 2.5,
            imageSrc: "images/Dairymilk.jpeg",
            description: "Creamy milk chocolate from the popular Cadbury brand",
        },
        {
            name: "Hershey's Milk Chocolate Bar",
            price: 1.8,
            imageSrc: "images/Hershey's.png",
            description: "Classic milk chocolate bar perfect for snacking",
        },
        {
            name: "Lindt Lindor Truffles",
            price: 7.5,
            imageSrc: "images/LindtLindorTruffles.jpeg",
            description: "Smooth and creamy chocolate truffles with a melting center",
        },
        {
            name: "Swiss Chocolate",
            price: 8.8,
            imageSrc: "images/swiss.jpeg",
            description: "Distinctive triangular milk chocolate bars with honey and almond nougat",
        },
        {
            name: "Nestle Classic",
            price: 6.8,
            imageSrc: "images/nestle.jpeg",
            description: "Luscious nougat and caramel core covered with a delicious chocolayer",
        },
        {
            name: "Fuse",
            price: 1.2,
            imageSrc: "images/fuse.jpeg",
            description: "Delicious fusion of crunchy peanuts, smooth caramel, and a creamy center",
        },
    ];

    const selectedChocolates = [];

    const chocolatesContainer = document.getElementById("chocolates");

    chocolates.forEach((chocolate, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col-md-3", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card", "chocolate-card");

        const cardImageWrapper = document.createElement("div");
        cardImageWrapper.classList.add("card-img-wrapper");

        const cardImage = document.createElement("img");
        cardImage.classList.add("card-img-top");
        cardImage.src = chocolate.imageSrc;
        cardImage.alt = chocolate.name;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = chocolate.name;

        const cardDescription = document.createElement("p");
        cardDescription.classList.add("card-text");
        cardDescription.textContent = chocolate.description;

        const cardPrice = document.createElement("p");
        cardPrice.classList.add("card-text");
        cardPrice.textContent = `Price: $${chocolate.price}`;

        const addButton = document.createElement("button");
        addButton.classList.add("btn", "btn-primary");
        addButton.textContent = "Add to Pack";
        addButton.addEventListener("click", () => {
            if (selectedChocolates.length < 8) {
                selectedChocolates.push(chocolate);
                updateSummary();
            } else {
                alert("You can select up to 8 chocolates.");
            }
        });
        const clearButton = document.getElementById("clear-selection");
        clearButton.addEventListener("click", () => {
            selectedChocolates.length = 0; // Clear the selected chocolates array
            updateSummary();
        });
      
        cardImageWrapper.appendChild(cardImage);
        card.appendChild(cardImageWrapper);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDescription);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(addButton);
        card.appendChild(cardBody);
        cardDiv.appendChild(card);
        chocolatesContainer.appendChild(cardDiv);
    });

    function updateSummary() {
        const summaryContainer = document.querySelector(".selected-chocolates");
        const totalPrice = document.getElementById("total-price");

        summaryContainer.innerHTML = "";
        let total = 0;

        selectedChocolates.forEach(chocolate => {
            const item = document.createElement("p");
            item.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
            summaryContainer.appendChild(item);
            total += chocolate.price;
        });

        totalPrice.textContent = `Total Price: $${total.toFixed(2)}`;
    }
});