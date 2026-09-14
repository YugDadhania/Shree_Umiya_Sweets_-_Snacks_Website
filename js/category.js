/**
 * Shree Umiya Sweets and Snacks - Dedicated Subcategory Page Controller
 */

const SUBCATEGORY_METADATA = {
  "Luxury Sweets": {
    slug: "luxury-sweets",
    gujarati: "લક્ઝરી મિઠાઈ · Royal Silver Leaf & Gold Infused Delicacies",
    desc: "Exquisite handmade confectionery crafted from grade-A cashews, Iranian pistachios, and saffron, adorned with pure edible silver vark.",
    productIds: ["Baklava", "Kunafa-Balls", "Rose-Balls", "Biscoff-Laddu"]
  },
  "Dry Fruit Sweets": {
    slug: "dry-fruit-sweets",
    gujarati: "ડ્રાયફ્રૂટ્સ મિઠાઈ · Nut-Dense Handcrafted Sweets",
    desc: "Rich cashew fudges, almond delights, and pistachio rolls packed with premium dry fruits roasted in pure desi cow ghee.",
    productIds: ["Kaju-katli", "Pista-Roll", "Dry-Fruit pan", "Anjeer-Diamond-Patra"]
  },
  "Ghee Sweets": {
    slug: "ghee-sweets",
    gujarati: "શુદ્ધ દેશી ઘીની મિઠાઈ · 100% Pure Amul Cow Desi Ghee",
    desc: "Slow-roasted Kathiyawadi pedas, besan laddus, and golden pearls slow-cooked to aromatic perfection in 100% pure cow desi ghee.",
    productIds: ["motichur-laddu", "besan-laddu", "Ghee Boondi", "Surati Pista Ghari"]
  },
  "Bengali Sweets": {
    slug: "bengali-sweets",
    gujarati: "બંગાળી સ્પેશિયલ મિઠાઈ · Fresh Chenna & Clotted Cream Delights",
    desc: "Delicate spongy chenna rasgullas, saffron malai sandwiches, and velvety gulab jamuns prepared fresh every morning in Surat.",
    productIds: ["rasgulla", "malai-sandwich", "Rajbhog"]
  },
  "Khoya / Mawa Sweets": {
    slug: "khoya-mawa-sweets",
    gujarati: "માવા પેંડા અને મિઠાઈ · Pure Milk Solids Confectionery",
    desc: "Traditional rich mawa pedas, slow-caramelized thabdi, and succulent gulab jamuns made from 100% whole buffalo milk solids.",
    productIds: ["kesar-penda", "thabdi-penda", "Pista-Penda","Milk Cake","gulab-jamun"]
  },
  "Dairy Sweets": {
    slug: "dairy-sweets",
    gujarati: "ડેરી મિઠાઈ · Fresh Milk, Chenna & Saffron Sweets",
    desc: "Wholesome milk-based delicacies prepared daily using farm-fresh milk, fragrant cardamom, and Kashmiri saffron.",
    productIds: ["Shrikhand", "Angoor Rabdi", "Ras Malai", "Mango Matho"]
  },
  "Gujarati Sweets": {
    slug: "gujarati-sweets",
    gujarati: "ગુજરાતી પારંપરિક મિઠાઈ · Heritage Recipes Since Generations",
    desc: "Surat and Saurashtra's authentic heritage recipes including Thabdi Penda, Motichur Laddu, Besan Laddu, and winter Adadiya Pak.",
    productIds: ["thabdi-penda", "Mohanthal", "Magaj", "adadiya-pak", ""]
  },
  "Marwadi sweets": {
    slug: "marwadi-sweets",
    gujarati: "મારવાડી મિઠાઈ · Royal Marwar Desi Ghee Classics",
    desc: "Rich, aromatic laddus, roasted gram flour delights, and celebratory mawa pedas cooked according to royal Marwari traditions.",
    productIds: ["Malai Ghevar", "Gujiya", "Balushai", ""]
  },
  "Sugar Free Sweets": {
    slug: "sugar-free-sweets",
    gujarati: "સુગર ફ્રી મિઠાઈ · Natural Sweetness of Cashews & Dates",
    desc: "Health-conscious pure dry fruit confectionery crafted with natural nuts, free from added refined cane sugar.",
    productIds: ["Dry-Fruit Khajur chikki (Sugar Free)", "Dry-Fruit anjeer chikki (Sugar Free)"]
  },
  "Winter Special": {
    slug: "winter-special",
    gujarati: "શિયાળુ સ્પેશિયલ વસાણા · Authentic Ayurvedic Winter Energy",
    desc: "Surat's iconic winter Ayurvedic health mithai crafted with roasted urad dal, pure cow ghee, edible gum (gond), and 32 warming herbs.",
    productIds: ["adadiya-pak", "Salam Pax","Gajar halwa"]
  },
  "Festival Favourites": {
    slug: "festival-favourites",
    gujarati: "તહેવાર સ્પેશિયલ મિઠાઈ · Auspicious Festive Celebration Boxes",
    desc: "The most cherished festive sweets for Diwali, Raksha Bandhan, Ganesh Utsav, and weddings across Surat.",
    productIds: ["Modak", "Gujiya_fest", "Surati Pista Ghari_fest", "Kaju-katli_fest", ""]
  },
  "Dryfruit Hampers": {
    slug: "dryfruit-hampers",
    gujarati: "રોયલ ડ્રાયફ્રૂટ્સ હેમ્પર્સ · Royal Nut Confectionery & Gift Boxes",
    desc: "Exquisite handcrafted wooden celebration boxes, imperial 4-in-1 dry fruit platters, and royal festive gift packs filled with grade-A nuts and pure desi cow ghee delights.",
    productIds: ["dryfruits-royal-box", "hamper-shahi-dryfruits", "hamper-royal-umiya", "hamper-wedding-special"]
  },
  "Chocolate Hampers": {
    slug: "chocolate-hampers",
    gujarati: "ચોકલેટ અને કોલ્ડ કોકો · Artisanal Truffles & Thick Cocoa",
    desc: "Surat's legendary velvety Cold Cocoa shake and artisanal handcrafted Belgian chocolate truffle gift boxes.",
    productIds: ["chocolates-cold-cocoa", "chocolates-artisan-hamper", "hamper-royal-chocolate"]
  }
};

