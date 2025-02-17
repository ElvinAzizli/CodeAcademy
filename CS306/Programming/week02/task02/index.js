document.addEventListener("DOMContentLoaded", () => {
    let cardsDiv = document.querySelector(".cards");

    async function GetDatas() {
        try {
            let result = await axios.get("https://northwind.vercel.app/api/suppliers");
            result.data.forEach((product) => {
                CreateProduct(product);
            });
        } catch (err) {
            console.error(err);
        }
    }

    GetDatas();

    function CreateProduct(product) {
        let colDiv = document.createElement("div");
        let cardDiv = document.createElement("div");
        let topDiv = document.createElement("div");
        let bottomDiv = document.createElement("div");
        let H3 = document.createElement("h3");
        let span = document.createElement("span");
        let button = document.createElement("button");

        colDiv.className = "col";
        cardDiv.className = "card product";
        topDiv.className = "card-top";
        bottomDiv.className = "card-bottom";

        H3.textContent = product.companyName;
        span.textContent = `Contact: ${product.contactName} (${product.contactTitle})`;
        button.textContent = "More Info";

        topDiv.appendChild(H3);
        topDiv.appendChild(span);
        bottomDiv.appendChild(button);
        cardDiv.appendChild(topDiv);
        cardDiv.appendChild(bottomDiv);
        colDiv.appendChild(cardDiv);
        cardsDiv.appendChild(colDiv);
    }
});
