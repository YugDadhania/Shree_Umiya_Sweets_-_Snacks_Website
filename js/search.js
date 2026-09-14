/**
 * Shree Umiya Sweets and Snacks - Master Search Manager
 * Works dynamically across Homepage and all 20+ Category and Subcategory pages
 */

const SEARCH_SUBCATEGORY_MAP = {
  // Luxury Sweets
  "Baklava": { subcat: "Luxury Sweets", slug: "sweets/luxury-sweets" },
  "Kunafa-Balls": { subcat: "Luxury Sweets", slug: "sweets/luxury-sweets" },
  "Rose-Balls": { subcat: "Luxury Sweets", slug: "sweets/luxury-sweets" },
  "Biscoff-Laddu": { subcat: "Luxury Sweets", slug: "sweets/luxury-sweets" },
  // Dry Fruit Sweets
  "Kaju-katli": { subcat: "Dry Fruit Sweets", slug: "sweets/dry-fruit-sweets" },
  "Pista-Roll": { subcat: "Dry Fruit Sweets", slug: "sweets/dry-fruit-sweets" },
  "Dry-Fruit pan": { subcat: "Dry Fruit Sweets", slug: "sweets/dry-fruit-sweets" },
  "Anjeer-Diamond-Patra": { subcat: "Dry Fruit Sweets", slug: "sweets/dry-fruit-sweets" },
  // Ghee Sweets
  "motichur-laddu": { subcat: "Ghee Sweets", slug: "sweets/ghee-sweets" },
  "besan-laddu": { subcat: "Ghee Sweets", slug: "sweets/ghee-sweets" },
  "Ghee Boondi": { subcat: "Ghee Sweets", slug: "sweets/ghee-sweets" },
  "Surati Pista Ghari": { subcat: "Ghee Sweets", slug: "sweets/ghee-sweets" },
  // Bengali Sweets
  "rasgulla": { subcat: "Bengali Sweets", slug: "sweets/bengali-sweets" },
  "malai-sandwich": { subcat: "Bengali Sweets", slug: "sweets/bengali-sweets" },
  "Rajbhog": { subcat: "Bengali Sweets", slug: "sweets/bengali-sweets" },
  // Khoya / Mawa Sweets
  "kesar-penda": { subcat: "Khoya / Mawa Sweets", slug: "sweets/khoya-mawa-sweets" },
  "thabdi-penda": { subcat: "Khoya / Mawa Sweets", slug: "sweets/khoya-mawa-sweets" },
  "Pista-Penda": { subcat: "Khoya / Mawa Sweets", slug: "sweets/khoya-mawa-sweets" },
  "Milk Cake": { subcat: "Khoya / Mawa Sweets", slug: "sweets/khoya-mawa-sweets" },
  "gulab-jamun": { subcat: "Khoya / Mawa Sweets", slug: "sweets/khoya-mawa-sweets" },
  // Dairy Sweets
  "Shrikhand": { subcat: "Dairy Sweets", slug: "sweets/dairy-sweets" },
  "Angoor Rabdi": { subcat: "Dairy Sweets", slug: "sweets/dairy-sweets" },
  "Ras Malai": { subcat: "Dairy Sweets", slug: "sweets/dairy-sweets" },
  "Mango Matho": { subcat: "Dairy Sweets", slug: "sweets/dairy-sweets" },
  // Gujarati Sweets
  "Mohanthal": { subcat: "Gujarati Sweets", slug: "sweets/gujarati-sweets" },
  "Magaj": { subcat: "Gujarati Sweets", slug: "sweets/gujarati-sweets" },
  // Marwadi Sweets
  "Malai Ghevar": { subcat: "Marwadi sweets", slug: "sweets/marwadi-sweets" },
  "Gujiya": { subcat: "Marwadi sweets", slug: "sweets/marwadi-sweets" },
  "Balushai": { subcat: "Marwadi sweets", slug: "sweets/marwadi-sweets" },
  // Sugar Free Sweets
  "Dry-Fruit Khajur chikki (Sugar Free)": { subcat: "Sugar Free Sweets", slug: "sweets/sugar-free-sweets" },
  "Dry-Fruit anjeer chikki (Sugar Free)": { subcat: "Sugar Free Sweets", slug: "sweets/sugar-free-sweets" },
  // Winter Special
  "adadiya-pak": { subcat: "Winter Special", slug: "sweets/winter-special" },
  "Salam Pax": { subcat: "Winter Special", slug: "sweets/winter-special" },
  "Gajar halwa": { subcat: "Winter Special", slug: "sweets/winter-special" },
  // Festival Favourites
  "Modak": { subcat: "Festival Favourites", slug: "sweets/festival-favourites" },
  "Gujiya_fest": { subcat: "Festival Favourites", slug: "sweets/festival-favourites" },
  "Surati Pista Ghari_fest": { subcat: "Festival Favourites", slug: "sweets/festival-favourites" },
  "Kaju-katli_fest": { subcat: "Festival Favourites", slug: "sweets/festival-favourites" },
  // Hampers
  "dryfruits-royal-box": { subcat: "Dryfruit Hampers", slug: "hampers/dryfruit-hampers" },
  "hamper-shahi-dryfruits": { subcat: "Dryfruit Hampers", slug: "hampers/dryfruit-hampers" },
  "hamper-royal-umiya": { subcat: "Dryfruit Hampers", slug: "hampers/dryfruit-hampers" },
  "hamper-wedding-special": { subcat: "Dryfruit Hampers", slug: "hampers/dryfruit-hampers" },
  "hamper-royal": { subcat: "Hampers", slug: "hampers/index_1.html" },
  "hamper-diwali-delight": { subcat: "Hampers", slug: "hampers/index_1.html" },
  "chocolates-cold-cocoa": { subcat: "Chocolate Hampers", slug: "chocolates-hampers" },
  "chocolates-artisan-hamper": { subcat: "Chocolate Hampers", slug: "chocolates-hampers" },
  "hamper-royal-chocolate": { subcat: "Chocolate Hampers", slug: "chocolates-hampers" },
  // Namkeens
  "Bhavnagari-Gathiya": { subcat: "Namkeens", slug: "namkeens" },
  "Fersi-Puri": { subcat: "Namkeens", slug: "namkeens" },
  "namkeen-tikha-mixture": { subcat: "Namkeens", slug: "namkeens" },
  "Khatta-Meetha-Mixture": { subcat: "Namkeens", slug: "namkeens" },
  // Live Snacks
  "live-desi-ghee-jalebi": { subcat: "Live Snacks", slug: "live-snacks" },
  "live-khaman": { subcat: "Live Snacks", slug: "live-snacks" },
  "Punjabi Samosa": { subcat: "Live Snacks", slug: "live-snacks" },
  "Pyajj Kachori": { subcat: "Live Snacks", slug: "live-snacks" },
  // Dairy Products
  "Punjabi Dahi": { subcat: "Dairy Products", slug: "dairy-products" },
  "Malai Paneer": { subcat: "Dairy Products", slug: "dairy-products" },
  "dairy-sweet-lassi": { subcat: "Dairy Products", slug: "dairy-products" },
  "dairy-cold-cocoa": { subcat: "Dairy Products", slug: "dairy-products" },
  // Bakery Products
  "bakery-surti-nankhatai": { subcat: "Bakery Products", slug: "bakery-products" },
  "bakery-maska-khari": { subcat: "Bakery Products", slug: "bakery-products" },
  "bakery-makhaniya": { subcat: "Bakery Products", slug: "bakery-products" },
  // Dry Fruits
  "dryfruits-roasted-cashews": { subcat: "Dry Fruits", slug: "dry-fruits" },
  "Premium pistachios": { subcat: "Dry Fruits", slug: "dry-fruits" },
  "Asoorteed Almonds": { subcat: "Dry Fruits", slug: "dry-fruits" },
  "Shahi Anjeer": { subcat: "Dry Fruits", slug: "dry-fruits" }
};

