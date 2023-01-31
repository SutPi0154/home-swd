// console.log(products);

const ProductCards = document.querySelector("#ProductCards");
const app = document.querySelector("#app");
const productDetailModal = new bootstrap.Modal("#productDetailModal");

const excerpt = (str, maxLength = 70) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};

const star = (no) => {
  let starStr = "";
  for (let i = 1; i <= 5; i++) {
    if (Math.ceil(no) <= i) {
      starStr += "<i class='bi bi-star'></i>";
    } else {
      starStr += "<i class='bi bi-star-fill'></i>";
    }
  }
  return starStr;
};
const createProductCard = (product) => {
  const div = document.createElement("div");
  div.className = "col-12 col-md-6 col-lg-4 product-card";
  div.setAttribute("product-id", product.id);
  div.innerHTML = `
  <div class="card p-0 m-0">
  <div class="card-body">
    <img
      class="product-card-img mb-3"
      src="${product.thumbnail}"
      alt=""
    />
    <h4 class="fw-bold mb-2 text-truncate">${product.title}</h4>
    <div
      class="d-flex mb-2 justify-content-between align-items-center"
    >
      <p class="badge bg-light text-dark fs-6 text-capitalize">${product.category.replaceAll(
        "-",
        " "
      )}</p>
      <div class="">
        ${star(product.rating)}
      </div>
    </div>

    <p class="product-card-description text-black-50">${excerpt(
      product.description
    )}</p>
    <div
      class="d-flex border-top pt-3 justify-content-between align-items-center"
    >
      <p class="mb-0">$ ${product.price}</p>
      <button class="btn btn-outline-dark">Add to Cart</button>
    </div>
  </div>
</div>`;
  return div;
};

products.forEach((product) => {
  ProductCards.append(createProductCard(product));
});
const productDetailCarouselItems = (arr) => {
  let slide = "";
  let indicators = "";
  arr.forEach((el, index) => {
    slide += `
    <div class="carousel-item ${index === 0 && "active"}">
           <img
             src="${el}"
             class="d-block w-100 product-detail-img"
             alt="..."
           />
         </div>`;
    indicators += `
         <button
         type="button"
         data-bs-target="#productDetailCarousel"
         data-bs-slide-to="${index}"
         class="${index === 0 && "active"}"
         aria-current="true"
         aria-label="Slide 1"
       ></button>`;
  });
  return { slide, indicators };
};

app.addEventListener("click", (event) => {
  if (event.target.closest(".product-card")) {
    const currentCard = event.target.closest(".product-card");
    const currentProductId = currentCard.getAttribute("product-id");
    const currentProduct = products.find(
      (product) => product.id == currentProductId
    );
    productDetailModal._element.querySelector(".modal-title").innerText =
      currentProduct.title;
    productDetailModal._element.querySelector(".modal-body").innerHTML = `
       <div id="productDetailCarousel" class="carousel slide">
       <div class="carousel-indicators">
         ${productDetailCarouselItems(currentProduct.images).indicators}
       </div>
       <div class="carousel-inner">
        ${productDetailCarouselItems(currentProduct.images).slide}
       </div>
       <button
         class="carousel-control-prev"
         type="button"
         data-bs-target="#productDetailCarousel"
         data-bs-slide="prev"
       >
         <span
           class="carousel-control-prev-icon"
           aria-hidden="true"
         ></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button
         class="carousel-control-next"
         type="button"
         data-bs-target="#productDetailCarousel"
         data-bs-slide="next"
       >
         <span
           class="carousel-control-next-icon"
           aria-hidden="true"
         ></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div>

     <div
       class="d-flex mb-2 mt-3 justify-content-between align-items-center"
     >
       <p class="badge bg-light text-dark fs-6 text-capitalize">
        ${currentProduct.category}
       </p>
       <div class="">${star(currentProduct.rating)}</div>
     </div>

     <p class="mb-3 mt-3">
      ${currentProduct.description}
     </p>
     <p>$ ${currentProduct.price}</p>`;
    productDetailModal.show();
  }
});
