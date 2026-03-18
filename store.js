let products = [
  {name: "T-Shirt", price: 500, img: "https://tse2.mm.bing.net/th/id/OIP.Gonozsd3xePMGbqfUhe4uQHaIR?rs=1&pid=ImgDetMain&o=7&rm=3"},
  {name: "Jeans", price: 1200, img: "https://image.hm.com/assets/hm/31/b8/31b82a70ea32a0ee0d9866e8ed674e61d0ad3825.jpg?imwidth=1260"},
  {name: "Shoes", price: 2000, img: "https://tse3.mm.bing.net/th/id/OIP.rjMgiZf9_FSIfX4bZuZ1gwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"},
  {name: "Dress", price: 1500, img: "https://tse2.mm.bing.net/th/id/OIP.SPFDJrOTvzhIusgKccAVpwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
  {name: "Beauty Kit", price: 1000, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"},
  {name: "Kids Wear", price: 1300, img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"}

];

function displayProducts(items) {
  let list = document.getElementById("product-list");
  list.innerHTML = "";

  items.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
}

function sortProducts() {
  let value = document.getElementById("sort").value;

  let sorted = [...products];

  if (value === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (value === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
}

displayProducts(products);
function checkout() {
    alert("Proceeding to payment...");
}