const CATEGORY_METADATA = {
  "hampers": {
    name: "Hampers",
    gujarati: "રોયલ ઉમિયા ગિફ્ટ હેમ્પર્સ · Royal Festive Celebration Boxes",
    desc: "Exquisite handcrafted festive gift boxes, celebration mithai hampers, and wedding gift packs packed with pure love and royal elegance."
  },
  "dryfruit-hampers": {
    name: "Dryfruit Hampers",
    gujarati: "રોયલ ડ્રાયફ્રૂટ્સ હેમ્પર્સ · Royal Nut Confectionery & Gift Boxes",
    desc: "Exquisite handcrafted wooden celebration boxes, imperial 4-in-1 dry fruit platters, and royal festive gift packs filled with grade-A nuts and pure desi cow ghee delights."
  },
  "namkeens": {
    name: "Namkeens",
    gujarati: "સુરતી સ્વાદિષ્ટ નમકીન અને ફરસાણ · Authentic Surati Farsan",
    desc: "Authentic Surati Bhavnagari Gathiya, crunchy Nylon Sev, spicy Ratlami mixture, and teatime farsan made with pure groundnut oil."
  },
  "live-snacks": {
    name: "Live Snacks",
    gujarati: "ગરમાગરમ લાઈવ નાસ્તા · Freshly Prepared Hot Snacks",
    desc: "Crispy Desi Ghee Jalebi, cotton-soft Surati Nylon Khaman, and flaky Khasta Samosas prepared live and served piping hot."
  },
  "dairy": {
    name: "Dairy Products",
    gujarati: "તાજી ડેરી વાનગીઓ · Pure Milk & Yogurt Delicacies",
    desc: "Traditional Kesar Pista Shrikhand (Matho), slow-simmered rich Gujarati Basundi, and thick hand-churned Malai Lassi."
  },
  "bakery": {
    name: "Bakery Products",
    gujarati: "સુરતી બેકરી વાનગીઓ · Heritage Baked Delights",
    desc: "Surat's historical melt-in-mouth Butter Nankhatai shortbread and multi-layered crispy Maska Khari tea-time puffs."
  },
  "chocolates": {
    name: "Chocolates Hampers",
    gujarati: "ચોકલેટ અને કોલ્ડ કોકો · Artisanal Truffles & Thick Cocoa",
    desc: "Surat's legendary velvety Cold Cocoa shake and artisanal handcrafted Belgian chocolate truffle gift boxes."
  },
  "dry-fruits": {
    name: "Dry Fruits",
    gujarati: "પ્રીમિયમ ડ્રાયફ્રૂટ્સ · Grade-A Nut Confections & Roasted Nuts",
    desc: "Imperial 4-in-1 Dry Fruit Gift Boxes and slow-roasted jumbo cashews gently toasted in desi cow ghee with Himalayan pink salt."
  }
};

