/**
 * Shree Umiya Sweets and Snacks - Main Application Controller
 */

class AppController {
  constructor() {
    this.activeCategory = "all";
    this.activeSubcategory = null;
    this.activeSort = "popular";
    this.selectedProductWeights = {}; // productId -> selected weightIndex
    this.init();
  }

  init() {
    this.renderCategoryCards();
    this.renderProducts();
    this.initCategoryFilters();
    this.initCategoryDropdowns();
    this.initMobileAccordion();
    this.initNavbarCategoryLinks();
    this.initStickyHeader();
    this.initMobileDrawer();
    this.initQuickViewModal();

    this.initBannerCountdown();
    this.initHeroCarousel();
    this.initFeaturedProductsSlider();
    this.initWelcomePopup();
  }

  // 1. Render Category Showcase Cards (Top Section)
  renderCategoryCards() {
    const container = document.getElementById("categoriesGrid");
    if (!container) return;

    const displayCats = CATEGORIES_DATA.filter(c => c.id !== "all");

    // Mapping category images
    const catImages = {
      "sweets": "Sweets_images/Kaju_katli.jpg",
      "hampers": "Sweets_images/mix-sweets.jpg",
      "namkeens": "images/prod-namkeen.png",
      "live-snacks": "Sweets_images/Jalebi.jpg",
      "dairy": "Sweets_images/shrikhand.jpeg",
      "bakery": "images/cat-bakery.png",
      "chocolates": "Sweets_images/Cold_cocoa.jpg",
      "dry-fruits": "images/hero_banner.jpg"
    };

    container.innerHTML = displayCats.map(cat => `
      <div class="category-card" onclick="window.app.setCategory('${cat.id}')">
        <div class="category-img-wrapper">
          <img src="${catImages[cat.id] || 'Sweets_images/UMIYA_LOGO_page-0001-removebg-preview (1).png'}" alt="${cat.name}" class="category-img" loading="lazy">
          <span class="category-count-badge">${cat.count} Items</span>
        </div>
        <div class="category-card-body">
          <div class="category-icon-title">
            <span class="category-icon">${cat.icon}</span>
            <h3 class="category-card-title">${cat.name}</h3>
          </div>
          <p class="category-card-desc">${cat.desc}</p>
          <button class="category-explore-btn">
            <span>Explore Menu</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `).join("");
  }

