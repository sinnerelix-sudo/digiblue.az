import { createOrder, formatPrice, getCartTotals } from "./store.js";
import { setupBaseUi, showToast } from "./ui.js";

const form = document.getElementById("payment-form");
const itemsRoot = document.getElementById("payment-items");

function renderPaymentSummary() {
  const totals = getCartTotals();
  document.getElementById("payment-subtotal").textContent = formatPrice(totals.subtotal);
  document.getElementById("payment-service-fee").textContent = formatPrice(totals.serviceFee);
  document.getElementById("payment-discount").textContent = `-${formatPrice(totals.discount)}`;
  document.getElementById("payment-total").textContent = formatPrice(totals.total);

  if (!totals.items.length) {
    itemsRoot.innerHTML = `
      <div class="empty-inline-state">
        <strong>Səbət boşdur</strong>
        <p>Ödənişə keçmək üçün əvvəlcə məhsul əlavə et.</p>
        <a class="primary-button" href="./index.html#catalog">Məhsul seç</a>
      </div>
    `;
    return false;
  }

  itemsRoot.innerHTML = totals.items
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

  return true;
}

function setupMethodCards() {
  document.querySelectorAll(".method-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".method-card").forEach((item) => item.classList.remove("active"));
      card.classList.add("active");
    });
  });
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const hasItems = renderPaymentSummary();
  if (!hasItems) {
    showToast("Ödəniş üçün səbətə məhsul əlavə et");
    return;
  }

  const customer = {
    name: document.getElementById("customer-name").value.trim(),
    phone: document.getElementById("customer-phone").value.trim(),
    email: document.getElementById("customer-email").value.trim(),
    paymentMethod:
      document.querySelector(".method-card.active strong")?.textContent ?? "Bank kartı",
  };

  if (!customer.name || !customer.phone || !customer.email) {
    showToast("Zəhmət olmasa əsas məlumatları doldur");
    return;
  }

  createOrder(customer);
  window.location.href = "./success.html";
});

setupBaseUi();
setupMethodCards();
renderPaymentSummary();
