
let products =[
    { id:1,
     picture:"https://i.postimg.cc/2yxnDqh2/bcargo.png",
     name: "Cargo",
     title:"Cargo",
    cost : "R550",
     },
     { id:2,
         picture:"https://i.postimg.cc/pT6gBTpc/cargo.png",
         name: "cargo pants",
         title: "Cargo",
        cost : "R550",
         },
         { id:2,
             picture:"https://i.postimg.cc/NF4YkYvK/wcargo.png",
             name: "cargo",
             title: "Cargo",
            cost : "R550",
             },
             { id:2,
                 picture:"https://i.postimg.cc/BvsgdGrS/cj.png",
                 name: "cargo jeans",
                 title: "Cargo",
                cost : "R600",
                 },
                 { id:2,
                     picture:"https://i.postimg.cc/BvMxkP5p/jacket.png",
                     name: "jacket",
                     title: "Jacket",
                    cost : "R 600",
                     },
 ]
 // let divChrome = document.querySelector(".container");
 // de.forEach(element => {
 // });
 let divStyle = document.querySelector(".product");
 products.forEach((reader)=> {
     divStyle.innerHTML += `
     <div class="cards-wrapper col-4">
     <div class="images">
     <img src="${reader.picture}" alt="${reader.namee}" loading="lazy" class="img-fluid">
     <h2>${reader.title}</h2>
     </div>
     <p class="price">${reader.cost}</p>
     </div>
     `
 })