const CATEGORY_SLUG_MAP = {
  "sweets": "sweets/",
  "namkeens": "namkeens/",
  "live-snacks": "live-snacks/",
  "dairy": "dairy-products/",
  "bakery": "bakery-products/",
  "chocolates": "chocolates-hampers/",
  "dry-fruits": "dry-fruits/",
  "hampers": "hampers/index_1.html"
};

class SearchManager {
  constructor() {
    this.selectedSearchWeights = {};
    this.ensureModalInDOM();
    this.initEventListeners();
    this.checkUrlProductHash();
  }

  getBasePrefix() {
    const link = document.querySelector('link[rel="stylesheet"][href*="style.css"]');
    if (link) {
      const href = link.getAttribute("href");
      const idx = href.indexOf("css/style.css");
      if (idx !== -1) return href.substring(0, idx);
    }
    const depth = document.body ? document.body.dataset.pageDepth : null;
    if (depth === "2") return "../../";
    if (depth === "1") return "../";
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    if (pathSegments.length >= 2 && !window.location.pathname.endsWith("index.html")) return "../../";
    if (pathSegments.length >= 1 && !window.location.pathname.endsWith("index.html")) return "../";
    return "";
  }

  ensureModalInDOM() {
    let overlay = document.getElementById("searchOverlay");
    let modal = document.getElementById("searchModal");

    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "modal-overlay";
      overlay.id = "searchOverlay";
      document.body.appendChild(overlay);
    }

