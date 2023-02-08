// console.log(products);

const app = document.querySelector("#app");
const ProductCards = document.querySelector("#ProductCards");
const header = document.querySelector("#header");
const cart = document.querySelector("#cart");
const search = document.querySelector("#search");
const productCategories = document.querySelector("#productCategories");
const productDetailModal = new bootstrap.Modal("#productDetailModal");

const excerpt = (str, maxLength = 70) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};

const slugToText = (slug) => {
  return slug.replaceAll("-", " ");
};

const createCategoryBtn = (name) => {
  const btn = document.createElement("button");
  btn.className = ` btn btn-outline-dark cat text-capitalize me-2`;
  btn.setAttribute("cat", name);
  btn.innerText = slugToText(name);
  return btn;
};

const star = (no) => {
  let starStr = "";
  for (let i = 1; i <= 5; i++) {
    if (Math.floor(no) < i) {
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
  div.addEventListener("click", () => {
    renderProductDetailModal();
  });
  div.innerHTML = `
  <div class="card p-0 m-0">
  <div class="card-body">
   
    <h4 class="fw-bold mb-2 text-truncate">${product.title}</h4>
    <div
      class="d-flex mb-2 justify-content-between align-items-center"
    >
      <p class="badge bg-light text-dark fs-6 text-capitalize">${slugToText(
        product.category
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
      <p class="mb-0 price">$ ${product.price}</p>
    </div>
  </div>
</div>`;
  const img = new Image();
  img.src = product.thumbnail;
  img.className = `product-card-img mb-3`;
  div.querySelector(".card-body").prepend(img);

  const btn = document.createElement("button");
  btn.className = `btn btn-outline-dark add`;
  btn.innerText = `Add to Cart`;

  btn.addEventListener("click", (event) => {
    event.stopPropagation();

    if (btn.classList.contains("active")) {
      btn.innerText = `Add to Cart`;
      btn.classList.remove("active");
    } else {
      const img4ani = new Image();
      img4ani.src = product.thumbnail;
      img4ani.style.position = "fixed";
      img4ani.style.transition = "0.5s";
      img4ani.style.zIndex = 2000;
      img4ani.style.left = img.getBoundingClientRect().left + `px`;
      img4ani.style.top = img.getBoundingClientRect().top + `px`;
      img4ani.style.width = img.getBoundingClientRect().width + `px`;
      img4ani.style.height = img.getBoundingClientRect().height + `px`;

      setTimeout(() => {
        // img4ani.style.transform = "scale(0.1)";
        img4ani.style.width = "0px";
        img4ani.style.height = "0px";
        img4ani.style.left = cart.getBoundingClientRect().left + 10 + `px`;
        img4ani.style.top = cart.getBoundingClientRect().top + 20 + `px`;
        img4ani.style.transform = "rotate(360deg)";
      }, 100);

      document.body.append(img4ani);

      btn.classList.add("active");
      btn.innerText = `Added`;
    }
  });

  div.querySelector(".price").after(btn);
  return div;
};

const renderProductCard = (products) => {
  ProductCards.innerHTML = null;
  products.forEach((product) => {
    ProductCards.append(createProductCard(product));
  });
};

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

const renderProductDetailModal = () => {
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
        ${slugToText(currentProduct.category)}
       </p>
       <div class="">${star(currentProduct.rating)}</div>
     </div>

     <p class="mb-3 mt-3">
      ${currentProduct.description}
     </p>
     <p>$ ${currentProduct.price}</p>`;
  productDetailModal.show();
};

const renderProductCardByCategory = () => {
  const currentCategory = event.target.getAttribute("cat");
  if (currentCategory === "all") {
    // renderProductCard(products);
    console.log("click all");
  } else {
    renderProductCard(
      products.filter((product) => product.category === currentCategory)
    );
  }
  // remove old active
  productCategories.querySelector(".active").classList.remove("active");
  // add new active
  event.target.classList.add("active");
  console.log("you click btn");
};

const renderBySearch = (keyword) => {
  renderProductCard(
    products.filter((product) => {
      return (
        product.title.toLocaleLowerCase().search(keyword.toLocaleLowerCase()) !=
          -1 ||
        product.description
          .toLocaleLowerCase()
          .search(keyword.toLocaleLowerCase()) != -1
      );
    })
  );
};

// process
renderProductCard(products);

categories.forEach((category) =>
  productCategories.append(createCategoryBtn(category))
);

window.addEventListener("scroll", (event) => {
  // console.log(window.scrollY);
  if (window.scrollY > 150) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
});

app.addEventListener("click", (event) => {
  if (
    event.target.closest(".product-card") &&
    !event.target.classList.contains("add")
  ) {
    renderProductDetailModal();
  }
  if (event.target.classList.contains("cat")) {
    renderProductCardByCategory();
  }
  if (event.target.classList.contains("add")) {
    console.log("added");
  }
});

search.addEventListener("keyup", (event) => {
  renderBySearch(search.value);
});