  // 2. Render Products Grid in Master Menu
  renderProducts() {
    const grid = document.getElementById("productsGrid");
    const countBadge = document.getElementById("menuProductCount");
    if (!grid) return;

    // Filter by Category
    let list = this.activeCategory === "all" 
      ? [...PRODUCTS_DATA] 
      : PRODUCTS_DATA.filter(p => p.category === this.activeCategory);

    // Filter by Subcategory if selected
    if (this.activeSubcategory) {
      const sub = this.activeSubcategory.toLowerCase().trim();

      // Mappings for all categories and subcategories
      const subcatMap = {
        // Sweets (Exact 11 requested)
        "luxury sweets": ["kaju-katli", "pista-roll", "malai-sandwich", "hamper-royal-umiya"],
        "dry fruit sweets": ["kaju-katli", "pista-roll", "besan-laddu"],
        "ghee sweets": ["thabdi-penda", "motichur-laddu", "besan-laddu", "adadiya-pak", "kesar-penda"],
        "bengali sweets": ["rasgulla", "malai-sandwich", "gulab-jamun"],
        "khoya / mawa sweets": ["kesar-penda", "thabdi-penda", "gulab-jamun"],
        "dairy sweets": ["kesar-penda", "thabdi-penda", "rasgulla", "malai-sandwich"],
        "gujarati sweets": ["thabdi-penda", "kesar-penda", "motichur-laddu", "adadiya-pak", "besan-laddu"],
        "marwadi sweets": ["motichur-laddu", "besan-laddu", "kesar-penda"],
        "sugar free sweets": ["kaju-katli", "pista-roll"],
        "winter special": ["adadiya-pak", "besan-laddu"],
        "festival favourites": ["kaju-katli", "kesar-penda", "motichur-laddu", "thabdi-penda", "gulab-jamun"],

        // Hampers
        "royal gift boxes": ["hamper-royal-umiya", "hamper-wedding-special"],
        "festive mithai hampers": ["hamper-diwali-delight", "hamper-royal-umiya"],
        "dry fruit gift hampers": ["hamper-royal-umiya", "dryfruits-royal-box"],
        "corporate gift packs": ["hamper-diwali-delight", "hamper-wedding-special"],
        "wedding sweet boxes": ["hamper-wedding-special", "hamper-royal-umiya"],

        // Namkeens
        "surati gathiya": ["namkeen-surti-gathiya"],
        "bhavnagari gathiya": ["namkeen-surti-gathiya"],
        "nylon sev & farsan": ["namkeen-nylon-sev", "namkeen-tikha-mixture"],
        "ratlami & spicy sev": ["namkeen-tikha-mixture"],
        "special mixture farsan": ["namkeen-tikha-mixture", "namkeen-nylon-sev"],

        // Live Snacks
        "hot desi ghee jalebi": ["live-desi-ghee-jalebi"],
        "surati nylon khaman": ["live-nylon-khaman"],
        "khasta samosa": ["live-crispy-samosa"],
        "fafda & chutney": ["live-nylon-khaman", "live-desi-ghee-jalebi"],

        // Dairy
        "kesar shrikhand (matho)": ["dairy-kesar-shrikhand"],
        "royal gujarati basundi": ["dairy-basundi"],
        "fresh malai lassi": ["dairy-sweet-lassi"],
        "pure cow desi ghee": ["dairy-kesar-shrikhand", "dairy-basundi"],
        "fresh malai paneer": ["dairy-kesar-shrikhand", "dairy-sweet-lassi"],

        // Bakery
        "surti butter nankhatai": ["bakery-surti-nankhatai"],
        "crispy maska khari": ["bakery-maska-khari"],
        "golden toast rusk": ["bakery-maska-khari"],
        "jeera butter biscuits": ["bakery-surti-nankhatai"],

        // Chocolates
        "surat famous cold cocoa": ["chocolates-cold-cocoa"],
        "luxury handcrafted truffles": ["chocolates-artisan-hamper"],
        "belgian pralines hamper": ["chocolates-artisan-hamper"],
        "chocolate coated nuts": ["chocolates-artisan-hamper", "chocolates-cold-cocoa"],

        // Dry Fruits
        "royal 4-in-1 boxes": ["dryfruits-royal-box"],
        "roasted salted cashews": ["dryfruits-roasted-cashews"],
        "california jumbo almonds": ["dryfruits-royal-box"],
        "iranian roasted pistachios": ["dryfruits-royal-box"],
        "afghani green raisins": ["dryfruits-royal-box"]
      };

      const matchedIds = subcatMap[sub];
      if (matchedIds && matchedIds.length > 0) {
        list = PRODUCTS_DATA.filter(p => matchedIds.includes(p.id));
      } else {
        // Fallback keyword search
        const q = sub.replace(/[^\w\s]/gi, "");
        list = list.filter(p => 
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.ingredients.toLowerCase().includes(q) ||
          p.badge.toLowerCase().includes(q)
        );
      }
    }

    // Sort items
    if (this.activeSort === "price-asc") {
      list.sort((a, b) => a.weightOptions[0].price - b.weightOptions[0].price);
    } else if (this.activeSort === "price-desc") {
      list.sort((a, b) => b.weightOptions[0].price - a.weightOptions[0].price);
    } else if (this.activeSort === "ghee-specials") {
      list.sort((a, b) => (b.badge.includes("Ghee") ? 1 : 0) - (a.badge.includes("Ghee") ? 1 : 0));
    } else {
      // popular
      list.sort((a, b) => (b.reviewsCount * b.rating) - (a.reviewsCount * a.rating));
    }

    if (countBadge) {
      countBadge.textContent = `${list.length} Items`;
    }

    // Update active filter badge indicator in Menu section
    const filterIndicator = document.getElementById("activeFilterIndicator");
    if (filterIndicator) {
      if (this.activeSubcategory) {
        const catObj = CATEGORIES_DATA.find(c => c.id === this.activeCategory);
        const catName = catObj ? catObj.name : "Delicacies";
        filterIndicator.style.display = "inline-flex";
        filterIndicator.innerHTML = `
          <span><i class="fas fa-filter"></i> <strong>${catName}</strong> &rsaquo; <em>${this.activeSubcategory}</em> (${list.length} items)</span>
          <button class="clear-filter-btn" onclick="window.app.clearSubcategoryFilter()" title="Clear Filter">
            <i class="fas fa-times"></i> Clear Filter
          </button>
        `;
      } else {
        filterIndicator.style.display = "none";
        filterIndicator.innerHTML = "";
      }
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="no-products-found">
          <i class="fas fa-search empty-icon"></i>
          <h3>No delights found for this selection</h3>
          <p>Explore our other authentic Indian sweets and savory snacks!</p>
          <button class="btn btn-gold" onclick="window.app.setCategory('all')">View All Delights</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(item => {
      const selectedIndex = this.selectedProductWeights[item.id] || 0;
      const currentWeight = item.weightOptions[selectedIndex] || item.weightOptions[0];

      return `
        <article class="product-card" id="product-card-${item.id}">
          <div class="product-image-container" onclick="window.openQuickView('${item.id}')">
            <span class="veg-badge" title="100% Pure Vegetarian">
              <span class="veg-dot"></span>
            </span>
            ${item.badge ? `<span class="product-tag-badge badge-${item.badgeType || 'gold'}">${item.badge}</span>` : ''}
            <img src="${item.image}" alt="${item.name}" class="product-image" loading="lazy" onerror="this.src='Sweets_images/UMIYA_LOGO_page-0001-removebg-preview (1).png'">
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

            <!-- Weight Selection Pills -->
            <div class="weight-selector-row">
              <label class="weight-label">Select Pack:</label>
              <div class="weight-pills">
                ${item.weightOptions.map((opt, idx) => `
                  <button type="button" 
                          class="weight-pill ${idx === selectedIndex ? 'active' : ''}" 
                          onclick="window.app.selectWeight('${item.id}', ${idx})">
                    ${opt.label}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Price and Actions Row -->
            <div class="product-card-footer">
              <div class="product-price-box">
                <span class="currency">₹</span>
                <span class="price-value" id="price-display-${item.id}">${currentWeight.price}</span>
                <span class="unit-text">(${currentWeight.label})</span>
              </div>

              <div class="product-card-buttons">
                <button class="order-whatsapp-card-btn" onclick="window.app.orderOnWhatsApp('${item.id}')" title="Order on WhatsApp">
                  <i class="fab fa-whatsapp"></i>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // 3. Weight Selection Change
  selectWeight(productId, weightIndex) {
    this.selectedProductWeights[productId] = weightIndex;
    const product = getProductById(productId);
    if (!product) return;

    const opt = product.weightOptions[weightIndex];
    if (!opt) return;

    // Update displayed price
    const priceEl = document.getElementById(`price-display-${productId}`);
    if (priceEl) {
      priceEl.textContent = opt.price;
    }

    // Update active class on pills in this card
    const card = document.getElementById(`product-card-${productId}`);
    if (card) {
      const pills = card.querySelectorAll(".weight-pill");
      pills.forEach((p, idx) => {
        p.classList.toggle("active", idx === weightIndex);
      });
      const unitText = card.querySelector(".unit-text");
      if (unitText) unitText.textContent = `(${opt.label})`;
    }
  }



  // 4. WhatsApp Direct Ordering
  orderOnWhatsApp(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const weightIndex = this.selectedProductWeights[productId] || 0;
    const opt = product.weightOptions[weightIndex] || product.weightOptions[0];

    const phoneNumber = "917878162112";
    const text = encodeURIComponent(
      `*Shree Umiya Sweets and Snacks - Order Inquiry*\n\n` +
      `Hello! I would like to order:\n` +
      `• *Item:* ${product.name} (${product.gujaratiName})\n` +
      `• *Pack Size:* ${opt.label}\n` +
      `• *Price:* ₹${opt.price}\n\n` +
      `Please let me know availability and delivery time across Surat. Thank you!`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  }

  // 5. Category Tab Filtering
  initCategoryFilters() {
    const tabsContainer = document.getElementById("categoryTabsContainer");
    if (!tabsContainer) return;

    tabsContainer.innerHTML = CATEGORIES_DATA.map(cat => `
      <button class="category-tab-btn ${cat.id === this.activeCategory ? 'active' : ''}" 
              data-category="${cat.id}" 
              onclick="window.app.setCategory('${cat.id}')">
        <span class="tab-icon">${cat.icon}</span>
        <span class="tab-name">${cat.name}</span>
        <span class="tab-count">(${cat.count})</span>
      </button>
    `).join("");

    // Sort dropdown
    const sortSelect = document.getElementById("productSortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.activeSort = e.target.value;
        this.renderProducts();
      });
    }
  }

  setCategory(categoryId) {
    this.activeCategory = categoryId;
    this.activeSubcategory = null; // Clear subcategory filter

    // Update active tab buttons
    document.querySelectorAll(".category-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === categoryId);
    });

    // Update top navbar links active state
    document.querySelectorAll(".main-nav-link").forEach(link => {
      link.classList.toggle("active", link.dataset.category === categoryId);
    });

    // Clear active subcategory highlighting
    document.querySelectorAll(".dropdown-sub-link").forEach(link => {
      link.classList.remove("active");
    });

    this.renderProducts();

    // Smooth scroll to master menu
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Filter products by selected subcategory
  filterBySubcategory(categoryId, subcategoryName) {
    this.activeCategory = categoryId;
    this.activeSubcategory = subcategoryName;

    // Highlight active category in top navbar
    document.querySelectorAll(".main-nav-link").forEach(link => {
      const isMatch = link.dataset.category === categoryId;
      link.classList.toggle("active", isMatch);
    });

    // Highlight active category tab in menu section
    document.querySelectorAll(".category-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === categoryId);
    });

    // Highlight active subcategory link in dropdown
    document.querySelectorAll(".dropdown-sub-link").forEach(link => {
      const isMatch = link.dataset.category === categoryId && link.dataset.subcategory === subcategoryName;
      link.classList.toggle("active", isMatch);
    });

    this.renderProducts();

    // Smooth scroll to master menu
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Clear subcategory filter
  clearSubcategoryFilter() {
    this.activeSubcategory = null;
    document.querySelectorAll(".dropdown-sub-link").forEach(link => {
      link.classList.remove("active");
    });
    this.renderProducts();
  }

  // 6. Interactive Dropdown Menus for Navbar Product Categories
  initCategoryDropdowns() {
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

    // Toggle dropdown on button click
    dropdownItems.forEach(item => {
      const toggleBtn = item.querySelector(".dropdown-toggle-btn");
      if (!toggleBtn) return;

      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = item.classList.contains("open");

        // Close other dropdowns
        dropdownItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("open");
            const otherBtn = otherItem.querySelector(".dropdown-toggle-btn");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        // Toggle current dropdown
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

    // Re-position on screen resize or category navbar horizontal scroll
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

    // Click on any subcategory link: navigate to dedicated page or filter products
    document.querySelectorAll(".dropdown-sub-link").forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        closeAllDropdowns();
        this.closeMobileDrawer();

        // If link points to a dedicated subcategory page (e.g. sweets/...), navigate directly
        if (href && href !== "#menu" && !href.startsWith("#")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        const cat = link.dataset.category;
        const subcat = link.dataset.subcategory;

        if (cat && subcat) {
          this.filterBySubcategory(cat, subcat);
        } else if (cat) {
          this.setCategory(cat);
        }
      });
    });

    // Click outside to close all dropdowns
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".has-dropdown")) {
        closeAllDropdowns();
      }
    });

    // Keyboard accessibility: ESC closes dropdowns
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllDropdowns();
      }
    });
  }

  // 7. Mobile Drawer Categories Accordion
  initMobileAccordion() {
    // Handled centrally in js/header.js to avoid duplicate event conflicts
  }

  // 8. Synchronize Top Sticky Navbar Category Links
  initNavbarCategoryLinks() {
    document.querySelectorAll(".main-nav-link:not(.dropdown-toggle-btn), .mobile-nav-link:not(.mobile-category-main-toggle):not(.dropdown-sub-link)").forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href !== "#menu" && !href.startsWith("#")) {
          this.closeMobileDrawer();
          return;
        }
        const cat = link.dataset.category;
        if (cat) {
          e.preventDefault();
          this.setCategory(cat);
          this.closeMobileDrawer();
        }
      });
    });
  }

  // 7. Sticky Header Shadow & Shrink
  initStickyHeader() {
    const header = document.getElementById("mainHeader");
    const navBar = document.getElementById("mainNavbar");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        if (header) header.classList.add("header-scrolled");
        if (navBar) navBar.classList.add("navbar-sticky");
      } else {
        if (header) header.classList.remove("header-scrolled");
        if (navBar) navBar.classList.remove("navbar-sticky");
      }
    });
  }

  // 8. Mobile Drawer
  initMobileDrawer() {
    const openBtn = document.getElementById("openMobileNavBtn");
    const closeBtn = document.getElementById("closeMobileNavBtn");
    const drawer = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("mobileDrawerOverlay");

    if (openBtn) openBtn.addEventListener("click", () => this.openMobileDrawer());
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeMobileDrawer());
    if (overlay) overlay.addEventListener("click", () => this.closeMobileDrawer());
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

  // 9. Quick View Modal
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
    this.currentQuickViewQty = 1;

    const modal = document.getElementById("quickViewModal");
    const overlay = document.getElementById("quickViewOverlay");
    const container = document.getElementById("quickViewBody") || document.getElementById("quickViewModalBody");

    if (!modal || !overlay || !container) return;

    const opt = product.weightOptions[this.currentQuickViewWeightIndex] || product.weightOptions[0];

    container.innerHTML = `
      <div class="quick-view-grid">
        <div class="quick-view-media">
          <div class="qv-img-frame">
            <img src="${product.image}" alt="${product.name}" class="qv-main-img" onerror="this.src='Sweets_images/UMIYA_LOGO_page-0001-removebg-preview (1).png'">
            <span class="veg-badge"><span class="veg-dot"></span></span>
          </div>
        </div>

        <div class="quick-view-details">
          <div class="qv-category-row">
            <span class="qv-category-tag">${product.categoryLabel}</span>
            <span class="qv-badge badge-${product.badgeType || 'gold'}">${product.badge}</span>
          </div>

          <h2 class="qv-title">${product.name}</h2>
          <p class="qv-gujarati">${product.gujaratiName}</p>

          <div class="qv-rating-row">
            <span class="star-rating"><i class="fas fa-star"></i> ${product.rating}</span>
            <span class="reviews-count">(${product.reviewsCount} customer reviews)</span>
            <span class="fresh-status"><i class="fas fa-clock"></i> Made Fresh Daily</span>
          </div>

          <div class="qv-price-display">
            <span class="qv-currency">₹</span>
            <span class="qv-price-val" id="qvPriceValue">${opt.price}</span>
            <span class="qv-weight-label" id="qvWeightLabel">(${opt.label})</span>
          </div>

          <p class="qv-description">${product.description}</p>

          <div class="qv-meta-box">
            <div class="qv-meta-row">
              <span class="meta-lbl"><i class="fas fa-mortar-pestle"></i> Ingredients:</span>
              <span class="meta-val">${product.ingredients || 'Pure Cashews, Desi Ghee, Sugar'}</span>
            </div>
            <div class="qv-meta-row">
              <span class="meta-lbl"><i class="fas fa-shield-alt"></i> Shelf Life:</span>
              <span class="meta-val">${product.shelfLife || '15 Days'}</span>
            </div>
          </div>

          <!-- Weight selection -->
          <div class="qv-weights-row">
            <label class="qv-label">Select Pack Size:</label>
            <div class="qv-pills">
              ${product.weightOptions.map((w, idx) => `
                <button type="button" 
                        class="qv-weight-pill ${idx === this.currentQuickViewWeightIndex ? 'active' : ''}" 
                        onclick="window.app.updateQuickViewWeight(${idx})">
                  ${w.label} - ₹${w.price}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- WhatsApp Order -->
          <div class="qv-actions-row">
            <button class="btn btn-whatsapp qv-wa-btn" onclick="window.app.orderOnWhatsApp('${product.id}')" title="Order on WhatsApp">
              <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("modal-open");
  }

  updateQuickViewWeight(idx) {
    if (!this.currentQuickViewProduct) return;
    this.currentQuickViewWeightIndex = idx;
    const opt = this.currentQuickViewProduct.weightOptions[idx];

    const priceEl = document.getElementById("qvPriceValue");
    const weightEl = document.getElementById("qvWeightLabel");
    if (priceEl) priceEl.textContent = opt.price;
    if (weightEl) weightEl.textContent = `(${opt.label})`;

    document.querySelectorAll(".qv-weight-pill").forEach((pill, i) => {
      pill.classList.toggle("active", i === idx);
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



  // 11. Promotional Banner Live Counter
  initBannerCountdown() {
    const countdownEl = document.getElementById("festiveCountdown");
    if (!countdownEl) return;

    // 2 days countdown simulation
    let totalSeconds = 2 * 24 * 3600 + 14 * 3600 + 45 * 60;
    setInterval(() => {
      totalSeconds--;
      if (totalSeconds < 0) totalSeconds = 3 * 24 * 3600;

      const d = Math.floor(totalSeconds / (24 * 3600));
      const h = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      countdownEl.innerHTML = `
        <span class="cd-box"><strong>${d}</strong>d</span>
        <span class="cd-box"><strong>${h}</strong>h</span>
        <span class="cd-box"><strong>${m}</strong>m</span>
        <span class="cd-box"><strong>${s}</strong>s</span>
      `;
    }, 1000);
  }

  // 12. Hero Carousel Logic
  initHeroCarousel() {
    const slides = document.querySelectorAll(".hero-carousel-slide");
    const dots = document.querySelectorAll(".hero-dot");
    const prevBtn = document.getElementById("heroPrevBtn");
    const nextBtn = document.getElementById("heroNextBtn");
    const container = document.getElementById("heroCarouselContainer");

    if (!slides.length) return;

    let currentSlide = 0;
    let autoplayTimer = null;

    const showSlide = (index) => {
      slides.forEach((s, i) => {
        s.classList.toggle("active", i === index);
      });
      dots.forEach((d, i) => {
        d.classList.toggle("active", i === index);
      });
      currentSlide = index;
    };

    const nextSlide = () => {
      showSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prevSlide();
        restartAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        nextSlide();
        restartAutoplay();
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        restartAutoplay();
      });
    });

    const startAutoplay = () => {
      autoplayTimer = setInterval(nextSlide, 5500);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    const restartAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    if (container) {
      container.addEventListener("mouseenter", stopAutoplay);
      container.addEventListener("mouseleave", startAutoplay);
    }

    startAutoplay();
  }

  // 13. Best Sellers Products Slider Logic
  initFeaturedProductsSlider() {
    const track = document.getElementById("bestSellersTrack");
    const prevBtn = document.getElementById("bestSellersPrevBtn");
    const nextBtn = document.getElementById("bestSellersNextBtn");

    if (!track) return;

    const scrollAmount = 300;

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }
  }

  // 13. Festival Welcome Popup Modal (popup2.jpeg)
  initWelcomePopup() {
    const modal = document.getElementById("welcomePopupModal");
    const overlay = document.getElementById("welcomePopupOverlay");
    const closeBtn = document.getElementById("closeWelcomePopupBtn");

    if (!modal || !overlay) return;

    const closePopup = () => {
      modal.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
    };

    if (closeBtn) closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closePopup();
      }
    });

    // Smoothly pop up when anyone opens the website (600ms after load)
    setTimeout(() => {
      modal.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("modal-open");
    }, 600);
  }
}

// Global functions for inline HTML calls
window.openQuickView = function(productId) {
  if (window.app) window.app.openQuickView(productId);
};



document.addEventListener("DOMContentLoaded", () => {
  window.app = new AppController();
});
