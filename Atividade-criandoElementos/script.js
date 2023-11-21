const products = [
  {
    name: "Camiseta",
    price: 29.99,
  },
  {
    name: "Calça Jeans",
    price: 49.99,
  },
  {
    name: "Sapatos",
    price: 59.99,
  },
  {
    name: "Vestido",
    price: 39.99,
  },

  {
    name: "Samba-Canção",
    price: 15.99,
  },
  {
    name: "Calcinha",
    price: 9.99,
  },
];

//  MINHA FORMA DE FAZER ----------------------------------------

// const productsList = document.querySelector('ul')
//   console.log(productsList)
//   const listItem = document.createElement('li')
//   console.log(listItem)
//   const productName = document.createElement('h3')
//   const productPrice = document.createElement("p")
//   const productAdd = document.createElement("button")

//   productName.innerText = "Calcinha"
//   productPrice.innerText = "9.99"
//   productAdd.innerText = "Adicionar ao carrinho"

//   listItem.appendChild(productName);
//   listItem.appendChild(productPrice);
//   listItem.appendChild(productAdd);

//   productsList.appendChild(listItem)

// FORMA DE FAZER DA AULA -----------------------------




const productsList = document.querySelector("ul");
    
  for (let i = 0; i < products.length; i++) {
    
    const listItem = document.createElement("li");
    const productName = document.createElement("h3");
    const productPrice = document.createElement("p");
    const addToCartButton = document.createElement("button");
    productName.innerText = products[i].name;
    productPrice.innerText = products[i].price;
    addToCartButton.innerText = "Adicionar ao carrinho";
    listItem.appendChild(productName);
    listItem.appendChild(productPrice);
    listItem.appendChild(addToCartButton);
    productsList.appendChild(listItem);
 
  }



