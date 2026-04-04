const CART_KEY = "nova-market-cart-v2";
const LAST_ORDER_KEY = "nova-market-last-order-v1";

const products = {
  chatgpt: {
    id: "chatgpt",
    badge: "Mövcuddur",
    title: "ChatGPT Plus (ortaq hesab)",
    shortTitle: "ChatGPT Plus",
    subtitle: "7/24 təqdim edilir • sürətli aktivasiya • ani təhvil",
    teaser: "Ortaq hesab • ani aktivasiya",
    basePrice: 7,
    oldPrice: 10,
    note: "Ən çox seçilən paket",
    description:
      "AI alətləri üçün rahat görünən mockup detalı. Paket seçimi, qiymət və CTA düymələri çox aydın görünür.",
    artClass: "art-chatgpt",
    artText: "AI",
    category: "AI alətləri",
    options: [
      { id: "1ay", label: "1 ay (endirimli)", price: 7, default: true },
      { id: "3ay", label: "3 ay", price: 20 },
      { id: "6ay", label: "6 ay", price: 38 },
      { id: "12ay", label: "12 ay", price: 70 },
    ],
  },
  youtube: {
    id: "youtube",
    badge: "Aktivdir",
    title: "YouTube Premium (şəxsi hesab)",
    shortTitle: "YouTube Premium",
    subtitle: "Reklamsız izləmə • şəxsi giriş • sürətli təslim",
    teaser: "Şəxsi hesab • limitsiz istifadə",
    basePrice: 9,
    oldPrice: 12,
    note: "Musiqi + video paketi",
    description:
      "YouTube məhsulu üçün qırmızı vurğu istifadə olunur ki, kartlar bir-birindən rahat seçilsin və mağaza dinamik görünsün.",
    artClass: "art-youtube",
    artText: "▶",
    category: "Premium hesablar",
    options: [
      { id: "1ay", label: "1 ay", price: 9, default: true },
      { id: "2ay", label: "2 ay", price: 16 },
      { id: "6ay", label: "6 ay", price: 42 },
    ],
  },
  capcut: {
    id: "capcut",
    badge: "Mövcuddur",
    title: "CapCut Pro (şəxsi hesab)",
    shortTitle: "CapCut Pro",
    subtitle: "Video creatorlar üçün • stabil giriş • hazır istifadə",
    teaser: "Şəxsi hesab • sürətli aktiv",
    basePrice: 8,
    oldPrice: 11,
    note: "Sürətli montaj paketi",
    description:
      "Video redaktə məhsulları üçün tünd kart və sarı CTA birlikdə çox premium görünür. Mockup daxilində bu balans yaxşı işləyir.",
    artClass: "art-capcut",
    artText: "CC",
    category: "Dizayn proqramları",
    options: [
      { id: "1ay", label: "1 ay", price: 8, default: true },
      { id: "3ay", label: "3 ay", price: 21 },
      { id: "1il", label: "1 il", price: 56 },
    ],
  },
  canva: {
    id: "canva",
    badge: "Mövcuddur",
    title: "Canva Pro (ömürlük paket)",
    shortTitle: "Canva Pro",
    subtitle: "Dizayn üçün rahat seçim • bir dəfə ödəniş • istifadə hazır",
    teaser: "Ömürlük paket • dizayn aləti",
    basePrice: 14,
    oldPrice: 18,
    note: "Dizayn proqramı",
    description:
      "Canva kartında açıq mavi ton istifadə olunur ki, grid daxilində vizual ritm yaransın və məhsullar monoton görünməsin.",
    artClass: "art-canva",
    artText: "Ca",
    category: "Dizayn proqramları",
    options: [
      { id: "omurluk", label: "Ömürlük", price: 14, default: true },
      { id: "komanda", label: "Komanda paketi", price: 25 },
    ],
  },
  netflix: {
    id: "netflix",
    badge: "Aktivdir",
    title: "Netflix 4K (premium ekran)",
    shortTitle: "Netflix 4K",
    subtitle: "Hazır hesab • yüksək keyfiyyət • rahat giriş",
    teaser: "Premium ekran • hazır giriş",
    basePrice: 10,
    oldPrice: 13,
    note: "Ən populyar media paketi",
    description:
      "Netflix üçün daha sakit, premium bir blok görünüşü verilir. Məqsəd kartların böyük mağazada keyfiyyətli qalmasıdır.",
    artClass: "art-netflix",
    artText: "N",
    category: "Premium hesablar",
    options: [
      { id: "1ay", label: "1 ay", price: 10, default: true },
      { id: "3ay", label: "3 ay", price: 27 },
      { id: "6ay", label: "6 ay", price: 50 },
    ],
  },
  "instagram-service": {
    id: "instagram-service",
    badge: "Canlı",
    title: "Instagram xidməti (izlənmə və bəyənmə)",
    shortTitle: "Instagram xidməti",
    subtitle: "Story, reel, post boost • sürətli təhvil • panel tipi xidmət",
    teaser: "İzlənmə, bəyənmə, story boost",
    basePrice: 5,
    oldPrice: 7,
    note: "Start paketi",
    description:
      "Sosial media xidmətləri üçün məhsul gridində rəngli vurğu, detail hissədə isə daha çox seçim verilir. Bu, based.az axınına yaxındır.",
    artClass: "art-instagram",
    artText: "IG",
    category: "Instagram xidməti",
    options: [
      { id: "1k", label: "1K izlənmə", price: 5, default: true },
      { id: "5k", label: "5K izlənmə", price: 18 },
      { id: "10k", label: "10K izlənmə", price: 32 },
    ],
  },
  "instagram-account": {
    id: "instagram-account",
    badge: "Hazırdır",
    title: "Instagram hesabı (aktiv profil)",
    shortTitle: "Instagram hesabı",
    subtitle: "İstifadəyə hazır • warm-up edilmiş • rahat təhvil",
    teaser: "Hazır profil • aktiv istifadə",
    basePrice: 16,
    oldPrice: 21,
    note: "Hazır hesab satışı",
    description:
      "Hesab satışı üçün kartların daha ciddi görünməsi yaxşı işləyir. Tünd art fonu və sarı qiymət blokları bu hissi gücləndirir.",
    artClass: "art-account",
    artText: "@",
    category: "Instagram xidməti",
    options: [
      { id: "yeni", label: "Yeni profil", price: 16, default: true },
      { id: "warmup", label: "Warm-up profil", price: 24 },
      { id: "nis", label: "Niş profil", price: 30 },
    ],
  },
  spotify: {
    id: "spotify",
    badge: "Mövcuddur",
    title: "Spotify Family (1 aylıq paket)",
    shortTitle: "Spotify Family",
    subtitle: "Musiqi sevənlər üçün • sürətli qoşulma • sabit giriş",
    teaser: "Musiqi paketi • sabit giriş",
    basePrice: 6,
    oldPrice: 8,
    note: "Rahat və sərfəli seçim",
    description:
      "Spotify kartında yaşıl ton digər məhsullarla balans yaradır və ümumi mağaza görünüşünü daha canlı saxlayır.",
    artClass: "art-spotify",
    artText: "S",
    category: "Premium hesablar",
    options: [
      { id: "1ay", label: "1 ay", price: 6, default: true },
      { id: "3ay", label: "3 ay", price: 15 },
      { id: "6ay", label: "6 ay", price: 26 },
    ],
  },
};

