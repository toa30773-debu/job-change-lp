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
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
