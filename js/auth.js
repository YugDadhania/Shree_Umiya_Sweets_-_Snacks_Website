/**
 * Shree Umiya Sweets and Snacks - Master User Authentication & Account System
 * Seamlessly works across Homepage and all 20+ Category and Subcategory pages
 */

const USER_STORAGE_KEY = "umiya_logged_in_user";
const ORDERS_STORAGE_KEY = "umiya_order_history";

class AuthManager {
  constructor() {
    this.currentUser = this.loadUser();
    this.orders = this.loadOrders();
    this.ensureAuthInDOM();
    this.initEventListeners();
    this.updateUI();
  }

  loadUser() {
    try {
      const saved = localStorage.getItem(USER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  }

  saveUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
    this.updateUI();
  }

  loadOrders() {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveOrder(order) {
    this.orders.unshift(order);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(this.orders));
  }

  showToast(msg) {
    if (window.cart && typeof window.cart.showToast === "function") {
      window.cart.showToast(msg);
      return;
    }
    let toast = document.getElementById("authToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "authToast";
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: #28040a;
        color: #f7e7ce;
        border: 1.5px solid #d4af37;
        padding: 12px 24px;
        border-radius: 30px;
        font-size: 0.92rem;
        font-weight: 600;
        z-index: 99999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.transform = "translateX(-50%) translateY(0)";
    setTimeout(() => {
      toast.style.transform = "translateX(-50%) translateY(100px)";
    }, 3200);
  }

  ensureAuthInDOM() {
    let overlay = document.getElementById("authOverlay");
    let modal = document.getElementById("authModal");

    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "modal-overlay";
      overlay.id = "authOverlay";
      document.body.appendChild(overlay);
    }

    const modalContent = `
        <div class="auth-header">
          <button class="close-modal-x" id="closeAuthBtn" style="color: #FFF; background: rgba(255,255,255,0.2);" aria-label="Close">✕</button>
          <h3 class="auth-title">Shree Umiya Sweets</h3>
          <p class="auth-subtitle">Sign in to track orders, save delivery addresses & earn sweet points</p>
        </div>

        <div class="auth-tabs">
          <button type="button" class="auth-tab-btn active" id="tabLoginBtn">Login</button>
          <button type="button" class="auth-tab-btn" id="tabRegisterBtn">Create Account</button>
        </div>

        <div class="auth-body">
          <div id="authErrorMessage" style="display: none; color: var(--primary-red); font-size: 0.82rem; margin-bottom: 12px; font-weight: 600;"></div>

          <!-- Login Form Section -->
          <div id="loginFormSection">
            <form id="loginForm">
              <div class="form-group" style="margin-bottom: 14px;">
                <label class="form-label" for="loginIdentifier" style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Mobile Number or Email</label>
                <input type="text" class="form-input" id="loginIdentifier" placeholder="e.g. 78781 62112" required style="width: 100%; padding: 10px 12px; border: 1.5px solid #d4af37; border-radius: 6px;">
              </div>
              <div class="form-group" style="margin-bottom: 16px;">
                <label class="form-label" for="loginPassword" style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Password</label>
                <input type="password" class="form-input" id="loginPassword" placeholder="Enter your password" required style="width: 100%; padding: 10px 12px; border: 1.5px solid #d4af37; border-radius: 6px;">
              </div>
              <button type="submit" class="btn btn-primary w-100" style="width: 100%; padding: 11px; background: #8B0000; color: #FFF; border: none; border-radius: 6px; font-weight: 700; cursor: pointer;">Sign In</button>
            </form>

            <div class="demo-login-box" style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed rgba(212,175,55,0.4); text-align: center;">
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">For instant testing:</p>
              <button type="button" class="btn btn-gold w-100" id="demoLoginBtn" style="width: 100%; padding: 9px; font-size: 0.84rem; font-weight: 700;">
                1-Click Demo Login (Rameshbhai)
              </button>
            </div>
          </div>

          <!-- Register Form Section -->
          <div id="registerFormSection" style="display: none;">
            <form id="registerForm">
              <div class="form-group" style="margin-bottom: 12px;">
                <label class="form-label" for="regName" style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">Full Name</label>
                <input type="text" class="form-input" id="regName" placeholder="e.g. Rajesh Patel" required style="width: 100%; padding: 9px 12px; border: 1.5px solid #d4af37; border-radius: 6px;">
              </div>
              <div class="form-group" style="margin-bottom: 12px;">
                <label class="form-label" for="regPhone" style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">Mobile Number</label>
                <input type="tel" class="form-input" id="regPhone" placeholder="10-digit mobile number" required style="width: 100%; padding: 9px 12px; border: 1.5px solid #d4af37; border-radius: 6px;">
              </div>
              <div class="form-group" style="margin-bottom: 12px;">
                <label class="form-label" for="regEmail" style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">Email (Optional)</label>
                <input type="email" class="form-input" id="regEmail" placeholder="yourname@gmail.com" style="width: 100%; padding: 9px 12px; border: 1.5px solid #d4af37; border-radius: 6px;">
              </div>
              <div class="form-group" style="margin-bottom: 16px;">
                <label class="form-label" for="regPassword" style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px;">Create Password</label>
                <input type="password" class="form-input" id="regPassword" placeholder="Minimum 6 characters" required style="width: 100%; padding: 9px 12px; border: 1.5px solid #d4af37; border-radius: 6px;">
              </div>
              <button type="submit" class="btn btn-primary w-100" style="width: 100%; padding: 11px; background: #8B0000; color: #FFF; border: none; border-radius: 6px; font-weight: 700; cursor: pointer;">Register & Explore</button>
            </form>
          </div>
        </div>
      `;

    if (!modal) {
      modal = document.createElement("div");
      modal.className = "auth-modal";
      modal.id = "authModal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-label", "User Account");
      modal.innerHTML = modalContent;
      document.body.appendChild(modal);
    } else if (!modal.querySelector("#loginForm")) {
      modal.innerHTML = modalContent;
    }

    // Ensure userDropdownMenu exists in header
    document.querySelectorAll(".header-user-wrapper").forEach(wrapper => {
      if (!wrapper.querySelector("#userDropdownMenu")) {
        const menu = document.createElement("div");
        menu.className = "user-dropdown-menu";
        menu.id = "userDropdownMenu";
        menu.innerHTML = `
          <div class="user-dropdown-header" style="padding: 12px 16px; background: var(--bg-cream); border-bottom: 1px solid rgba(212,175,55,0.3); font-weight: 700; font-size: 0.92rem; color: var(--primary-deep-maroon);">
            <i class="fas fa-user-circle" style="color: var(--gold-dark); margin-right: 6px;"></i>
            <span class="user-full-name-display">My Account</span>
          </div>
          <a href="#orders" class="user-dropdown-item logged-in-only" onclick="window.auth.showToast('Your recent festive orders are active!');">
            <i class="fas fa-box-open"></i> My Orders
          </a>
          <a href="#addresses" class="user-dropdown-item logged-in-only" onclick="window.auth.showToast('Delivery Address: Surat, Gujarat');">
            <i class="fas fa-map-marker-alt"></i> Saved Addresses
          </a>
          <button type="button" class="user-dropdown-item logout-item logged-in-only" onclick="window.auth.logout()">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
          <button type="button" class="user-dropdown-item logged-out-only" onclick="window.auth.openModal('login')">
            <i class="fas fa-sign-in-alt"></i> Sign In
          </button>
          <button type="button" class="user-dropdown-item logged-out-only" onclick="window.auth.openModal('register')">
            <i class="fas fa-user-plus"></i> Create Account
          </button>
        `;
        wrapper.appendChild(menu);
      }
    });
  }

