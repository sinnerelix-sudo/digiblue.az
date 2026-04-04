const revealItems = document.querySelectorAll("[data-reveal]");
const rippleTargets = document.querySelectorAll("[data-ripple]");
const magneticTargets = document.querySelectorAll("[data-magnetic]");
const glowTargets = document.querySelectorAll("[data-glow]");
const productCards = document.querySelectorAll(".product-card");
const optionList = document.getElementById("detail-options");
const drawer = document.querySelector(".mobile-drawer");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const drawerOpenButton = document.querySelector("[data-drawer-open]");
const drawerCloseButtons = document.querySelectorAll("[data-drawer-close]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)");

const productData = {
  chatgpt: {
    badge: "Mövcuddur",
    title: "ChatGPT Plus (ortaq hesab)",
    subtitle: "7/24 təqdim edilir • sürətli aktivasiya • ani təhvil",
    price: "7 ₼",
    oldPrice: "10 ₼",
    note: "Ən çox seçilən paket",
    description:
      "AI alətləri üçün rahat görünən mockup detalı. Paket seçimi, qiymət və CTA düymələri çox aydın görünür.",
    artClass: "art-chatgpt",
    artText: "AI",
    options: [
      { label: "1 ay (endirimli)", price: "7 ₼", active: true },
      { label: "3 ay", price: "20 ₼" },
      { label: "6 ay", price: "38 ₼" },
      { label: "12 ay", price: "70 ₼" },
    ],
  },
  youtube: {
    badge: "Aktivdir",
    title: "YouTube Premium (şəxsi hesab)",
    subtitle: "Reklamsız izləmə • şəxsi giriş • sürətli təslim",
    price: "9 ₼",
    oldPrice: "12 ₼",
    note: "Musiqi + video paketi",
    description:
      "YouTube məhsulu üçün qırmızı vurğu istifadə olunur ki, kartlar bir-birindən rahat seçilsin və mağaza dinamik görünsün.",
    artClass: "art-youtube",
    artText: "▶",
    options: [
      { label: "1 ay", price: "9 ₼", active: true },
      { label: "2 ay", price: "16 ₼" },
      { label: "6 ay", price: "42 ₼" },
    ],
  },
  capcut: {
    badge: "Mövcuddur",
    title: "CapCut Pro (şəxsi hesab)",
    subtitle: "Video creatorlar üçün • stabil giriş • hazır istifadə",
    price: "8 ₼",
    oldPrice: "11 ₼",
    note: "Sürətli montaj paketi",
    description:
      "Video redaktə məhsulları üçün tünd kart və sarı CTA birlikdə çox premium görünür. Mockup daxilində bu balans yaxşı işləyir.",
    artClass: "art-capcut",
    artText: "CC",
    options: [
      { label: "1 ay", price: "8 ₼", active: true },
      { label: "3 ay", price: "21 ₼" },
      { label: "1 il", price: "56 ₼" },
    ],
  },
  canva: {
    badge: "Mövcuddur",
    title: "Canva Pro (ömürlük paket)",
    subtitle: "Dizayn üçün rahat seçim • bir dəfə ödəniş • istifadə hazır",
    price: "14 ₼",
    oldPrice: "18 ₼",
    note: "Dizayn proqramı",
    description:
      "Canva kartında açıq mavi ton istifadə olunur ki, grid daxilində vizual ritm yaransın və məhsullar monoton görünməsin.",
    artClass: "art-canva",
    artText: "Ca",
    options: [
      { label: "Ömürlük", price: "14 ₼", active: true },
      { label: "Komanda paketi", price: "25 ₼" },
    ],
  },
  netflix: {
    badge: "Aktivdir",
    title: "Netflix 4K (premium ekran)",
    subtitle: "Hazır hesab • yüksək keyfiyyət • rahat giriş",
    price: "10 ₼",
    oldPrice: "13 ₼",
    note: "Ən populyar media paketi",
    description:
      "Netflix üçün daha sakit, premium bir blok görünüşü verilir. Məqsəd kartların böyük mağazada keyfiyyətli qalmasıdır.",
    artClass: "art-netflix",
    artText: "N",
    options: [
      { label: "1 ay", price: "10 ₼", active: true },
      { label: "3 ay", price: "27 ₼" },
      { label: "6 ay", price: "50 ₼" },
    ],
  },
  "instagram-service": {
    badge: "Canlı",
    title: "Instagram xidməti (izlənmə və bəyənmə)",
    subtitle: "Story, reel, post boost • sürətli təhvil • panel tipi xidmət",
    price: "5 ₼",
    oldPrice: "7 ₼",
    note: "Start paketi",
    description:
      "Sosial media xidmətləri üçün məhsul gridində rəngli vurğu, detail hissədə isə daha çox seçim verilir. Bu, based.az axınına yaxındır.",
    artClass: "art-instagram",
    artText: "IG",
    options: [
      { label: "1K izlənmə", price: "5 ₼", active: true },
      { label: "5K izlənmə", price: "18 ₼" },
      { label: "10K izlənmə", price: "32 ₼" },
    ],
  },
  "instagram-account": {
    badge: "Hazırdır",
    title: "Instagram hesabı (aktiv profil)",
    subtitle: "İstifadəyə hazır • warm-up edilmiş • rahat təhvil",
    price: "16 ₼",
    oldPrice: "21 ₼",
    note: "Hazır hesab satışı",
    description:
      "Hesab satışı üçün kartların daha ciddi görünməsi yaxşı işləyir. Tünd art fonu və sarı qiymət blokları bu hissi gücləndirir.",
    artClass: "art-account",
    artText: "@",
    options: [
      { label: "Yeni profil", price: "16 ₼", active: true },
      { label: "Warm-up profil", price: "24 ₼" },
      { label: "Niş profil", price: "30 ₼" },
    ],
  },
  spotify: {
    badge: "Mövcuddur",
    title: "Spotify Family (1 aylıq paket)",
    subtitle: "Musiqi sevənlər üçün • sürətli qoşulma • sabit giriş",
    price: "6 ₼",
    oldPrice: "8 ₼",
    note: "Rahat və sərfəli seçim",
    description:
      "Spotify kartında yaşıl ton digər məhsullarla balans yaradır və ümumi mağaza görünüşünü daha canlı saxlayır.",
    artClass: "art-spotify",
    artText: "S",
    options: [
      { label: "1 ay", price: "6 ₼", active: true },
      { label: "3 ay", price: "15 ₼" },
      { label: "6 ay", price: "26 ₼" },
    ],
  },
};