class CategoryPageController {
  constructor() {
    this.category = document.body.dataset.category || "sweets";
    this.subcategory = document.body.dataset.subcategory || (this.category === "sweets" ? this.detectSubcategoryFromPath() : "");
    this.activeSort = "popular";
    this.selectedProductWeights = {};
    this.init();
  }

  getBasePrefix() {
    if (document.body.dataset.pageDepth === "1") {
      return "../";
    }
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    if (pathSegments.length <= 1) return "../";
    return "../../";
  }

  detectSubcategoryFromPath() {
    const path = window.location.pathname.toLowerCase();
    for (const [name, meta] of Object.entries(SUBCATEGORY_METADATA)) {
      if (path.includes(meta.slug)) return name;
    }
    return "Luxury Sweets";
  }

  init() {
    this.renderHeaderAndBreadcrumb();
    this.renderProducts();
    this.initSorting();
    this.initNavbarCategoryDropdowns();
    this.initMobileAccordion();
    this.initMobileDrawer();
    this.initQuickViewModal();
  }

  renderHeaderAndBreadcrumb() {
    let title = this.subcategory || "Delights";
    let gujarati = "શ્રેષ્ઠ ભારતીય મિઠાઈ · Authentic Indian Delights";
    let desc = "Handcrafted daily in pure desi cow ghee with traditional recipes passed down through generations.";

    if (this.subcategory && SUBCATEGORY_METADATA[this.subcategory]) {
      const subMeta = SUBCATEGORY_METADATA[this.subcategory];
      title = this.subcategory;
      gujarati = subMeta.gujarati;
      desc = subMeta.desc;
    } else if (this.category && CATEGORY_METADATA[this.category]) {
      const catMeta = CATEGORY_METADATA[this.category];
      title = catMeta.name;
      gujarati = catMeta.gujarati;
      desc = catMeta.desc;
    }

    const titleEl = document.getElementById("subcatPageTitle");
    if (titleEl) titleEl.textContent = title;

    const gujEl = document.getElementById("subcatGujaratiTitle");
    if (gujEl) gujEl.textContent = gujarati;

    const descEl = document.getElementById("subcatPageDesc");
    if (descEl) descEl.textContent = desc;

    const breadcrumbEl = document.getElementById("breadcrumbCurrent");
    if (breadcrumbEl) breadcrumbEl.textContent = title;
  }