  login(identifier, password) {
    if (!identifier || !password) {
      return { success: false, message: "Please enter your Mobile Number or Email and Password." };
    }

    const name = identifier.includes("@") ? identifier.split("@")[0] : "Customer";
    const user = {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      identifier: identifier,
      phone: identifier.match(/^\d+$/) ? identifier : "+91 78781 62112",
      email: identifier.includes("@") ? identifier : "customer@surat.in",
      loginTime: new Date().toISOString()
    };

    this.saveUser(user);
    this.closeModal();
    this.showToast(`Welcome back, ${user.name}! 🙏`);
    return { success: true };
  }

  register(fullName, phone, email, password) {
    if (!fullName || !phone || !password) {
      return { success: false, message: "Please enter your Name, Phone Number, and Password." };
    }

    const user = {
      name: fullName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : "",
      loginTime: new Date().toISOString()
    };

    this.saveUser(user);
    this.closeModal();
    this.showToast(`Welcome to Shree Umiya Sweets, ${user.name}! 🪔`);
    return { success: true };
  }

  logout() {
    const prevName = this.currentUser ? this.currentUser.name : "Customer";
    this.saveUser(null);
    this.showToast(`Logged out successfully. See you soon, ${prevName}!`);
    this.closeUserDropdown();
  }

  openModal(tab = "login") {
    this.ensureAuthInDOM();
    const modal = document.getElementById("authModal");
    const overlay = document.getElementById("authOverlay");
    if (modal && overlay) {
      modal.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("modal-open");
      this.switchTab(tab);
    }
  }