function setupReveal() {
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

function setupRipple() {
  rippleTargets.forEach((target) => {
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

function setupMagnetic() {
  if (prefersReducedMotion.matches || !supportsHover.matches) return;

  magneticTargets.forEach((target) => {
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

function setupGlow() {
  if (!supportsHover.matches) return;

  glowTargets.forEach((target) => {
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

function renderDetail(key) {
  const product = productData[key];
  if (!product) return;

  document.getElementById("detail-badge").textContent = product.badge;
  document.getElementById("detail-title").textContent = product.title;
  document.getElementById("detail-subtitle").textContent = product.subtitle;
  document.getElementById("detail-price").textContent = product.price;
  document.getElementById("detail-old-price").textContent = product.oldPrice;
  document.getElementById("detail-note").textContent = product.note;
  document.getElementById("detail-description").textContent = product.description;

  const art = document.getElementById("detail-art");
  art.className = `detail-art ${product.artClass}`;
  art.innerHTML = `<span>${product.artText}</span>`;

  optionList.innerHTML = "";
  product.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = `option-pill${option.active ? " active" : ""}`;
    optionButton.innerHTML = `<span>${option.label}</span><span>${option.price}</span>`;
    optionButton.addEventListener("click", () => {
      optionList.querySelectorAll(".option-pill").forEach((button) => button.classList.remove("active"));
      optionButton.classList.add("active");
      document.getElementById("detail-price").textContent = option.price;
      document.getElementById("detail-note").textContent = index === 0 ? product.note : "Seçilmiş paket";
    });
    optionList.appendChild(optionButton);
  });
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
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  });
}

function setDrawer(open) {
  if (!drawer || !drawerBackdrop) return;
  drawer.classList.toggle("is-open", open);
  drawerBackdrop.classList.toggle("is-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("drawer-open", open);
}

function setupDrawer() {
  if (!drawerOpenButton) return;

  drawerOpenButton.addEventListener("click", () => setDrawer(true));
  drawerCloseButtons.forEach((button) => button.addEventListener("click", () => setDrawer(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setDrawer(false);
  });
}

setupReveal();
setupRipple();
setupMagnetic();
setupGlow();
setupProducts();
setupDrawer();
renderDetail("chatgpt");
