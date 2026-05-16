// ===== ハンバーガーメニュー =====
// ボタンクリックで is-open を付け外ししてナビを開閉。
// ナビ内のリンク・ボタンをタップしたら自動的に閉じる。
const hamburgerBtn = document.getElementById('hamburgerBtn');
const headerNav = document.getElementById('headerNav');

if (hamburgerBtn && headerNav) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('is-open');
    hamburgerBtn.classList.toggle('is-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen)); // スクリーンリーダー向けに開閉状態を通知
  });

  // ナビ内のリンク・ボタンタップ後にメニューを閉じる
  headerNav.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      headerNav.classList.remove('is-open');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== ヘッダー: スクロール時に影を追加 =====
// スクロール量が 0px より大きいときだけ is-scrolled クラスを付与する。
// CSSの .header.is-scrolled で影のスタイルを定義している。
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 0);
  }, { passive: true }); // passive: true でスクロールのパフォーマンスを改善
}

// ===== アンカーリンク: スムーズスクロール =====
// href="#section" のようなページ内リンクをなめらかにスクロールする。
// CSS の scroll-behavior: smooth でも同様の効果があるが、
// ここで制御することで固定ヘッダーのオフセット調整なども将来追加しやすい。
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href === '#') return; // プレースホルダーリンク。querySelector('#') はエラーになるためスキップ
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