  renderProducts() {
    const grid = document.getElementById("productsGrid");
    const countBadge = document.getElementById("subcatProductCount");
    if (!grid) return;

    const basePrefix = this.getBasePrefix();
    let list = [];

    const meta = this.subcategory ? SUBCATEGORY_METADATA[this.subcategory] : null;
    if (meta && meta.productIds && meta.productIds.length > 0) {
      list = PRODUCTS_DATA.filter(p => meta.productIds.includes(p.id));
    } else if (this.category) {
      list = PRODUCTS_DATA.filter(p => p.category === this.category);
    } else {
      list = PRODUCTS_DATA;
    }

    if (this.activeSort === "price-asc") {
      list.sort((a, b) => a.weightOptions[0].price - b.weightOptions[0].price);
    } else if (this.activeSort === "price-desc") {
      list.sort((a, b) => b.weightOptions[0].price - a.weightOptions[0].price);
    } else if (this.activeSort === "ghee-specials") {
      list.sort((a, b) => (b.badge.includes("Ghee") ? 1 : 0) - (a.badge.includes("Ghee") ? 1 : 0));
    } else {
      list.sort((a, b) => (b.reviewsCount * b.rating) - (a.reviewsCount * a.rating));
    }

    if (countBadge) {
      countBadge.textContent = `${list.length} Delights Available`;
    }

    grid.innerHTML = list.map(item => {
      const selectedIndex = this.selectedProductWeights[item.id] || 0;
      const currentWeight = item.weightOptions[selectedIndex] || item.weightOptions[0];

      const imgPath = item.image.startsWith("http") || item.image.startsWith("/")
        ? item.image 
        : `${basePrefix}${item.image}`;

      return `
        <article class="product-card" id="product-card-${item.id}">
          <div class="product-image-container" onclick="window.openQuickView('${item.id}')">
            <span class="veg-badge" title="100% Pure Vegetarian">
              <span class="veg-dot"></span>
            </span>
            ${item.badge ? `<span class="product-tag-badge badge-${item.badgeType || 'gold'}">${item.badge}</span>` : ''}
            <img src="${imgPath}" alt="${item.name}" class="product-image" loading="lazy" onerror="this.src='${basePrefix}Sweets_images/UMIYA_LOGO_page-0001-removebg-preview (1).png'">
            <button class="quick-view-overlay-btn" onclick="event.stopPropagation(); window.openQuickView('${item.id}')" title="Quick View">
              <i class="fas fa-eye"></i> Quick View
            </button>
          </div>

          <div class="product-content">
            <div class="product-rating-row">
              <span class="star-rating"><i class="fas fa-star"></i> ${item.rating}</span>
              <span class="reviews-count">(${item.reviewsCount} reviews)</span>
              <span class="category-pill">${item.categoryLabel}</span>
            </div>

            <h3 class="product-title" onclick="window.openQuickView('${item.id}')">${item.name}</h3>
            <p class="product-gujarati-title">${item.gujaratiName}</p>
            <p class="product-description">${item.description}</p>

            <div class="weight-selector-row">
              <label class="weight-label">Select Pack:</label>
              <div class="weight-pills">
                ${item.weightOptions.map((opt, idx) => `
                  <button type="button" 
                          class="weight-pill ${idx === selectedIndex ? 'active' : ''}" 
                          onclick="window.categoryApp.selectWeight('${item.id}', ${idx})">
                    ${opt.label}
                  </button>
                `).join("")}
              </div>
            </div>

            <div class="product-card-footer">
              <div class="product-price-box">
                <span class="currency">₹</span>
                <span class="price-value" id="price-display-${item.id}">${currentWeight.price}</span>
                <span class="unit-text">(${currentWeight.label})</span>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  selectWeight(productId, weightIndex) {
    this.selectedProductWeights[productId] = weightIndex;
    const product = getProductById(productId);
    if (!product) return;

    const opt = product.weightOptions[weightIndex];
    if (!opt) return;

    const priceEl = document.getElementById(`price-display-${productId}`);
    if (priceEl) priceEl.textContent = opt.price;

    const card = document.getElementById(`product-card-${productId}`);
    if (card) {
      card.querySelectorAll(".weight-pill").forEach((p, idx) => {
        p.classList.toggle("active", idx === weightIndex);
      });
      const unitText = card.querySelector(".unit-text");
      if (unitText) unitText.textContent = `(${opt.label})`;
    }
  }



  orderOnWhatsApp(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const weightIndex = this.selectedProductWeights[productId] || 0;
    const opt = product.weightOptions[weightIndex] || product.weightOptions[0];

    const phoneNumber = "917878162112";
    const text = encodeURIComponent(
      `*Shree Umiya Sweets and Snacks - Order Inquiry*\n\n` +
      `Hello! I would like to order from the *${this.subcategory}* section:\n` +
      `• *Item:* ${product.name} (${product.gujaratiName})\n` +
      `• *Pack Size:* ${opt.label}\n` +
      `• *Price:* ₹${opt.price}\n\n` +
      `Please confirm availability and delivery across Surat. Thank you!`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  }

  initSorting() {
    const sortSelect = document.getElementById("productSortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.activeSort = e.target.value;
        this.renderProducts();
      });
    }
  }

  initNavbarCategoryDropdowns() {
    const dropdownItems = document.querySelectorAll(".nav-menu-item.has-dropdown");

    const positionMobileDropdown = (item) => {
      if (window.innerWidth >= 768) {
        const panel = item.querySelector(".category-dropdown-panel");
        if (panel) panel.style.left = "";
        return;
      }
      const toggleBtn = item.querySelector(".dropdown-toggle-btn");
      const panel = item.querySelector(".category-dropdown-panel");
      if (!toggleBtn || !panel) return;

      const btnRect = toggleBtn.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const panelWidth = Math.min(screenWidth * 0.9, 320);

      let left = btnRect.left;
      const maxLeft = Math.max(8, screenWidth - panelWidth - 8);
      if (left > maxLeft) {
        left = maxLeft;
      }
      if (left < 8) {
        left = 8;
      }

      panel.style.left = `${Math.round(left)}px`;
    };

    const closeAllDropdowns = () => {
      dropdownItems.forEach(item => {
        item.classList.remove("open");
        const btn = item.querySelector(".dropdown-toggle-btn");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    };

    dropdownItems.forEach(item => {
      const toggleBtn = item.querySelector(".dropdown-toggle-btn");
      if (!toggleBtn) return;

      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = item.classList.contains("open");

        dropdownItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("open");
            const otherBtn = otherItem.querySelector(".dropdown-toggle-btn");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        if (isOpen) {
          item.classList.remove("open");
          toggleBtn.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("open");
          toggleBtn.setAttribute("aria-expanded", "true");
          positionMobileDropdown(item);
        }
      });
    });

    window.addEventListener("resize", () => {
      const openItem = document.querySelector(".nav-menu-item.has-dropdown.open");
      if (openItem) positionMobileDropdown(openItem);
    }, { passive: true });

    const navMenuList = document.querySelector(".nav-menu-list");
    if (navMenuList) {
      navMenuList.addEventListener("scroll", () => {
        const openItem = document.querySelector(".nav-menu-item.has-dropdown.open");
        if (openItem && window.innerWidth < 768) {
          positionMobileDropdown(openItem);
        }
      }, { passive: true });
    }

    // Close on click outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".has-dropdown")) {
        closeAllDropdowns();
      }
    });

    // Escape closes dropdowns
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllDropdowns();
      }
    });
  }

  initMobileAccordion() {
    // Handled centrally in js/header.js to avoid duplicate event conflicts
  }

  initMobileDrawer() {
    // Handled centrally in js/header.js to avoid duplicate event conflicts
  }

  openMobileDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("mobileDrawerOverlay");
    if (drawer && overlay) {
      drawer.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("modal-open");
    }
  }

  closeMobileDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("mobileDrawerOverlay");
    if (drawer && overlay) {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  }

  initQuickViewModal() {
    const modal = document.getElementById("quickViewModal");
    const overlay = document.getElementById("quickViewOverlay");
    const closeBtn = document.getElementById("closeQuickViewBtn");

    if (closeBtn) closeBtn.addEventListener("click", () => this.closeQuickView());
    if (overlay) overlay.addEventListener("click", () => this.closeQuickView());
  }

  openQuickView(productId) {
    const product = getProductById(productId);
    if (!product) return;

    this.currentQuickViewProduct = product;
    this.currentQuickViewWeightIndex = this.selectedProductWeights[productId] || 0;

    const modal = document.getElementById("quickViewModal");
    const overlay = document.getElementById("quickViewOverlay");
    const body = document.getElementById("quickViewModalBody") || document.getElementById("quickViewBody");

    const basePrefix = this.getBasePrefix();
    const imgPath = product.image.startsWith("http") || product.image.startsWith("/")
      ? product.image 
      : `${basePrefix}${product.image}`;

    const opt = product.weightOptions[this.currentQuickViewWeightIndex];

    body.innerHTML = `
      <div class="quick-view-grid">
        <div class="quick-view-media">
          <img src="${imgPath}" alt="${product.name}" class="quick-view-img" onerror="this.src='${basePrefix}Sweets_images/UMIYA_LOGO_page-0001-removebg-preview (1).png'">
          ${product.badge ? `<span class="product-tag-badge badge-${product.badgeType || 'gold'}">${product.badge}</span>` : ''}
        </div>
        <div class="quick-view-info">
          <div class="quick-view-rating-row">
            <span class="star-rating"><i class="fas fa-star"></i> ${product.rating}</span>
            <span class="reviews-count">(${product.reviewsCount} customer reviews)</span>
          </div>
          <h2 class="quick-view-title">${product.name}</h2>
          <p class="quick-view-gujarati">${product.gujaratiName}</p>
          <p class="quick-view-desc">${product.description}</p>
          <div class="quick-view-meta-box">
            <p><strong>Ingredients:</strong> ${product.ingredients}</p>
            <p><strong>Shelf Life:</strong> ${product.shelfLife}</p>
          </div>
          <div class="weight-selector-row" style="margin: 16px 0;">
            <label class="weight-label">Select Pack Size:</label>
            <div class="weight-pills">
              ${product.weightOptions.map((w, idx) => `
                <button type="button" 
                        class="weight-pill ${idx === this.currentQuickViewWeightIndex ? 'active' : ''}" 
                        onclick="window.categoryApp.setQuickViewWeight(${idx})">
                  ${w.label}
                </button>
              `).join("")}
            </div>
          </div>
          <div class="quick-view-price-row">
            <div class="product-price-box">
              <span class="currency">₹</span>
              <span class="price-value" id="quickViewPrice">${opt.price}</span>
              <span class="unit-text" id="quickViewUnit">(${opt.label})</span>
            </div>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-whatsapp" onclick="window.categoryApp.orderOnWhatsApp('${product.id}')">
                <i class="fab fa-whatsapp"></i> Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    if (modal && overlay) {
      modal.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("modal-open");
    }
  }

  setQuickViewWeight(weightIndex) {
    this.currentQuickViewWeightIndex = weightIndex;
    const opt = this.currentQuickViewProduct.weightOptions[weightIndex];
    document.getElementById("quickViewPrice").textContent = opt.price;
    document.getElementById("quickViewUnit").textContent = `(${opt.label})`;
    document.querySelectorAll("#quickViewModal .weight-pill").forEach((p, idx) => {
      p.classList.toggle("active", idx === weightIndex);
    });
  }



  closeQuickView() {
    const modal = document.getElementById("quickViewModal");
    const overlay = document.getElementById("quickViewOverlay");
    if (modal && overlay) {
      modal.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
      if (window.location.hash && (window.location.hash.startsWith("#product-") || window.location.hash.startsWith("#product-card-"))) {
        try {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        } catch (e) {}
      }
    }
  }


}

// Global hook
window.openQuickView = function(productId) {
  if (window.categoryApp) {
    window.categoryApp.openQuickView(productId);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.categoryApp = new CategoryPageController();
});
