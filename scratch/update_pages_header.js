const fs = require('fs');
const path = require('path');

const rootDir = 'd:/Shree_Umiya_Sweets_&_Snacks_Website';

const filesToUpdate = [
  'sweets/index.html',
  'sweets/luxury-sweets/index.html',
  'sweets/dry-fruit-sweets/index.html',
  'sweets/ghee-sweets/index.html',
  'sweets/bengali-sweets/index.html',
  'sweets/khoya-mawa-sweets/index.html',
  'sweets/dairy-sweets/index.html',
  'sweets/gujarati-sweets/index.html',
  'sweets/marwadi-sweets/index.html',
  'sweets/sugar-free-sweets/index.html',
  'sweets/winter-special/index.html',
  'sweets/festival-favourites/index.html',
  'hampers/index_1.html',
  'hampers/dryfruit-hampers/index.html',
  'hampers/chocolate-hampers/index.html',
  'chocolates-hampers/index.html',
  'namkeens/index.html',
  'live-snacks/index.html',
  'dairy-products/index.html',
  'bakery-products/index.html',
  'dry-fruits/index.html'
];

filesToUpdate.forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${relPath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // Determine base path prefix
  let basePrefix = '';
  const match = content.match(/href="([^"]*?)css\/style\.css"/);
  if (match) {
    basePrefix = match[1];
  } else {
    // calculate from depth
    const slashCount = relPath.split('/').length - 1;
    basePrefix = '../'.repeat(slashCount);
  }

  // 1. Ensure <script src="...js/header.js"></script> in <head>
  const headerScript = `<script src="${basePrefix}js/header.js"></script>`;
  if (!content.includes('js/header.js')) {
    content = content.replace('</head>', `  ${headerScript}\n</head>`);
  }

  // 2. Replace the main-header and main-navbar with <site-header></site-header>
  // Locate <header class="main-header" id="mainHeader"> ... </nav>
  const headerStartIdx = content.indexOf('<header class="main-header"');
  if (headerStartIdx !== -1) {
    // Find the end of <nav class="main-navbar" ... </nav>
    const navStartIdx = content.indexOf('<nav class="main-navbar"', headerStartIdx);
    if (navStartIdx !== -1) {
      const navEndIdx = content.indexOf('</nav>', navStartIdx);
      if (navEndIdx !== -1) {
        const fullHeaderEndIdx = navEndIdx + '</nav>'.length;
        content = content.substring(0, headerStartIdx) +
          '<!-- Shared Reusable Master Header Component -->\n  <site-header></site-header>' +
          content.substring(fullHeaderEndIdx);
      }
    }
  }

  // 3. Remove old manual mobile drawer if present
  // <div class="modal-overlay" id="mobileDrawerOverlay"></div> ... </aside>
  const drawerOverlayIdx = content.indexOf('<div class="modal-overlay" id="mobileDrawerOverlay"></div>');
  if (drawerOverlayIdx !== -1) {
    const asideEndIdx = content.indexOf('</aside>', drawerOverlayIdx);
    if (asideEndIdx !== -1) {
      const fullAsideEnd = asideEndIdx + '</aside>'.length;
      content = content.substring(0, drawerOverlayIdx) + content.substring(fullAsideEnd);
    }
  } else {
    // Check if <aside class="mobile-drawer" id="mobileDrawer"> is present without overlay before it
    const drawerAsideIdx = content.indexOf('<aside class="mobile-drawer" id="mobileDrawer"');
    if (drawerAsideIdx !== -1) {
      const asideEndIdx = content.indexOf('</aside>', drawerAsideIdx);
      if (asideEndIdx !== -1) {
        const fullAsideEnd = asideEndIdx + '</aside>'.length;
        content = content.substring(0, drawerAsideIdx) + content.substring(fullAsideEnd);
      }
    }
  }

  // 4. Remove old manual mobile bottom bar if present
  const bottomBarIdx = content.indexOf('<nav class="mobile-bottom-bar"');
  if (bottomBarIdx !== -1) {
    const bottomBarEndIdx = content.indexOf('</nav>', bottomBarIdx);
    if (bottomBarEndIdx !== -1) {
      const fullBottomBarEnd = bottomBarEndIdx + '</nav>'.length;
      content = content.substring(0, bottomBarIdx) + content.substring(fullBottomBarEnd);
    }
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Successfully updated ${relPath}`);
});

console.log('All pages processed!');
