import {
  addToCart,
  clearCart,
  formatPrice,
  getCartTotals,
  getProducts,
  readCart,
  removeCartItem,
  updateCartQuantity,
} from "./store.js";
import { setupBaseUi, setupGlow, setupRipple, showToast } from "./ui.js";

const cartItemsRoot = document.getElementById("cart-items");
const emptyState = document.getElementById("cart-empty-state");
const clearCartButton = document.getElementById("clear-cart-button");
const quickPicksGrid = document.getElementById("quick-picks-grid");

function renderSummary(totals) {
  document.getElementById("cart-subtotal").textContent = formatPrice(totals.subtotal);
  document.getElementById("cart-service-fee").textContent = formatPrice(totals.serviceFee);
  document.getElementById("cart-discount").textContent = `-${formatPrice(totals.discount)}`;
  document.getElementById("cart-total").textContent = formatPrice(totals.total);
}

function renderCart() {
  const totals = getCartTotals();
  renderSummary(totals);

  if (!totals.items.length) {
    emptyState.hidden = false;
    cartItemsRoot.innerHTML = "";
    return;
  }

  emptyState.hidden = true;
  cartItemsRoot.innerHTML = totals.items
    .map(
      (item) => `
        <article class="cart-item-row" data-item-id="${item.id}">
          <div class="cart-item-art ${item.product.artClass}">
            <span>${item.product.artText}</span>
          </div>
          <div class="cart-item-copy">
            <strong>${item.product.shortTitle}</strong>
            <p>${item.option.label}</p>
            <small>${item.product.category}</small>
          </div>
          <div class="qty-stepper">
            <button type="button" class="qty-button" data-action="minus" data-ripple>-</button>
            <span>${item.quantity}</span>
            <button type="button" class="qty-button" data-action="plus" data-ripple>+</button>
          </div>
          <div class="cart-line-price">
            <strong>${formatPrice(item.lineTotal)}</strong>
            <button type="button" class="line-link danger-link" data-action="remove">Sil</button>
          </div>
        </article>
      `
    )
    .join("");

  cartItemsRoot.querySelectorAll(".cart-item-row").forEach((row) => {
    const itemId = row.dataset.itemId;
    const item = totals.items.find((cartItem) => cartItem.id === itemId);
    if (!item) return;

    row.querySelector('[data-action="minus"]')?.addEventListener("click", () => {
      updateCartQuantity(item.id, item.quantity - 1);
      renderCart();
    });

    row.querySelector('[data-action="plus"]')?.addEventListener("click", () => {
      updateCartQuantity(item.id, item.quantity + 1);
      renderCart();
    });

    row.querySelector('[data-action="remove"]')?.addEventListener("click", () => {
      removeCartItem(item.id);
      showToast("Məhsul səbətdən silindi");
      renderCart();
    });
  });

  setupRipple(cartItemsRoot);
}

function renderQuickPicks() {
  quickPicksGrid.innerHTML = getProducts()
    .slice(0, 4)
    .map(
      (product) => `
        <article class="quick-card glow-surface" data-glow>
          <div class="quick-card-art ${product.artClass}">
            <span>${product.artText}</span>
          </div>
          <div class="quick-card-copy">
            <strong>${product.shortTitle}</strong>
            <span>${product.teaser}</span>
          </div>
          <div class="quick-card-row">
            <strong>${formatPrice(product.basePrice)}</strong>
            <button type="button" class="outline-button slim-button" data-product-id="${product.id}" data-ripple>
              Əlavə et
            </button>
          </div>
        </article>
      `
    )
    .join("");

  quickPicksGrid.querySelectorAll("[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      showToast("Məhsul səbətə əlavə olundu");
      renderCart();
    });
  });

  setupRipple(quickPicksGrid);
  setupGlow(quickPicksGrid);
}

clearCartButton?.addEventListener("click", () => {
  if (!readCart().length) return;
  clearCart();
  renderCart();
  showToast("Səbət təmizləndi");
});

setupBaseUi();
renderCart();
renderQuickPicks();
