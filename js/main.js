// ======================================
// ハンバーガーメニュー
// ======================================

const menuButton = document.querySelector('.l-header__menu-button');
const nav = document.querySelector('.l-header__nav');
const navLinks = document.querySelectorAll('.l-header__nav a');

// ボタンが存在しない場合は処理しない
if (menuButton && nav) {

  // 開閉処理
  menuButton.addEventListener('click', function () {
    const isOpen = menuButton.classList.toggle('is-open');
    nav.classList.toggle('is-open');

    // aria対応
    menuButton.setAttribute('aria-expanded', isOpen);
  });

  // ナビリンククリックで閉じる（LP用）
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuButton.classList.remove('is-open');
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });

}

