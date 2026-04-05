import {
  addToCart,
  formatPrice,
  getDefaultOption,
  getProduct,
  getProducts,
} from "./store.js";
import { setupBaseUi, setupGlow, setupRipple, showToast } from "./ui.js";

const RECENT_KEY = "nova-market-recent-v1";

const productGrid = document.getElementById("product-grid");
const productCards = Array.from(document.querySelectorAll(".product-card"));
const optionList = document.getElementById("detail-options");
const addToCartButton = document.getElementById("add-to-cart-button");
const buyNowButton = document.getElementById("buy-now-button");
const searchInputs = Array.from(document.querySelectorAll("[data-search-input]"));
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const sortSelect = document.getElementById("catalog-sort");
const clearCatalogStateButton = document.getElementById("clear-catalog-state");
const catalogEmptyState = document.getElementById("catalog-empty-state");
const catalogResultCount = document.getElementById("catalog-result-count");
const catalogResultText = document.getElementById("catalog-result-text");
const recentStrip = document.getElementById("recent-strip");
const recentTrack = document.getElementById("recent-track");

const state = {
  selectedProductId: "chatgpt",
  selectedOptionId: getDefaultOption(getProduct("chatgpt")).id,
  searchQuery: "",
  activeFilter: "all",
  sort: "featured",
};

const productCardMeta = productCards.map((card, index) => ({
  card,
  order: index,
  productId: card.dataset.product,
}));

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getSafeStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function readRecentViews() {
  const storage = getSafeStorage();
  if (!storage) return [];

  try {
    const parsed = JSON.parse(storage.getItem(RECENT_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRecentView(productId) {
  const storage = getSafeStorage();
  if (!storage) return;

  const nextIds = [productId, ...readRecentViews().filter((id) => id !== productId)].slice(0, 6);
  storage.setItem(RECENT_KEY, JSON.stringify(nextIds));
}

function getFilterLabel(filterValue) {
  return (
    filterButtons.find((button) => button.dataset.filter === filterValue)?.textContent?.trim() ??
    "Hamisi"
  );
}

function getProductGroup(product) {
  if (!product) return "all";
  if (product.id === "chatgpt") return "ai";
  if (product.id === "capcut" || product.id === "canva") return "design";
  if (product.id === "instagram-service" || product.id === "instagram-account") return "instagram";
  if (product.id === "youtube" || product.id === "netflix" || product.id === "spotify") {
    return "premium";
  }
  return "all";
}

function isFastDeliveryProduct(product) {
  return normalizeText(
    `${product.subtitle} ${product.note} ${product.teaser} ${product.description}`
  ).match(/ani|suretli|hazir|aktiv/) !== null;
}

function matchesFilter(product, filterValue) {
  if (filterValue === "all") return true;
  if (filterValue === "fast") return isFastDeliveryProduct(product);
  return getProductGroup(product) === filterValue;
}

function getSearchBlob(product) {
  return normalizeText(
    [
      product.title,
      product.shortTitle,
      product.subtitle,
      product.teaser,
      product.note,
      product.description,
      product.category,
      ...product.options.map((option) => option.label),
    ].join(" ")
  );
}

function syncSearchInputs(nextValue) {
  searchInputs.forEach((input) => {
    if (input.value !== nextValue) input.value = nextValue;
  });
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.activeFilter);
  });
}

function renderDetail(productId) {
  const product = getProduct(productId);
  if (!product) return;

  state.selectedProductId = productId;
  state.selectedOptionId = getDefaultOption(product).id;

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
      state.selectedOptionId = option.id;
      document.getElementById("detail-price").textContent = formatPrice(option.price);
      document.getElementById("detail-note").textContent =
        index === 0 ? product.note : "Secilmis paket";
    });
    optionList.appendChild(optionButton);
  });

  setupRipple(optionList);
}

function setActiveProductCard(productId) {
  productCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.product === productId);
  });
}

function renderRecentViews() {
  if (!recentStrip || !recentTrack) return;

  const recentProducts = readRecentViews()
    .filter((id) => id !== state.selectedProductId)
    .map((id) => getProduct(id))
    .filter(Boolean)
    .slice(0, 5);

  recentStrip.hidden = recentProducts.length === 0;
  recentTrack.innerHTML = recentProducts
    .map(
      (product) => `
        <button class="recent-card glow-surface" type="button" data-glow data-ripple data-recent-product="${product.id}">
          <div class="recent-card-art ${product.artClass}">
            <span>${product.artText}</span>
          </div>
          <div class="recent-card-copy">
            <strong>${product.shortTitle}</strong>
            <span>${product.teaser}</span>
          </div>
          <div class="recent-card-price">
            <strong>${formatPrice(product.basePrice)}</strong>
            <span>Tekrar bax</span>
          </div>
        </button>
      `
    )
    .join("");

  recentTrack.querySelectorAll("[data-recent-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.recentProduct;
      selectProduct(productId, { scrollToDetail: true, remember: true });
    });
  });

  setupRipple(recentTrack);
  setupGlow(recentTrack);
}

