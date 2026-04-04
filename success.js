import { formatPrice, readLastOrder } from "./store.js";
import { setupBaseUi } from "./ui.js";

const order = readLastOrder();
const metaRoot = document.getElementById("success-order-meta");
const itemsRoot = document.getElementById("success-items");
const totalRoot = document.getElementById("success-total");

function renderSuccess() {
  if (!order) {
    metaRoot.innerHTML = `
      <div class="empty-inline-state">
        <strong>Son sifariş tapılmadı</strong>
        <p>Yeni axını görmək üçün ödəniş səhifəsindən test sifarişi yarat.</p>
      </div>
    `;
    itemsRoot.innerHTML = "";
    totalRoot.textContent = formatPrice(0);
    return;
  }

  metaRoot.innerHTML = `
    <div class="success-chip-list">
      <span>Sifariş ID: ${order.id}</span>
      <span>${order.customer.name}</span>
      <span>${order.customer.paymentMethod}</span>
    </div>
  `;

  itemsRoot.innerHTML = order.items
    .map(
      (item) => `
        <article class="payment-line">
          <div class="payment-line-copy">
            <strong>${item.product.shortTitle}</strong>
            <span>${item.option.label} • ${item.quantity} ədəd</span>
          </div>
          <strong>${formatPrice(item.lineTotal)}</strong>
        </article>
      `
    )
    .join("");

  totalRoot.textContent = formatPrice(order.total);
}

setupBaseUi();
renderSuccess();
