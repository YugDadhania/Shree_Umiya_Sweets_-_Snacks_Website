/**
 * Shree Umiya Sweets & Snacks - Unified Shared Master Header Component (<site-header>)
 * Source of Truth: Exact Home Page Header (both Desktop and Mobile)
 * Ensures 100% identical design, branding, logo, typography, icons, navigation,
 * dropdowns, search, account, and responsive drawer across EVERY page of the website.
 */

(function () {
  'use strict';

  // 1. Base Path Resolver based on CSS stylesheet link or body page depth
  function getBasePath() {
    const cssLink = document.querySelector('link[rel="stylesheet"][href*="style.css"]');
    if (cssLink) {
      const href = cssLink.getAttribute('href') || '';
      const idx = href.indexOf('css/style.css');
      if (idx !== -1) {
        return href.substring(0, idx);
      }
    }
    const depth = document.body ? document.body.dataset.pageDepth : null;
    if (depth === '2') return '../../';
    if (depth === '1') return '../';

    const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
    const segments = path.split('/').filter(Boolean);
    if (segments.length >= 2) return '../../';
    if (segments.length === 1) return '../';
    return '';
  }

  // 2. Active Category / Subcategory Detector
  function getActiveState() {
    const body = document.body;
    let category = body ? (body.dataset.category || '').toLowerCase() : '';
    let subcategory = body ? (body.dataset.subcategory || '') : '';

    const path = window.location.pathname.toLowerCase();
    if (!category) {
      if (path.includes('/sweets/')) category = 'sweets';
      else if (path.includes('/hampers/') || path.includes('/chocolates-hampers/')) category = 'hampers';
      else if (path.includes('/namkeens/')) category = 'namkeens';
      else if (path.includes('/live-snacks/')) category = 'live-snacks';
      else if (path.includes('/dairy-products/')) category = 'dairy';
      else if (path.includes('/bakery-products/')) category = 'bakery';
      else if (path.includes('/dry-fruits/')) category = 'dry-fruits';
    }

    if (!subcategory && category === 'sweets') {
      const subMap = {
        'luxury-sweets': 'Luxury Sweets',
        'dry-fruit-sweets': 'Dry Fruit Sweets',
        'ghee-sweets': 'Ghee Sweets',
        'bengali-sweets': 'Bengali Sweets',
        'khoya-mawa-sweets': 'Khoya / Mawa Sweets',
        'dairy-sweets': 'Dairy Sweets',
        'gujarati-sweets': 'Gujarati Sweets',
        'marwadi-sweets': 'Marwadi sweets',
        'sugar-free-sweets': 'Sugar Free Sweets',
        'winter-special': 'Winter Special',
        'festival-favourites': 'Festival Favourites'
      };
      for (const [slug, name] of Object.entries(subMap)) {
        if (path.includes(slug)) {
          subcategory = name;
          break;
        }
      }
    }

    return { category, subcategory };
  }

  // 3. Generate Header HTML
  function renderHeaderHTML(base) {
    const isHome = window.location.pathname === '/' || 
      window.location.pathname.endsWith('/index.html') && 
      !window.location.pathname.includes('/sweets/') && 
      !window.location.pathname.includes('/hampers/') && 
      !window.location.pathname.includes('/namkeens/') && 
      !window.location.pathname.includes('/live-snacks/') && 
      !window.location.pathname.includes('/dairy-products/') && 
      !window.location.pathname.includes('/bakery-products/') && 
      !window.location.pathname.includes('/dry-fruits/') && 
      !window.location.pathname.includes('/chocolates-hampers/');

    const homeLink = isHome ? '#home' : (base || './');
    const logoImg = `${base}Sweets_images/UMIYA_LOGO_page-0001-removebg-preview (1).png`;
    const umiyaImg = `${base}Sweets_images/umiya_dark_brown.png`;

    const active = getActiveState();
    const isSweetsActive = active.category === 'sweets';
    const isHampersActive = active.category === 'hampers' || active.category === 'chocolates';
    const isNamkeensActive = active.category === 'namkeens';
    const isLiveSnacksActive = active.category === 'live-snacks';
    const isDairyActive = active.category === 'dairy';
    const isBakeryActive = active.category === 'bakery';
    const isDryFruitsActive = active.category === 'dry-fruits';

    const sweetsSubcategories = [
      { name: 'Luxury Sweets', slug: 'sweets/luxury-sweets/' },
      { name: 'Dry Fruit Sweets', slug: 'sweets/dry-fruit-sweets/' },
      { name: 'Ghee Sweets', slug: 'sweets/ghee-sweets/' },
      { name: 'Bengali Sweets', slug: 'sweets/bengali-sweets/' },
      { name: 'Khoya / Mawa Sweets', slug: 'sweets/khoya-mawa-sweets/' },
      { name: 'Dairy Sweets', slug: 'sweets/dairy-sweets/' },
      { name: 'Gujarati Sweets', slug: 'sweets/gujarati-sweets/' },
      { name: 'Marwadi sweets', slug: 'sweets/marwadi-sweets/' },
      { name: 'Sugar Free Sweets', slug: 'sweets/sugar-free-sweets/' },
      { name: 'Winter Special', slug: 'sweets/winter-special/' },
      { name: 'Festival Favourites', slug: 'sweets/festival-favourites/' }
    ];

    const sweetsListHTML = sweetsSubcategories.map(item => {
      const isSubActive = isSweetsActive && active.subcategory === item.name;
      return `<li><a href="${base}${item.slug}" class="dropdown-sub-link ${isSubActive ? 'active' : ''}" data-category="sweets" data-subcategory="${item.name}">${item.name}</a></li>`;
    }).join('\n              ');

    const hampersListHTML = `
              <li><a href="${base}hampers/dryfruit-hampers/" class="dropdown-sub-link ${active.subcategory === 'Dryfruit Hampers' ? 'active' : ''}" data-category="hampers" data-subcategory="Dryfruit Hampers">Dryfruit Hampers</a></li>
              <li><a href="${base}chocolates-hampers/" class="dropdown-sub-link ${active.subcategory === 'Chocolate Hampers' ? 'active' : ''}" data-category="chocolates" data-subcategory="Chocolate Hampers">Chocolate Hampers</a></li>`;

    return `
  <!-- ==========================================================================
       2. MAIN HEADER (CENTERED LOGO DISPLAY & TAGLINE)
       ========================================================================== -->
  <header class="main-header" id="mainHeader">
    <div class="container">
      <div class="header-inner">

        <!-- Left Column: Hamburger Menu -->
        <div class="header-left-col">
          <button class="hamburger-btn" id="openMobileNavBtn" aria-label="Open Navigation Menu" title="Menu">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <!-- Center Column: Centered Logo & Tagline -->
        <div class="header-center-col">
          <a href="${homeLink}" class="logo-link" id="headerLogoLink">
            <div class="logo-frame-wrap">
              <img src="${logoImg}" alt="Shree Umiya Sweets and Snacks Logo"
                class="header-official-logo">
            </div>
            <h1 class="shop-name-title">
              <span class="title-shree"><i>Shree</i></span>
              <span class="title-umiya"><img src="${umiyaImg}" alt="umiya_dark_brown"
                  class="header-official-logo"></span>
              <span class="title-suffix">Sweets & Snacks</span>
            </h1>
            <p class="shop-tagline-text">"The Real Taste of Indian Sweets"</p>
          </a>
        </div>

        <!-- Right Column: Header Action Icons (Search, Account, Cart) -->
        <div class="header-right-col">
          <!-- 1. Search Icon -->
          <button class="header-action-btn open-search-btn" id="headerSearchBtn" aria-label="Search Sweets and Snacks"
            title="Search (Press /)">
            <i class="fas fa-search header-icon"></i>
            <span></span>
          </button>

          <!-- 2. Account/Login Icon (with gold accent) -->
          <div class="header-user-wrapper">
            <button class="header-action-btn auth-trigger-btn" id="headerUserBtn" aria-label="User Account"
              title="My Account">
              <i class="fas fa-user header-icon user-icon-display"></i>
            </button>

            <!-- User Dropdown Menu -->
            <div class="user-dropdown-menu" id="userDropdownMenu">
              <a href="${isHome ? '#orders' : base + '#orders'}" class="user-dropdown-item logged-in-only"
                onclick="window.auth && window.auth.showToast ? window.auth.showToast('Your recent festive orders are active!') : null">
                <i class="fas fa-box-open"></i> My Orders
              </a>
              <a href="${isHome ? '#addresses' : base + '#addresses'}" class="user-dropdown-item logged-in-only"
                onclick="window.auth && window.auth.showToast ? window.auth.showToast('Delivery Address: Surat, Gujarat') : null">
                <i class="fas fa-map-marker-alt"></i> Saved Addresses
              </a>
              <button class="user-dropdown-item logout-item logged-in-only" onclick="window.auth && window.auth.logout ? window.auth.logout() : null">
                <i class="fas fa-sign-out-alt"></i> Logout
              </button>
              <button class="user-dropdown-item logged-out-only" onclick="window.auth && window.auth.openModal ? window.auth.openModal('login') : null">
                <i class="fas fa-sign-in-alt"></i> Sign In
              </button>
              <button class="user-dropdown-item logged-out-only" onclick="window.auth && window.auth.openModal ? window.auth.openModal('register') : null">
                <i class="fas fa-user-plus"></i> Create Account
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  </header>

  <!-- ==========================================================================
       3. STICKY MAIN NAVIGATION BAR (8 CATEGORIES)
       ========================================================================== -->
  <nav class="main-navbar" id="mainNavbar" aria-label="Product Categories Navigation">
    <div class="container nav-container">
      <ul class="nav-menu-list">
        <!-- 1. Sweets Dropdown -->
        <li class="nav-menu-item has-dropdown ${isSweetsActive ? 'active' : ''}" data-category="sweets">
          <button class="main-nav-link dropdown-toggle-btn ${isSweetsActive ? 'active' : ''}" aria-haspopup="true" aria-expanded="false"
            data-category="sweets">
            <span class="nav-icon"></span>
            <span>Sweets</span>
            <i class="fas fa-chevron-down dropdown-arrow"></i>
          </button>
          <div class="category-dropdown-panel" role="menu" aria-label="Sweets Subcategories">
            <div class="dropdown-top-accent"></div>
            <ul class="dropdown-items-list">
              ${sweetsListHTML}
            </ul>
          </div>
        </li>

        <!-- 2. Hampers Dropdown -->
        <li class="nav-menu-item has-dropdown ${isHampersActive ? 'active' : ''}" data-category="hampers">
          <button class="main-nav-link dropdown-toggle-btn ${isHampersActive ? 'active' : ''}" aria-haspopup="true" aria-expanded="false"
            data-category="hampers">
            <span class="nav-icon"></span>
            <span>Hampers</span>
            <i class="fas fa-chevron-down dropdown-arrow"></i>
          </button>
          <div class="category-dropdown-panel" role="menu" aria-label="Hampers Subcategories">
            <div class="dropdown-top-accent"></div>
            <ul class="dropdown-items-list">
              ${hampersListHTML}
            </ul>
          </div>
        </li>

        <!-- 3. Namkeens -->
        <li class="nav-menu-item ${isNamkeensActive ? 'active' : ''}" data-category="namkeens">
          <a href="${base}namkeens/" class="main-nav-link ${isNamkeensActive ? 'active' : ''}" data-category="namkeens">
            <span class="nav-icon"></span>
            <span>Namkeens</span>
          </a>
        </li>

        <!-- 4. Live Snacks -->
        <li class="nav-menu-item ${isLiveSnacksActive ? 'active' : ''}" data-category="live-snacks">
          <a href="${base}live-snacks/" class="main-nav-link ${isLiveSnacksActive ? 'active' : ''}" data-category="live-snacks">
            <span class="nav-icon"></span>
            <span>Live Snacks</span>
          </a>
        </li>

        <!-- 5. Dairy Products -->
        <li class="nav-menu-item ${isDairyActive ? 'active' : ''}" data-category="dairy">
          <a href="${base}dairy-products/" class="main-nav-link ${isDairyActive ? 'active' : ''}" data-category="dairy">
            <span class="nav-icon"></span>
            <span>Dairy Products</span>
          </a>
        </li>

        <!-- 6. Bakery Products -->
        <li class="nav-menu-item ${isBakeryActive ? 'active' : ''}" data-category="bakery">
          <a href="${base}bakery-products/" class="main-nav-link ${isBakeryActive ? 'active' : ''}" data-category="bakery">
            <span class="nav-icon"></span>
            <span>Bakery Products</span>
          </a>
        </li>

        <!-- 8. Dry Fruits -->
        <li class="nav-menu-item ${isDryFruitsActive ? 'active' : ''}" data-category="dry-fruits">
          <a href="${base}dry-fruits/" class="main-nav-link ${isDryFruitsActive ? 'active' : ''}" data-category="dry-fruits">
            <span class="nav-icon"></span>
            <span>Dry Fruits</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
    `;
  }

  // 4. Generate Mobile Drawer HTML (if page does not already contain #mobileDrawer)
  function ensureMobileDrawer(base) {
    if (document.getElementById('mobileDrawer')) return;

    const logoImg = `${base}Sweets_images/UMIYA_LOGO_page-0001-removebg-preview (1).png`;
    const callImg = `${base}Sweets_images/call3.png`;
    const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') && !window.location.pathname.includes('/sweets/') && !window.location.pathname.includes('/hampers/');
    const homeLink = isHome ? '#home' : (base || './');

    const drawerHTML = `
  <div class="modal-overlay" id="mobileDrawerOverlay"></div>
  <aside class="mobile-drawer" id="mobileDrawer" aria-label="Navigation Menu">
    <div class="mobile-drawer-header">
      <div class="mobile-drawer-brand">
        <img src="${logoImg}" alt="Shree Umiya Logo" class="mobile-drawer-logo">
        <div class="mobile-drawer-title-box">
          <span class="drawer-shop-title">Shree Umiya</span>
          <span class="drawer-tagline">The Real Taste of Indian Sweets</span>
        </div>
      </div>
      <button class="close-mobile-drawer-btn" id="closeMobileNavBtn" aria-label="Close Menu" title="Close Menu">✕</button>
    </div>

    <ul class="mobile-nav-list">
      <li class="mobile-nav-item">
        <a href="${homeLink}" class="mobile-nav-link" onclick="window.siteHeader.closeMobileDrawer()">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${isHome ? '#about' : base + '#about'}" class="mobile-nav-link" onclick="window.siteHeader.closeMobileDrawer()">
          <i class="fas fa-info-circle"></i>
          <span>About Us</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${isHome ? '#outlets' : base + '#outlets'}" class="mobile-nav-link" onclick="window.siteHeader.closeMobileDrawer()">
          <i class="fas fa-store"></i>
          <span>Outlets</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${isHome ? '#reviews' : base + '#reviews'}" class="mobile-nav-link" onclick="window.siteHeader.closeMobileDrawer()">
          <i class="fas fa-star"></i>
          <span>Testimonials</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${isHome ? '#bulk-orders' : base + '#bulk-orders'}" class="mobile-nav-link" onclick="window.siteHeader.closeMobileDrawer()">
          <i class="fas fa-boxes"></i>
          <span>Bulk Orders</span>
        </a>
      </li>
      <li class="mobile-nav-item">
        <a href="${isHome ? '#contact' : base + '#contact'}" class="mobile-nav-link" onclick="window.siteHeader.closeMobileDrawer()">
          <img src="${callImg}" alt="Call" class="call-icon-img">
          <span>Contact Us</span>
        </a>
      </li>

      <!-- Mobile Category Dropdowns Integration -->
      <li class="mobile-nav-item mobile-category-accordion-wrapper">
        <div class="mobile-nav-divider"></div>
        <button class="mobile-nav-link mobile-category-main-toggle" id="mobileCatMainToggle" aria-expanded="false">
          <i class="fas fa-th-large"></i>
          <span>Product Categories</span>
          <i class="fas fa-chevron-down mobile-accordion-arrow"></i>
        </button>
        <div class="mobile-categories-accordion-body" id="mobileCategoriesAccordionBody" style="display: none;">
          <!-- Sweets (11 Varieties) -->
          <div class="mobile-subcat-group">
            <button class="mobile-subcat-header" data-target="mobileSubSweets" aria-expanded="false">
              <span> Sweets (11 Varieties)</span>
              <i class="fas fa-chevron-down subcat-arrow"></i>
            </button>
            <ul class="mobile-subcat-list" id="mobileSubSweets" style="display: none;">
              <li><a href="${base}sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()" style="font-weight: 700; color: #7E0D1C;">★ View All Sweets</a></li>
              <li><a href="${base}sweets/luxury-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Luxury Sweets</a></li>
              <li><a href="${base}sweets/dry-fruit-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Dry Fruit Sweets</a></li>
              <li><a href="${base}sweets/ghee-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Ghee Sweets</a></li>
              <li><a href="${base}sweets/bengali-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Bengali Sweets</a></li>
              <li><a href="${base}sweets/khoya-mawa-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Khoya / Mawa Sweets</a></li>
              <li><a href="${base}sweets/dairy-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Dairy Sweets</a></li>
              <li><a href="${base}sweets/gujarati-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Gujarati Sweets</a></li>
              <li><a href="${base}sweets/marwadi-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Marwadi sweets</a></li>
              <li><a href="${base}sweets/sugar-free-sweets/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Sugar Free Sweets</a></li>
              <li><a href="${base}sweets/winter-special/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Winter Special</a></li>
              <li><a href="${base}sweets/festival-favourites/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Festival Favourites</a></li>
            </ul>
          </div>

          <!-- Hampers -->
          <div class="mobile-subcat-group">
            <button class="mobile-subcat-header" data-target="mobileSubHampers" aria-expanded="false">
              <span> Hampers</span>
              <i class="fas fa-chevron-down subcat-arrow"></i>
            </button>
            <ul class="mobile-subcat-list" id="mobileSubHampers" style="display: none;">
              <li><a href="${base}hampers/index_1.html" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()" style="font-weight: 700; color: #7E0D1C;">★ View All Hampers</a></li>
              <li><a href="${base}hampers/dryfruit-hampers/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Dryfruit Hampers</a></li>
              <li><a href="${base}chocolates-hampers/" class="mobile-sub-link" onclick="window.siteHeader.closeMobileDrawer()">Chocolate Hampers</a></li>
            </ul>
          </div>

          <!-- Standalone Categories -->
          <div class="mobile-subcat-group">
            <a href="${base}namkeens/" class="mobile-subcat-header" onclick="window.siteHeader.closeMobileDrawer()" style="text-decoration:none; display:flex;">
              <span> Namkeens</span>
              <i class="fas fa-chevron-right subcat-arrow"></i>
            </a>
          </div>
          <div class="mobile-subcat-group">
            <a href="${base}live-snacks/" class="mobile-subcat-header" onclick="window.siteHeader.closeMobileDrawer()" style="text-decoration:none; display:flex;">
              <span> Live Snacks</span>
              <i class="fas fa-chevron-right subcat-arrow"></i>
            </a>
          </div>
          <div class="mobile-subcat-group">
            <a href="${base}dairy-products/" class="mobile-subcat-header" onclick="window.siteHeader.closeMobileDrawer()" style="text-decoration:none; display:flex;">
              <span> Dairy Products</span>
              <i class="fas fa-chevron-right subcat-arrow"></i>
            </a>
          </div>
          <div class="mobile-subcat-group">
            <a href="${base}bakery-products/" class="mobile-subcat-header" onclick="window.siteHeader.closeMobileDrawer()" style="text-decoration:none; display:flex;">
              <span> Bakery Products</span>
              <i class="fas fa-chevron-right subcat-arrow"></i>
            </a>
          </div>
          <div class="mobile-subcat-group">
            <a href="${base}dry-fruits/" class="mobile-subcat-header" onclick="window.siteHeader.closeMobileDrawer()" style="text-decoration:none; display:flex;">
              <span> Dry Fruits</span>
              <i class="fas fa-chevron-right subcat-arrow"></i>
            </a>
          </div>
        </div>
      </li>
    </ul>

    <div class="mobile-drawer-contact">
      <div class="drawer-hotline-box">
        <div class="mobile-contact-line">
          <img src="${callImg}" alt="Call" class="call-icon-img">
          <span>+91 78781 62112 / +91 99258 62112</span>
        </div>
        <div class="mobile-contact-line">
          <i class="fas fa-clock"></i>
          <span>Daily 7:00 AM - 10:00 PM</span>
        </div>
      </div>
      <div class="footer-social-links" style="margin-bottom: 14px; justify-content: center;">
        <a href="https://www.instagram.com/shreeumiyasweetsandsnacks?stkn=MWpzdGM0aTM4NXkzbQ==" target="_blank"
          rel="noopener noreferrer" class="social-link" title="Instagram" aria-label="Instagram"><i
            class="fab fa-instagram"></i></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link" title="Facebook"
          aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://wa.me/917878162112" target="_blank" rel="noopener noreferrer" class="social-link"
          title="WhatsApp" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
      <button class="btn btn-whatsapp w-100"
        onclick="window.open('https://wa.me/917878162112?text=Hello%20Shree%20Umiya%20Sweets,%20I%20have%20an%20inquiry', '_blank')">
        <i class="fab fa-whatsapp"></i> Chat on WhatsApp
      </button>
    </div>
  </aside>`;

    const div = document.createElement('div');
    div.innerHTML = drawerHTML;
    while (div.firstChild) {
      document.body.appendChild(div.firstChild);
    }
  }

  // 5. Initialize Events (Positioning, Clamping, Toggle, Drawer, Outside Clicks)
  let eventsInitialized = false;

  function initHeaderEvents() {
    if (eventsInitialized) return;
    eventsInitialized = true;

    // Position mobile dropdown under toggle button and clamp inside viewport
    const positionMobileDropdown = (item) => {
      if (window.innerWidth >= 768) {
        const panel = item.querySelector('.category-dropdown-panel');
        if (panel) panel.style.left = '';
        return;
      }
      const toggleBtn = item.querySelector('.dropdown-toggle-btn');
      const panel = item.querySelector('.category-dropdown-panel');
      if (!toggleBtn || !panel) return;

      const btnRect = toggleBtn.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const panelWidth = Math.min(screenWidth * 0.9, 320);

      let left = btnRect.left;
      const maxLeft = Math.max(8, screenWidth - panelWidth - 8);
      if (left > maxLeft) left = maxLeft;
      if (left < 8) left = 8;

      panel.style.left = `${Math.round(left)}px`;
    };

    // Helper: Slow, smooth horizontal scroll animation (duration ~500ms with cubic easing)
    let currentScrollAnimationId = null;

    const smoothSlowScrollNavbar = (targetLeft, duration = 500) => {
      const navList = document.querySelector('.nav-menu-list');
      if (!navList) return;

      if (currentScrollAnimationId) {
        cancelAnimationFrame(currentScrollAnimationId);
        currentScrollAnimationId = null;
      }

      const startLeft = navList.scrollLeft;
      const distance = targetLeft - startLeft;
      if (Math.abs(distance) < 2) return;

      const startTime = performance.now();

      // Smooth easeInOutCubic for a gentle, luxurious gliding sensation
      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        navList.scrollLeft = startLeft + (distance * ease);

        // Keep any open dropdown panel aligned smoothly beneath toggle
        const openDropdown = document.querySelector('.nav-menu-item.has-dropdown.open');
        if (openDropdown && window.innerWidth < 768) {
          positionMobileDropdown(openDropdown);
        }

        if (progress < 1) {
          currentScrollAnimationId = requestAnimationFrame(step);
        } else {
          currentScrollAnimationId = null;
        }
      };

      currentScrollAnimationId = requestAnimationFrame(step);
    };

    // Helper: Calculate center position and trigger smooth slow scroll on mobile
    const scrollCategoryIntoView = (targetElement, duration = 500) => {
      if (!targetElement || window.innerWidth >= 768) return;

      const navList = targetElement.closest('.nav-menu-list') || document.querySelector('.nav-menu-list');
      if (!navList) return;

      const item = targetElement.closest('.nav-menu-item') || targetElement;
      const navRect = navList.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      // Check if element is already comfortably visible within navList with 24px padding
      const isComfortablyVisible = (
        itemRect.left >= navRect.left + 24 &&
        itemRect.right <= navRect.right - 24
      );

      // Target scrollLeft to bring clicked category into center
      const itemCenterOffset = (itemRect.left - navRect.left) + (itemRect.width / 2);
      const navCenter = navRect.width / 2;
      const delta = itemCenterOffset - navCenter;

      const targetScrollLeft = navList.scrollLeft + delta;
      const maxScroll = Math.max(0, navList.scrollWidth - navList.clientWidth);
      const clampedScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll));

      // If already comfortably visible and nearly centered (< 20px), no need to move
      if (isComfortablyVisible && Math.abs(clampedScrollLeft - navList.scrollLeft) < 20) {
        return;
      }

      smoothSlowScrollNavbar(clampedScrollLeft, duration);
    };

    // Auto-scroll active category to center on initial page load (mobile only)
    const scrollActiveCategory = (duration = 500) => {
      if (window.innerWidth >= 768) return;
      const activeItem = document.querySelector('.nav-menu-list .nav-menu-item.active, .nav-menu-list .main-nav-link.active');
      if (activeItem) {
        scrollCategoryIntoView(activeItem, duration);
      }
    };

    // Run slow scroll after initial page render
    setTimeout(() => {
      scrollActiveCategory(550);
    }, 120);

    const closeAllDropdowns = () => {
      document.querySelectorAll('.nav-menu-item.has-dropdown').forEach(item => {
        item.classList.remove('open');
        const btn = item.querySelector('.dropdown-toggle-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    };

    // Toggle Dropdowns & Category Navbar Click Delegation
    document.addEventListener('click', (e) => {
      // Category Navbar item click on mobile: smoothly & slowly center clicked category
      const navCategoryLink = e.target.closest('.nav-menu-list .main-nav-link, .nav-menu-list .nav-menu-item');
      if (navCategoryLink && window.innerWidth < 768) {
        const item = navCategoryLink.closest('.nav-menu-item') || navCategoryLink;
        scrollCategoryIntoView(item, 500);
      }

      const toggleBtn = e.target.closest('.dropdown-toggle-btn');
      if (toggleBtn) {
        e.preventDefault();
        e.stopPropagation();

        const item = toggleBtn.closest('.nav-menu-item.has-dropdown');
        if (!item) return;

        const isOpen = item.classList.contains('open');

        // Close other dropdowns
        document.querySelectorAll('.nav-menu-item.has-dropdown').forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            const otherBtn = other.querySelector('.dropdown-toggle-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          toggleBtn.setAttribute('aria-expanded', 'true');
          scrollCategoryIntoView(item, 500);
          positionMobileDropdown(item);
        }
        return;
      }

      // Close dropdowns if clicking outside
      if (!e.target.closest('.has-dropdown')) {
        closeAllDropdowns();
      }

      // User account button toggle
      const userBtn = e.target.closest('#headerUserBtn, .auth-trigger-btn');
      if (userBtn) {
        const userMenu = document.getElementById('userDropdownMenu');
        if (userMenu) {
          const isUserMenuOpen = userMenu.classList.contains('active') || userMenu.style.display === 'block';
          userMenu.classList.toggle('active', !isUserMenuOpen);
          userMenu.style.display = isUserMenuOpen ? 'none' : 'block';
        }
      } else if (!e.target.closest('.header-user-wrapper')) {
        const userMenu = document.getElementById('userDropdownMenu');
        if (userMenu) {
          userMenu.classList.remove('active');
          userMenu.style.display = 'none';
        }
      }

      // Hamburger button click (Mobile Drawer Open)
      if (e.target.closest('#openMobileNavBtn, .hamburger-btn')) {
        e.preventDefault();
        openMobileDrawer();
        return;
      }

      // Close Mobile Drawer
      if (e.target.closest('#closeMobileNavBtn, .close-mobile-drawer-btn') || e.target === document.getElementById('mobileDrawerOverlay')) {
        e.preventDefault();
        closeMobileDrawer();
        return;
      }

      // Mobile Drawer Category Main Accordion Toggle
      const catMainToggle = e.target.closest('#mobileCatMainToggle, .mobile-category-main-toggle');
      if (catMainToggle) {
        e.preventDefault();
        e.stopPropagation();
        const body = document.getElementById('mobileCategoriesAccordionBody');
        if (body) {
          const isOpen = catMainToggle.classList.contains('active') || body.style.display === 'block';
          if (isOpen) {
            body.style.display = 'none';
            body.classList.remove('active');
            catMainToggle.classList.remove('active');
            catMainToggle.setAttribute('aria-expanded', 'false');
          } else {
            body.style.display = 'block';
            body.classList.add('active');
            catMainToggle.classList.add('active');
            catMainToggle.setAttribute('aria-expanded', 'true');
          }
        }
        return;
      }

      // Mobile Drawer Subcategory Header Accordion Toggle
      const subcatBtn = e.target.closest('.mobile-subcat-header[data-target]');
      if (subcatBtn) {
        e.preventDefault();
        e.stopPropagation();
        const targetId = subcatBtn.dataset.target;
        const targetList = document.getElementById(targetId);
        if (targetList) {
          const isListOpen = subcatBtn.classList.contains('active') || targetList.style.display === 'block';
          if (isListOpen) {
            targetList.style.display = 'none';
            targetList.classList.remove('active');
            subcatBtn.classList.remove('active');
            subcatBtn.setAttribute('aria-expanded', 'false');
          } else {
            targetList.style.display = 'block';
            targetList.classList.add('active');
            subcatBtn.classList.add('active');
            subcatBtn.setAttribute('aria-expanded', 'true');
          }
        }
        return;
      }
    });

    // Keyboard ESC closes dropdowns, drawer, and user menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
        closeMobileDrawer();
        const userMenu = document.getElementById('userDropdownMenu');
        if (userMenu) {
          userMenu.classList.remove('active');
          userMenu.style.display = 'none';
        }
      }
    });

    // Reposition open dropdown on resize
    window.addEventListener('resize', () => {
      const openItem = document.querySelector('.nav-menu-item.has-dropdown.open');
      if (openItem) positionMobileDropdown(openItem);
    }, { passive: true });

    document.addEventListener('scroll', (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('nav-menu-list')) {
        const openItem = document.querySelector('.nav-menu-item.has-dropdown.open');
        if (openItem && window.innerWidth < 768) {
          positionMobileDropdown(openItem);
        }
      }
    }, true);

    // Mouse / touch emulation drag-to-scroll support on mobile navbar
    const navListEl = document.querySelector('.nav-menu-list');
    if (navListEl && !navListEl.dataset.dragBound) {
      navListEl.dataset.dragBound = 'true';
      let isDown = false;
      let startX = 0;
      let scrollStart = 0;
      let dragged = false;

      navListEl.addEventListener('mousedown', (e) => {
        if (window.innerWidth >= 768) return;
        isDown = true;
        dragged = false;
        startX = e.pageX - navListEl.offsetLeft;
        scrollStart = navListEl.scrollLeft;
      });

      window.addEventListener('mouseup', () => {
        isDown = false;
      });

      navListEl.addEventListener('mousemove', (e) => {
        if (!isDown || window.innerWidth >= 768) return;
        const x = e.pageX - navListEl.offsetLeft;
        const walk = x - startX;
        if (Math.abs(walk) > 4) {
          dragged = true;
        }
        navListEl.scrollLeft = scrollStart - walk;
      });

      navListEl.addEventListener('click', (e) => {
        if (dragged) {
          e.preventDefault();
          e.stopPropagation();
          dragged = false;
        }
      }, true);
    }
  }

  function openMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileDrawerOverlay');
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.classList.add('modal-open');
    }
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileDrawerOverlay');
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  }

  // 6. Floating WhatsApp Button (Every Page)
  function ensureFloatingWhatsApp() {
    if (document.getElementById('whatsappFloatBtn')) return;
    if (!document.body) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureFloatingWhatsApp);
      }
      return;
    }

    const waBtn = document.createElement('a');
    waBtn.id = 'whatsappFloatBtn';
    waBtn.className = 'whatsapp-float-btn';
    waBtn.href = 'https://wa.me/917878162112?text=Hello%20Shree%20Umiya%20Sweets,%20I%20have%20an%20inquiry';
    waBtn.target = '_blank';
    waBtn.rel = 'noopener noreferrer';
    waBtn.setAttribute('aria-label', 'Chat with Shree Umiya Sweets on WhatsApp');
    waBtn.setAttribute('title', 'Chat on WhatsApp');
    waBtn.innerHTML = `
      <svg viewBox="0 0 32 32" class="wa-icon-svg" aria-hidden="true" width="32" height="32">
        <path fill="currentColor" d="M16 2C8.28 2 2 8.28 2 16c0 2.58.7 5.08 2.02 7.28L2 30l6.93-1.99c2.14 1.22 4.58 1.87 7.09 1.87 7.74 0 14-6.28 14-14.02C30.02 8.28 23.74 2 16 2zm0 25.56c-2.22 0-4.38-.6-6.28-1.74l-.45-.27-4.66 1.34 1.35-4.54-.3-.47c-1.25-1.98-1.91-4.28-1.91-6.62 0-6.79 5.53-12.32 12.25-12.32 6.72 0 12.25 5.53 12.25 12.32 0 6.79-5.53 12.26-12.25 12.26zm6.72-9.19c-.37-.18-2.18-1.08-2.52-1.2-.34-.12-.58-.18-.83.18-.25.37-.96 1.2-1.18 1.45-.22.25-.43.28-.8.09-.37-.18-1.57-.58-2.98-1.84-1.1-.98-1.84-2.19-2.06-2.56-.22-.37-.02-.57.16-.75.17-.17.37-.43.56-.65.18-.22.25-.37.37-.62.12-.25.06-.46-.03-.65-.09-.18-.83-2-1.14-2.74-.3-.72-.6-.62-.83-.63h-.7c-.25 0-.65.09-.99.46-.34.37-1.3 1.27-1.3 3.1 0 1.83 1.33 3.6 1.52 3.85.18.25 2.62 4 6.35 5.61.89.38 1.58.61 2.12.78.89.28 1.7.24 2.34.15.72-.11 2.18-.89 2.49-1.75.31-.86.31-1.6.22-1.75-.09-.16-.34-.25-.71-.44z"/>
      </svg>
      <span class="whatsapp-float-tooltip">Chat on WhatsApp</span>
    `;

    document.body.appendChild(waBtn);
  }

  // 7. Custom Element: <site-header>
  class SiteHeader extends HTMLElement {
    connectedCallback() {
      const base = getBasePath();
      this.innerHTML = renderHeaderHTML(base);
      ensureMobileDrawer(base);
      initHeaderEvents();
      ensureFloatingWhatsApp();
    }
  }

  if (!customElements.get('site-header')) {
    customElements.define('site-header', SiteHeader);
  }
  if (!customElements.get('app-header')) {
    customElements.define('app-header', SiteHeader);
  }

  // Also ensure floating WhatsApp is mounted as soon as DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureFloatingWhatsApp);
  } else {
    ensureFloatingWhatsApp();
  }

  // 8. Global Public API
  window.siteHeader = {
    openMobileDrawer,
    closeMobileDrawer,
    getBasePath,
    renderHeaderHTML,
    ensureFloatingWhatsApp
  };

  // Safe fallback for window.app and window.categoryPage
  if (typeof window !== 'undefined') {
    if (!window.app) window.app = {};
    if (!window.app.openMobileDrawer) window.app.openMobileDrawer = openMobileDrawer;
    if (!window.app.closeMobileDrawer) window.app.closeMobileDrawer = closeMobileDrawer;
  }
})();
