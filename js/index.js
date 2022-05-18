const ulCard = document.querySelector(".ul-card");

const divCart = document.querySelector('.carrinho')

const sectionCart = document.createElement('section')
sectionCart.classList.add('total-compra')
sectionCart.classList.add('font')

const carrinhoVazio = document.querySelector('.carrinho-vazio')


const divCartQuantidade = document.createElement('div')
const divCartTotal = document.createElement('div')

divCartQuantidade.classList.add("total-compra-quantidade")
divCartTotal.classList.add("total-compra-valor")


const valueCartQuantidade = document.createElement('p')
const valueCartTotal = document.createElement('p')

divCartQuantidade.innerHTML = '<p><strong>Quantidade:</strong> </p>'
divCartTotal.innerHTML = '<p><strong>Total:</strong></p>'

divCartQuantidade.appendChild(valueCartQuantidade)
divCartTotal.appendChild(valueCartTotal)






sectionCart.appendChild(divCartQuantidade)
sectionCart.appendChild(divCartTotal)



const ulcarrinho = document.querySelector('.ul-carrinho')

function renderLi(value) {
    const liCard = document.createElement("li");
    liCard.classList.add("li-card");
    liCard.id = value.id;

    const figureCard = document.createElement("figure");
    figureCard.classList.add("img-container");

    liCard.appendChild(figureCard);

    const imgCard = document.createElement("img");
    imgCard.classList.add("card-img");

    figureCard.appendChild(imgCard);

    const divCard = document.createElement("div");
    divCard.classList.add("card-info");
    divCard.classList.add("font");

    const pTagCard = document.createElement("p");
    pTagCard.classList.add("tag");
    pTagCard.classList.add("font");

    const h3Card = document.createElement("h3");
    h3Card.classList.add("nameItem");
    h3Card.classList.add("font");

    const pDescriptionCard = document.createElement("p");
    pDescriptionCard.classList.add("description");
    pDescriptionCard.classList.add("font");

    const pValueCard = document.createElement("p");
    pValueCard.classList.add("value");
    pValueCard.classList.add("font");

    const pButtonCard = document.createElement("button");
    pButtonCard.classList.add("cartButton");
    pButtonCard.classList.add("font");

    divCard.appendChild(pTagCard);
    divCard.appendChild(h3Card);
    divCard.appendChild(pDescriptionCard);
    divCard.appendChild(pValueCard);
    divCard.appendChild(pButtonCard);

    liCard.appendChild(divCard);

    imgCard.src = value.img;
    pTagCard.innerText = value.tag;
    h3Card.innerText = value.nameItem;
    pDescriptionCard.innerText = value.description;
    pValueCard.innerText = `R$ ${value.value.toFixed(2)}`;
    pButtonCard.innerText = value.addCart;
    pButtonCard.id = value.id;

    pButtonCard.addEventListener("click", () => {
        dataCart.push(value);
        ulCart.innerHTML = "";

        dataCart.forEach((value) => {
            renderLiCarShop(value);
            let totalCart = 0
            for (i = 0; i < dataCart.length; i++) {
                totalCart += dataCart[i].value
            }

            divCart.appendChild(sectionCart)
            valueCartQuantidade.innerText = dataCart.length
            valueCartTotal.innerText = `R$ ${totalCart.toFixed(2)}`
        });
    });

    ulCard.appendChild(liCard);
}

function renderLiFilter(value, filter) {
    if (filter == "All") {
        return renderLi(value);
    }

    if (value.tag[0] == filter) {
        const liCard = document.createElement("li");
        liCard.classList.add("li-card");
        liCard.id = value.id;

        const figureCard = document.createElement("figure");
        figureCard.classList.add("img-container");

        liCard.appendChild(figureCard);

        const imgCard = document.createElement("img");
        imgCard.classList.add("card-img");

        figureCard.appendChild(imgCard);

        const divCard = document.createElement("div");
        divCard.classList.add("card-info");
        divCard.classList.add("font");

        const pTagCard = document.createElement("p");
        pTagCard.classList.add("tag");
        pTagCard.classList.add("font");

        const h3Card = document.createElement("h3");
        h3Card.classList.add("nameItem");
        h3Card.classList.add("font");

        const pDescriptionCard = document.createElement("p");
        pDescriptionCard.classList.add("description");
        pDescriptionCard.classList.add("font");

        const pValueCard = document.createElement("p");
        pValueCard.classList.add("value");
        pValueCard.classList.add("font");

        const pButtonCard = document.createElement("button");
        pButtonCard.classList.add("cartButton");
        pButtonCard.classList.add("font");
        pButtonCard.id = value.id;

        divCard.appendChild(pTagCard);
        divCard.appendChild(h3Card);
        divCard.appendChild(pDescriptionCard);
        divCard.appendChild(pValueCard);
        divCard.appendChild(pButtonCard);

        liCard.appendChild(divCard);

        imgCard.src = value.img;
        pTagCard.innerText = value.tag;
        h3Card.innerText = value.nameItem;
        pDescriptionCard.innerText = value.description;
        pValueCard.innerText = `R$ ${value.value.toFixed(2)}`;
        pButtonCard.innerText = value.addCart;
        pButtonCard.id = value.id;

        pButtonCard.addEventListener("click", () => {
            dataCart.push(value);
            ulCart.innerHTML = "";

            dataCart.forEach((value) => {
                renderLiCarShop(value);
                let totalCart = 0
                for (i = 0; i < dataCart.length; i++) {
                    totalCart += dataCart[i].value
                }

                divCart.appendChild(sectionCart)
                valueCartQuantidade.innerText = dataCart.length
                valueCartTotal.innerText = `R$ ${totalCart.toFixed(2)}`
            });
        });


        ulCard.appendChild(liCard);
    }
}