  closeModal() {
    const modal = document.getElementById("authModal");
    const overlay = document.getElementById("authOverlay");
    if (modal && overlay) {
      modal.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  }

  switchTab(tab) {
    const loginTabBtn = document.getElementById("tabLoginBtn");
    const registerTabBtn = document.getElementById("tabRegisterBtn");
    const loginForm = document.getElementById("loginFormSection");
    const registerForm = document.getElementById("registerFormSection");
    const authError = document.getElementById("authErrorMessage");

    if (authError) {
      authError.textContent = "";
      authError.style.display = "none";
    }

    if (tab === "login") {
      if (loginTabBtn) loginTabBtn.classList.add("active");
      if (registerTabBtn) registerTabBtn.classList.remove("active");
      if (loginForm) loginForm.style.display = "block";
      if (registerForm) registerForm.style.display = "none";
    } else {
      if (loginTabBtn) loginTabBtn.classList.remove("active");
      if (registerTabBtn) registerTabBtn.classList.add("active");
      if (loginForm) loginForm.style.display = "none";
      if (registerForm) registerForm.style.display = "block";
    }
  }

  toggleUserDropdown() {
    this.ensureAuthInDOM();
    const menu = document.getElementById("userDropdownMenu");
    if (menu) {
      menu.classList.toggle("active");
    }
  }

  closeUserDropdown() {
    const menu = document.getElementById("userDropdownMenu");
    if (menu) {
      menu.classList.remove("active");
    }
  }

  initEventListeners() {
    // Open login/user triggers across desktop and mobile
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest(".auth-trigger-btn, #headerUserBtn");
      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        if (this.currentUser) {
          this.toggleUserDropdown();
        } else {
          this.openModal("login");
        }
        return;
      }

      // Close user dropdown when clicking outside
      const userWrapper = e.target.closest(".header-user-wrapper");
      if (!userWrapper) {
        this.closeUserDropdown();
      }

      // Modal close button and overlay
      if (e.target.closest("#closeAuthBtn") || e.target.closest("#closeAuthModalBtn") || e.target.closest("#authOverlay")) {
        this.closeModal();
      }

      // Tab switcher delegation
      if (e.target.closest("#tabLoginBtn")) {
        this.switchTab("login");
      } else if (e.target.closest("#tabRegisterBtn")) {
        this.switchTab("register");
      }

      // 1-Click Demo Login
      if (e.target.closest("#demoLoginBtn")) {
        e.preventDefault();
        this.saveUser({
          name: "Rameshbhai Patel",
          phone: "+91 78781 62112",
          email: "ramesh.patel@surat.in",
          loginTime: new Date().toISOString()
        });
        this.closeModal();
        this.showToast("Welcome back, Rameshbhai Patel! 🙏");
      }
    });

    // Form submit delegation
    document.addEventListener("submit", (e) => {
      if (e.target && e.target.id === "loginForm") {
        e.preventDefault();
        const idInput = document.getElementById("loginIdentifier");
        const passInput = document.getElementById("loginPassword");
        const errEl = document.getElementById("authErrorMessage");

        const result = this.login(idInput ? idInput.value : "", passInput ? passInput.value : "");
        if (!result.success && errEl) {
          errEl.textContent = result.message;
          errEl.style.display = "block";
        }
      } else if (e.target && e.target.id === "registerForm") {
        e.preventDefault();
        const nameInput = document.getElementById("regName");
        const phoneInput = document.getElementById("regPhone");
        const emailInput = document.getElementById("regEmail");
        const passInput = document.getElementById("regPassword");
        const errEl = document.getElementById("authErrorMessage");

        const result = this.register(
          nameInput ? nameInput.value : "",
          phoneInput ? phoneInput.value : "",
          emailInput ? emailInput.value : "",
          passInput ? passInput.value : ""
        );
        if (!result.success && errEl) {
          errEl.textContent = result.message;
          errEl.style.display = "block";
        }
      }
    });

    // Keyboard shortcut Escape to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
        this.closeUserDropdown();
      }
    });
  }

  updateUI() {
    const userLabelEls = document.querySelectorAll(".user-name-display");
    const userIconEls = document.querySelectorAll(".user-icon-display");
    const loggedInMenuItems = document.querySelectorAll(".logged-in-only");
    const loggedOutMenuItems = document.querySelectorAll(".logged-out-only");
    const fullNameDisplay = document.querySelectorAll(".user-full-name-display");

    if (this.currentUser) {
      userLabelEls.forEach(el => {
        el.textContent = this.currentUser.name.split(" ")[0];
      });
      userIconEls.forEach(el => {
        el.className = "fas fa-user-check header-icon active-user";
        el.style.color = "var(--gold-dark, #b8860b)";
      });
      fullNameDisplay.forEach(el => {
        el.textContent = this.currentUser.name;
      });
      loggedInMenuItems.forEach(el => (el.style.display = "block"));
      loggedOutMenuItems.forEach(el => (el.style.display = "none"));
    } else {
      userLabelEls.forEach(el => {
        el.textContent = "Login";
      });
      userIconEls.forEach(el => {
        el.className = "fas fa-user header-icon";
        el.style.color = "";
      });
      fullNameDisplay.forEach(el => {
        el.textContent = "My Account";
      });
      loggedInMenuItems.forEach(el => (el.style.display = "none"));
      loggedOutMenuItems.forEach(el => (el.style.display = "block"));
    }
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.auth = new AuthManager();
  });
} else {
  window.auth = new AuthManager();
}
