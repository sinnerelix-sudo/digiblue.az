import { addToCart, formatPrice, getDefaultOption, getProduct } from "./store.js";
import { setupBaseUi, setupRipple, showToast } from "./ui.js";

const productCards = document.querySelectorAll(".product-card");
const optionList = document.getElementById("detail-options");
const addToCartButton = document.getElementById("add-to-cart-button");
const buyNowButton = document.getElementById("buy-now-button");

let selectedProductId = "chatgpt";
let selectedOptionId = getDefaultOption(getProduct(selectedProductId)).id;

function renderDetail(productId) {
  const product = getProduct(productId);
  if (!product) return;

  selectedProductId = productId;
  selectedOptionId = getDefaultOption(product).id;

  document.getElementById("detail-badge").textContent = product.badge;
  document.getElementById("detail-title").textContent = product.title;
  document.getElementById("detail-subtitle").textContent = product.subtitle;
  document.getElementById("detail-price").textContent = formatPrice(product.basePrice);
  document.getElementById("detail-old-price").textContent = formatPrice(product.oldPrice);
  document.getElementById("detail-note").textContent = product.note;
  document.getElementById("detail-description").textContent = product.description;

  const art = document.getElementById("detail-art");
  art.className = `detail-art ${product.artClass}`;
  art.innerHTML = `<span>${product.artText}</span>`;

  optionList.innerHTML = "";
  product.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = `option-pill${option.default ? " active" : ""}`;
    optionButton.setAttribute("data-ripple", "");
    optionButton.innerHTML = `<span>${option.label}</span><span>${formatPrice(option.price)}</span>`;
    optionButton.addEventListener("click", () => {
      optionList.querySelectorAll(".option-pill").forEach((button) => button.classList.remove("active"));
      optionButton.classList.add("active");
      selectedOptionId = option.id;
      document.getElementById("detail-price").textContent = formatPrice(option.price);
      document.getElementById("detail-note").textContent =
        index === 0 ? product.note : "Seçilmiş paket";
    });
    optionList.appendChild(optionButton);
  });

  setupRipple(optionList);
}

function setupProducts() {
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.product;
      productCards.forEach((item) => item.classList.remove("active"));
      card.classList.add("active");
      renderDetail(key);

      if (window.innerWidth < 720) {
        document.getElementById("detail").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function setupPurchaseActions() {
  addToCartButton?.addEventListener("click", () => {
    addToCart(selectedProductId, selectedOptionId, 1);
    showToast("Məhsul səbətə əlavə olundu");
  });

  buyNowButton?.addEventListener("click", () => {
    addToCart(selectedProductId, selectedOptionId, 1);
    window.location.href = "./payment.html";
  });
}

setupBaseUi();
setupProducts();
setupPurchaseActions();
renderDetail(selectedProductId);
