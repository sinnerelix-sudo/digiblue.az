import { formatPrice, getCartCount, getCartTotals } from "./store.js";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)");

export function setupReveal(root = document) {
  const revealItems = root.querySelectorAll("[data-reveal]");
  if (prefersReducedMotion.matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

export function setupRipple(root = document) {
  root.querySelectorAll("[data-ripple]").forEach((target) => {
    target.addEventListener("pointerdown", (event) => {
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      target.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    });
  });
}

export function setupMagnetic(root = document) {
  if (prefersReducedMotion.matches || !supportsHover.matches) return;

  root.querySelectorAll("[data-magnetic]").forEach((target) => {
    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      target.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
    });

    target.addEventListener("pointerleave", () => {
      target.style.transform = "";
    });
  });
}

export function setupGlow(root = document) {
  if (!supportsHover.matches) return;

  root.querySelectorAll("[data-glow]").forEach((target) => {
    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      target.style.setProperty("--glow-x", `${x}%`);
      target.style.setProperty("--glow-y", `${y}%`);
      target.classList.add("is-glow");
    });

    target.addEventListener("pointerleave", () => {
      target.classList.remove("is-glow");
    });
  });
}

export function setupDrawer(root = document) {
  const drawer = root.querySelector(".mobile-drawer");
  const drawerBackdrop = root.querySelector(".drawer-backdrop");
  const openButton = root.querySelector("[data-drawer-open]");
  const closeButtons = root.querySelectorAll("[data-drawer-close]");

  if (!drawer || !drawerBackdrop || !openButton) return;

  function setDrawer(open) {
    drawer.classList.toggle("is-open", open);
    drawerBackdrop.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("drawer-open", open);
  }

  openButton.addEventListener("click", () => setDrawer(true));
  closeButtons.forEach((button) => button.addEventListener("click", () => setDrawer(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setDrawer(false);
  });
}

export function syncCartUi() {
  const totals = getCartTotals();
  const count = getCartCount();

  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(count);
    node.classList.toggle("is-empty", count === 0);
  });

  document.querySelectorAll("[data-cart-total]").forEach((node) => {
    node.textContent = formatPrice(totals.total);
  });
}

export function setupCartUiSync() {
  syncCartUi();
  window.addEventListener("cart:updated", syncCartUi);
}

export function showToast(message) {
  let stack = document.querySelector(".toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.textContent = message;
  stack.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 260);
  }, 2200);
}

export function setupBaseUi(root = document) {
  setupReveal(root);
  setupRipple(root);
  setupMagnetic(root);
  setupGlow(root);
  setupDrawer(root);
  setupCartUiSync();
}