function describeCatalogState(visibleCount) {
  const hasQuery = state.searchQuery.trim().length > 0;
  const hasFilter = state.activeFilter !== "all";

  if (!visibleCount) {
    return "Axtaris ve filtere gore netice yoxdur.";
  }

  if (hasQuery && hasFilter) {
    return `"${state.searchQuery.trim()}" ve ${getFilterLabel(state.activeFilter)} ucun ${visibleCount} netice.`;
  }

  if (hasQuery) {
    return `"${state.searchQuery.trim()}" ucun ${visibleCount} netice.`;
  }

  if (hasFilter) {
    return `${getFilterLabel(state.activeFilter)} secimi aktivdir.`;
  }

  if (state.sort !== "featured") {
    return `${visibleCount} mehsul siralanmis formada gosterilir.`;
  }

  return "Hamisi bir ekranda rahat gorunur.";
}

function sortCards(cardsToSort) {
  const nextCards = [...cardsToSort];

  nextCards.sort((left, right) => {
    const leftProduct = getProduct(left.productId);
    const rightProduct = getProduct(right.productId);

    if (state.sort === "price-asc") return leftProduct.basePrice - rightProduct.basePrice;
    if (state.sort === "price-desc") return rightProduct.basePrice - leftProduct.basePrice;
    if (state.sort === "name") return leftProduct.shortTitle.localeCompare(rightProduct.shortTitle);
    return left.order - right.order;
  });

  nextCards.forEach(({ card }) => productGrid.appendChild(card));
}

function applyCatalogState() {
  const query = normalizeText(state.searchQuery);
  const visibleCards = [];

  productCardMeta.forEach((meta) => {
    const product = getProduct(meta.productId);
    const matchesSearch = !query || getSearchBlob(product).includes(query);
    const matchesCategory = matchesFilter(product, state.activeFilter);
    const isVisible = matchesSearch && matchesCategory;

    meta.card.hidden = !isVisible;
    if (isVisible) visibleCards.push(meta);
  });

  sortCards(productCardMeta);

  if (visibleCards.length && !visibleCards.some((meta) => meta.productId === state.selectedProductId)) {
    selectProduct(visibleCards[0].productId, { scrollToDetail: false, remember: false });
  }

  catalogResultCount.textContent = `${visibleCards.length} mehsul`;
  catalogResultText.textContent = describeCatalogState(visibleCards.length);
  catalogEmptyState.hidden = visibleCards.length > 0;

  clearCatalogStateButton.hidden =
    state.activeFilter === "all" && !state.searchQuery.trim() && state.sort === "featured";
}

function selectProduct(productId, { scrollToDetail = false, remember = true } = {}) {
  renderDetail(productId);
  setActiveProductCard(productId);

  if (remember) {
    saveRecentView(productId);
    renderRecentViews();
  }

  if (scrollToDetail && window.innerWidth < 720) {
    document.getElementById("detail").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function addSelectedProductToCart() {
  addToCart(state.selectedProductId, state.selectedOptionId, 1);
  showToast("Mehsul sebete elave olundu");
}

function setupSearchInputs() {
  searchInputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      state.searchQuery = event.target.value;
      syncSearchInputs(state.searchQuery);
      applyCatalogState();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      document.getElementById("catalog").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

function setupFilterButtons() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFilter = button.dataset.filter ?? "all";
      updateFilterButtons();
      applyCatalogState();

      if (window.innerWidth < 720) {
        document.getElementById("catalog").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function setupSortControl() {
  sortSelect?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    applyCatalogState();
  });
}

function setupClearCatalogState() {
  clearCatalogStateButton?.addEventListener("click", () => {
    state.searchQuery = "";
    state.activeFilter = "all";
    state.sort = "featured";
    syncSearchInputs("");
    if (sortSelect) sortSelect.value = "featured";
    updateFilterButtons();
    applyCatalogState();
  });
}

function setupProducts() {
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      selectProduct(card.dataset.product, { scrollToDetail: true, remember: true });
    });
  });
}

function setupPurchaseActions() {
  addToCartButton?.addEventListener("click", () => {
    addSelectedProductToCart();
  });

  buyNowButton?.addEventListener("click", () => {
    addSelectedProductToCart();
    window.location.href = "./payment.html";
  });
}

setupBaseUi();
setupProducts();
setupPurchaseActions();
setupSearchInputs();
setupFilterButtons();
setupSortControl();
setupClearCatalogState();
renderDetail(state.selectedProductId);
setActiveProductCard(state.selectedProductId);
saveRecentView(state.selectedProductId);
renderRecentViews();
updateFilterButtons();
applyCatalogState();