function safeParse(rawValue) {
  try {
    return JSON.parse(rawValue);
  } catch {
    return null;
  }
}

function getStorage() {
  if (typeof window === "undefined" || !window.localStorage) return null;
  return window.localStorage;
}

export function formatPrice(value) {
  return `${value} ₼`;
}

export function getProducts() {
  return Object.values(products);
}

export function getProduct(productId) {
  return products[productId] ?? null;
}

export function getDefaultOption(product) {
  return product.options.find((option) => option.default) ?? product.options[0];
}

export function getOption(product, optionId) {
  return product.options.find((option) => option.id === optionId) ?? getDefaultOption(product);
}

export function readCart() {
  const storage = getStorage();
  if (!storage) return [];
  const parsed = safeParse(storage.getItem(CART_KEY));
  if (!Array.isArray(parsed)) return [];
  return parsed.filter((item) => item && products[item.productId]);
}

export function saveCart(items) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("cart:updated", { detail: { items } }));
}

export function addToCart(productId, optionId, quantity = 1) {
  const product = getProduct(productId);
  if (!product) return readCart();

  const selectedOption = optionId ?? getDefaultOption(product).id;
  const nextItems = [...readCart()];
  const existingItem = nextItems.find(
    (item) => item.productId === productId && item.optionId === selectedOption
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    nextItems.push({
      id: `${productId}:${selectedOption}`,
      productId,
      optionId: selectedOption,
      quantity,
    });
  }

  saveCart(nextItems);
  return nextItems;
}

export function updateCartQuantity(itemId, quantity) {
  const nextItems = readCart()
    .map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity,
          }
        : item
    )
    .filter((item) => item.quantity > 0);

  saveCart(nextItems);
  return nextItems;
}

export function removeCartItem(itemId) {
  const nextItems = readCart().filter((item) => item.id !== itemId);
  saveCart(nextItems);
  return nextItems;
}

export function clearCart() {
  saveCart([]);
}

export function getCartDetails(items = readCart()) {
  return items.map((item) => {
    const product = getProduct(item.productId);
    const option = getOption(product, item.optionId);
    return {
      ...item,
      product,
      option,
      lineTotal: option.price * item.quantity,
    };
  });
}

export function getCartCount(items = readCart()) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartTotals(items = readCart()) {
  const cartDetails = getCartDetails(items);
  const subtotal = cartDetails.reduce((sum, item) => sum + item.lineTotal, 0);
  const serviceFee = cartDetails.length ? 1.5 : 0;
  const discount = subtotal >= 40 ? 2 : 0;
  return {
    items: cartDetails,
    subtotal,
    serviceFee,
    discount,
    total: subtotal + serviceFee - discount,
  };
}

export function saveLastOrder(order) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
}

export function readLastOrder() {
  const storage = getStorage();
  if (!storage) return null;
  return safeParse(storage.getItem(LAST_ORDER_KEY));
}

export function createOrder(customer) {
  const totals = getCartTotals();
  if (!totals.items.length) return null;

  const order = {
    id: `NM-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    customer,
    ...totals,
  };

  saveLastOrder(order);
  clearCart();
  return order;
}