    const modalContent = `
        <div class="search-modal-header">
          <i class="fas fa-search search-icon-input" aria-hidden="true"></i>
          <div class="search-input-wrapper">
            <input type="text" class="search-input-field" id="searchInputModal"
              placeholder="Search sweets, farsan, hampers, dry fruits... (e.g. Kaju, Penda, Gathiya)" 
              autocomplete="off" aria-label="Search sweets and snacks">
            <button class="search-clear-btn" id="clearSearchInputBtn" aria-label="Clear search" title="Clear search" style="display: none;">✕</button>
          </div>
          <button class="close-modal-x" id="closeSearchBtn" aria-label="Close Search" title="Close Search (Esc)">✕</button>
        </div>
        <div class="search-results-area">
          <p class="search-result-count-label" id="searchResultCount">Popular Searches</p>
          <div id="searchResultsContainer"></div>
        </div>
    `;

    if (!modal) {
      modal = document.createElement("div");
      modal.className = "search-modal";
      modal.id = "searchModal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-label", "Product Search");
      modal.innerHTML = modalContent;
      document.body.appendChild(modal);
    } else {
      // Ensure clear button exists inside header
      const inputWrap = modal.querySelector(".search-input-wrapper");
      const clearBtn = modal.querySelector("#clearSearchInputBtn");
      if (!inputWrap || !clearBtn) {
        modal.innerHTML = modalContent;
      }
    }
  }

  openModal() {
    this.ensureModalInDOM();
    const modal = document.getElementById("searchModal");
    const overlay = document.getElementById("searchOverlay");
    const input = document.getElementById("searchInputModal");
    const clearBtn = document.getElementById("clearSearchInputBtn");

    if (modal && overlay) {
      modal.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("modal-open");

      if (input) {
        input.value = "";
        if (clearBtn) clearBtn.style.display = "none";
        setTimeout(() => input.focus(), 120);
        this.renderResults("");
      }
    }
  }

  closeModal() {
    const modal = document.getElementById("searchModal");
    const overlay = document.getElementById("searchOverlay");
    if (modal && overlay) {
      modal.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  }

  search(query) {
    const rawQ = (query || "").trim().toLowerCase();
    if (!rawQ) return [];

    if (typeof PRODUCTS_DATA === "undefined" || !Array.isArray(PRODUCTS_DATA)) {
      return [];
    }

    const tokens = rawQ.split(/\s+/).filter(Boolean);

    const scored = [];

    PRODUCTS_DATA.forEach(item => {
      const subInfo = SEARCH_SUBCATEGORY_MAP[item.id] || {};
      const subcatName = (subInfo.subcat || "").toLowerCase();
      const nameLower = (item.name || "").toLowerCase();
      const gujLower = (item.gujaratiName || "").toLowerCase();
      const descLower = (item.description || "").toLowerCase();
      const ingLower = (item.ingredients || "").toLowerCase();
      const catLower = (item.category || "").toLowerCase();
      const catLabelLower = (item.categoryLabel || "").toLowerCase();
      const badgeLower = (item.badge || "").toLowerCase();

      const searchableText = [
        nameLower,
        gujLower,
        catLower,
        catLabelLower,
        subcatName,
        descLower,
        ingLower,
        badgeLower
      ].join(" ");

      // Every token must match somewhere in searchableText
      const allMatch = tokens.every(token => searchableText.includes(token));
      if (!allMatch) return;

      // Smart ranking score
      let score = 0;
      if (nameLower === rawQ) score += 200;
      else if (nameLower.startsWith(rawQ)) score += 120;
      else if (nameLower.includes(rawQ)) score += 80;

      tokens.forEach(token => {
        if (nameLower.includes(token)) score += 40;
        if (gujLower.includes(token)) score += 25;
        if (subcatName.includes(token)) score += 20;
        if (catLabelLower.includes(token)) score += 15;
        if (badgeLower.includes(token)) score += 10;
        if (ingLower.includes(token)) score += 8;
        if (descLower.includes(token)) score += 5;
      });

      // Tie breaker by reviews and rating
      score += (item.rating || 0) * 2 + Math.min(item.reviewsCount || 0, 50) * 0.1;

      scored.push({ item, score });
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.map(s => s.item);
  }

  getProductCategoryUrl(item) {
    const basePrefix = this.getBasePrefix();
    const subInfo = SEARCH_SUBCATEGORY_MAP[item.id];
    if (subInfo && subInfo.slug) {
      const targetSlug = subInfo.slug.endsWith(".html") ? subInfo.slug : (subInfo.slug.endsWith("/") ? subInfo.slug : `${subInfo.slug}/`);
      return `${basePrefix}${targetSlug}`;
    }
    const catSlug = CATEGORY_SLUG_MAP[item.category] || "sweets/";
    return `${basePrefix}${catSlug}`;
  }

  renderResults(query) {
    const container = document.getElementById("searchResultsContainer");
    const countEl = document.getElementById("searchResultCount");
    if (!container) return;

    const q = (query || "").trim();

    if (!q) {
      if (countEl) countEl.textContent = "Popular Searches";
      container.innerHTML = `
        <div class="search-popular-tags">
          <p class="popular-tag-title"><i class="fas fa-fire" style="color: #F59E0B;"></i> Trending Delights & Categories:</p>
          <div class="tag-pills">
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Kaju Katli')">Kaju Katli</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Baklava')">Baklava</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Gathiya')">Bhavnagari Gathiya</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Desi Ghee Jalebi')">Desi Ghee Jalebi</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Gulab Jamun')">Gulab Jamun</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Shrikhand')">Kesar Shrikhand</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Penda')">Kesar Penda</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Cold Cocoa')">Cold Cocoa</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Dry Fruits')">Dry Fruit Hampers</button>
            <button type="button" class="search-tag-pill" onclick="window.searchManager.setSearchTerm('Mixture')">Farsan Mixture</button>
          </div>
        </div>
      `;
      return;
    }

    const matches = this.search(q);

    if (countEl) {
      countEl.textContent = `Found ${matches.length} ${matches.length === 1 ? "delight" : "delights"} for "${q}"`;
    }

    if (matches.length === 0) {
      container.innerHTML = `
        <div class="search-no-results">
          <div class="search-empty-icon-wrap">
            <i class="fas fa-search"></i>
          </div>
          <h3 class="search-empty-title">No products found</h3>
          <p class="search-empty-msg">We couldn't find any sweets, namkeens, or hampers matching "<strong>${this.escapeHtml(q)}</strong>".</p>
          <p class="search-empty-hint">Try searching with partial words like <em>"Kaju"</em>, <em>"Katli"</em>, <em>"Gathiya"</em>, <em>"Gul"</em>, or <em>"Mix"</em>.</p>
          <button type="button" class="btn btn-primary search-browse-all-btn" onclick="window.searchManager.browseAllProducts()">
            <i class="fas fa-th-large"></i> Browse All Products
          </button>
        </div>
      `;
      return;
    }

    const basePrefix = this.getBasePrefix();

    container.innerHTML = `
      <div class="search-products-grid">
        ${matches.map(item => {
          const selectedWeightIdx = this.selectedSearchWeights[item.id] || 0;
          const currentWeight = (item.weightOptions && item.weightOptions[selectedWeightIdx]) || 
                                (item.weightOptions && item.weightOptions[0]) || 
                                { label: "Standard", price: 0 };

          const imgPath = item.image.startsWith("http") || item.image.startsWith("/")
            ? item.image 
            : `${basePrefix}${item.image}`;

          const subInfo = SEARCH_SUBCATEGORY_MAP[item.id];
          const displayCategory = subInfo ? `${subInfo.subcat}` : (item.categoryLabel || item.category);

          return `
            <article class="product-card" id="search-card-${item.id}" onclick="window.searchManager.selectProduct('${item.id}')" role="button" tabindex="0">
              <div class="product-image-container">
                <span class="veg-badge" title="100% Pure Vegetarian">
                  <span class="veg-dot"></span>
                </span>
                ${item.badge ? `<span class="product-tag-badge badge-${item.badgeType || 'gold'}">${item.badge}</span>` : ''}
                <img src="${imgPath}" alt="${item.name}" class="product-image" loading="lazy" 
                     onerror="this.src='${basePrefix}Sweets_images/UMIYA_LOGO_page-0001-removebg-preview (1).png'">
                <button type="button" class="quick-view-overlay-btn" 
                        onclick="event.stopPropagation(); window.searchManager.selectProduct('${item.id}')" title="Quick View">
                  <i class="fas fa-eye"></i> Quick View
                </button>
              </div>

              <div class="product-content">
                <div class="product-rating-row">
                  <span class="star-rating"><i class="fas fa-star"></i> ${item.rating}</span>
                  <span class="reviews-count">(${item.reviewsCount} reviews)</span>
                  <span class="category-pill">${displayCategory}</span>
                </div>

                <h3 class="product-title">${item.name}</h3>
                <p class="product-gujarati-title">${item.gujaratiName || ''}</p>
                <p class="product-description">${item.description || ''}</p>

                <!-- Weight Selection Pills -->
                ${item.weightOptions && item.weightOptions.length > 1 ? `
                  <div class="weight-selector-row">
                    <label class="weight-label">Select Pack:</label>
                    <div class="weight-pills" id="search-weights-${item.id}">
                      ${item.weightOptions.map((opt, idx) => `
                        <button type="button" 
                                class="weight-pill ${idx === selectedWeightIdx ? 'active' : ''}" 
                                onclick="window.searchManager.selectSearchCardWeight('${item.id}', ${idx}, event)">
                          ${opt.label}
                        </button>
                      `).join("")}
                    </div>
                  </div>
                ` : ''}

                <!-- Price and Actions Row -->
                <div class="product-card-footer">
                  <div class="product-price-box">
                    <span class="currency">₹</span>
                    <span class="price-value" id="search-price-${item.id}">${currentWeight.price}</span>
                    <span class="unit-text" id="search-unit-${item.id}">(${currentWeight.label})</span>
                  </div>

                  <div class="product-card-buttons">
                    <button type="button" class="order-whatsapp-card-btn" 
                            onclick="window.searchManager.orderWhatsApp('${item.id}', event)" 
                            title="Order on WhatsApp">
                      <i class="fab fa-whatsapp"></i>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m]);
  }

  setSearchTerm(term) {
    const input = document.getElementById("searchInputModal");
    const clearBtn = document.getElementById("clearSearchInputBtn");
    if (input) {
      input.value = term;
      if (clearBtn) clearBtn.style.display = term ? "flex" : "none";
      this.renderResults(term);
    }
  }

  selectSearchCardWeight(productId, weightIndex, event) {
    if (event) event.stopPropagation();
    this.selectedSearchWeights[productId] = weightIndex;

    const product = typeof getProductById === "function" 
      ? getProductById(productId) 
      : (typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA.find(p => p.id === productId) : null);

    if (!product || !product.weightOptions || !product.weightOptions[weightIndex]) return;
    const opt = product.weightOptions[weightIndex];

    const priceEl = document.getElementById(`search-price-${productId}`);
    const unitEl = document.getElementById(`search-unit-${productId}`);
    if (priceEl) priceEl.textContent = opt.price;
    if (unitEl) unitEl.textContent = `(${opt.label})`;

    const pillsWrap = document.getElementById(`search-weights-${productId}`);
    if (pillsWrap) {
      pillsWrap.querySelectorAll(".weight-pill").forEach((pill, idx) => {
        pill.classList.toggle("active", idx === weightIndex);
      });
    }
  }

  selectProduct(productId) {
    this.closeModal();

    const product = typeof getProductById === "function" 
      ? getProductById(productId) 
      : (typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA.find(p => p.id === productId) : null);

    if (!product) return;

    // Check if the product card already exists on the current page
    const localCard = document.getElementById(`product-card-${productId}`);
    if (localCard) {
      try {
        history.pushState(null, "", `#product-${productId}`);
      } catch (e) {}

      localCard.scrollIntoView({ behavior: "smooth", block: "center" });
      localCard.classList.add("highlight-card");
      setTimeout(() => localCard.classList.remove("highlight-card"), 2500);

      this.openProductQuickView(productId);
      return;
    }

    // Otherwise navigate to the product's dedicated category/subcategory page
    const targetUrl = this.getProductCategoryUrl(product);
    window.location.href = `${targetUrl}#product-${productId}`;
  }

  openProductQuickView(productId) {
    if (window.app && typeof window.app.openQuickView === "function") {
      window.app.openQuickView(productId);
      return;
    }
    if (window.categoryApp && typeof window.categoryApp.openQuickView === "function") {
      window.categoryApp.openQuickView(productId);
      return;
    }
    if (typeof window.openQuickView === "function") {
      window.openQuickView(productId);
      return;
    }
  }

  checkUrlProductHash() {
    const hash = window.location.hash;
    if (!hash || (!hash.startsWith("#product-") && !hash.startsWith("#product-card-"))) return;
    const productId = hash.replace("#product-card-", "").replace("#product-", "");
    if (!productId) return;

    // Delay slightly to let the page and product cards finish rendering
    setTimeout(() => {
      const card = document.getElementById(`product-card-${productId}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("highlight-card");
        setTimeout(() => card.classList.remove("highlight-card"), 2500);
      }
      this.openProductQuickView(productId);
    }, 250);
  }

  browseAllProducts() {
    this.closeModal();
    const basePrefix = this.getBasePrefix();
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.app && typeof window.app.setCategory === "function") {
        window.app.setCategory("all");
      }
    } else {
      window.location.href = `${basePrefix}#menu`;
    }
  }

  orderWhatsApp(productId, event) {
    if (event) event.stopPropagation();
    const product = typeof getProductById === "function" 
      ? getProductById(productId) 
      : (typeof PRODUCTS_DATA !== "undefined" ? PRODUCTS_DATA.find(p => p.id === productId) : null);

    if (!product) return;
    const weightIdx = this.selectedSearchWeights[productId] || 0;
    const opt = (product.weightOptions && product.weightOptions[weightIdx]) || 
                (product.weightOptions && product.weightOptions[0]) || 
                { label: "Standard", price: 0 };

    const msg = encodeURIComponent(`Hello Shree Umiya Sweets, I would like to order:
Product: ${product.name}
Pack Size: ${opt.label}
Price: ₹${opt.price}
Quantity: 1
Please confirm availability.`);
    window.open(`https://wa.me/919924111303?text=${msg}`, "_blank");
  }

  initEventListeners() {
    // Delegated click on any search open trigger across header, drawer, and bottom navigation
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest(".open-search-btn, #headerSearchBtn");
      if (trigger) {
        e.preventDefault();
        this.openModal();
      }
    });

    // Delegated click on close buttons or overlay
    document.addEventListener("click", (e) => {
      if (
        e.target.closest("#closeSearchBtn") || 
        e.target.closest("#closeSearchModalBtn") || 
        e.target.closest(".search-close-x") ||
        e.target === document.getElementById("searchOverlay")
      ) {
        this.closeModal();
      }
    });

    // Clear search input button
    document.addEventListener("click", (e) => {
      if (e.target.closest("#clearSearchInputBtn")) {
        e.preventDefault();
        const input = document.getElementById("searchInputModal");
        const clearBtn = document.getElementById("clearSearchInputBtn");
        if (input) {
          input.value = "";
          if (clearBtn) clearBtn.style.display = "none";
          input.focus();
          this.renderResults("");
        }
      }
    });

    // Search input typing delegation
    document.addEventListener("input", (e) => {
      if (e.target && e.target.id === "searchInputModal") {
        const val = e.target.value;
        const clearBtn = document.getElementById("clearSearchInputBtn");
        if (clearBtn) {
          clearBtn.style.display = val.trim().length > 0 ? "flex" : "none";
        }
        this.renderResults(val);
      }
    });

    // Keyboard navigation: "/" to open search, "Escape" to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        this.openModal();
      } else if (e.key === "Escape") {
        const modal = document.getElementById("searchModal");
        if (modal && modal.classList.contains("active")) {
          this.closeModal();
        }
      }
    });

    // Listen to hashchange for product detail navigation & browser back/forward
    window.addEventListener("hashchange", () => {
      this.checkUrlProductHash();
    });
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.searchManager = new SearchManager();
  });
} else {
  window.searchManager = new SearchManager();
}