const navbarlinks = document.querySelector(".navbar-links");

navbarlinks.children[0].addEventListener("click", function () {
    navbarlinks.children[0].innerHTML = "<strong>Todos</strong>";
    navbarlinks.children[1].innerHTML = "Acessórios";
    navbarlinks.children[2].innerHTML = "Calçados";
    navbarlinks.children[3].innerHTML = "Camisetas";
    ulCard.innerHTML = "";
    data.forEach((value) => {
        renderLiFilter(value, "All");
    });
});
navbarlinks.children[1].addEventListener("click", function () {
    navbarlinks.children[0].innerHTML = "Todos";
    navbarlinks.children[1].innerHTML = "<strong>Acessórios</strong>";
    navbarlinks.children[2].innerHTML = "Calçados";
    navbarlinks.children[3].innerHTML = "Camisetas";
    ulCard.innerHTML = "";
    data.forEach((value) => {
        renderLiFilter(value, "Acessórios");
    });
});

navbarlinks.children[2].addEventListener("click", function () {
    navbarlinks.children[0].innerHTML = "Todos";
    navbarlinks.children[1].innerHTML = "Acessórios";
    navbarlinks.children[2].innerHTML = "<strong>Calçados</strong>";
    navbarlinks.children[3].innerHTML = "Camisetas";
    ulCard.innerHTML = "";
    data.forEach((value) => {
        renderLiFilter(value, "Calçados");
    });
});

navbarlinks.children[3].addEventListener("click", function () {
    navbarlinks.children[0].innerHTML = "Todos";
    navbarlinks.children[1].innerHTML = "Acessórios";
    navbarlinks.children[2].innerHTML = "Calçados";
    navbarlinks.children[3].innerHTML = "<strong>Camisetas</strong>";
    ulCard.innerHTML = "";
    data.forEach((value) => {
        renderLiFilter(value, "Camisetas");
    });
});




const ulCart = document.querySelector(".ul-carrinho");

function renderLiCarShop(value) {
    const liCart = document.createElement("li");
    liCart.classList.add("li-carrinho");
    liCart.id = value.id;

    const figureCard = document.createElement("figure");
    figureCard.classList.add("carrinho-img-container");

    liCart.appendChild(figureCard);

    const imgCard = document.createElement("img");
    imgCard.classList.add("carrinho-img");

    figureCard.appendChild(imgCard);

    const divCard = document.createElement("div");
    divCard.classList.add("carrinho-descricao");
    divCard.classList.add("font");

    const h3Card = document.createElement("h3");
    h3Card.classList.add("carrinho-nameItem");
    h3Card.classList.add("font");

    const pValueCard = document.createElement("p");
    pValueCard.classList.add("carrinho-value");
    pValueCard.classList.add("font");

    const pButtonCart = document.createElement("button");
    pButtonCart.classList.add("carrinho-button");
    pButtonCart.classList.add("font");
    pButtonCart.id = value.id;

    divCard.appendChild(h3Card);
    divCard.appendChild(pValueCard);
    divCard.appendChild(pButtonCart);
    liCart.appendChild(divCard);

    imgCard.src = value.img;
    h3Card.innerText = value.nameItem;
    pValueCard.innerText = `R$ ${value.value.toFixed(2)}`;
    pButtonCart.innerText = "Remover produto";
    pButtonCart.id = value.id;

    pButtonCart.addEventListener("click", function () {

        dataCart.splice(dataCart.indexOf(value), 1);
        liCart.remove();

        let totalCart = 0
        for (i = 0; i < dataCart.length; i++) {
            totalCart += dataCart[i].value
        }
        valueCartQuantidade.innerText = dataCart.length
        valueCartTotal.innerText = `R$ ${totalCart.toFixed(2)}`
        if (dataCart.length == 0) {

            sectionCart.remove()
            ulCart.appendChild(carrinhoVazio)

        }

    });

    ulCart.appendChild(liCart);

}


data.forEach((value) => {
    renderLiFilter(value, "All");
});