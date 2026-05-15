// ===== S07: タブ切り替え（職種・業種・エリア）=====
// .tab-btn をクリックすると data-tab 属性に対応するパネルだけ表示する。
// アクティブなタブ・パネルの切り替えは is-active クラスの付け外しで行う。
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab; // クリックされたボタンの data-tab 属性値を取得

    // すべてのタブとパネルから is-active を除去
    tabBtns.forEach(b => b.classList.remove('is-active'));
    tabContents.forEach(c => c.classList.remove('is-active'));

    // クリックされたタブと対応するパネルに is-active を付与
    btn.classList.add('is-active');
    document.getElementById(target)?.classList.add('is-active');
  });
});

// ===== S03: 特集スライダー 自動ループ =====
// カードを複製して末尾に追加し、scrollLeft をリセットすることでループを実現する。
// 「スクロール幅の半分」を超えたらリセットする仕組みで、見た目上シームレスに見える。
const slider = document.querySelector('.feature__slider');
if (slider) {
  // 元のカードをすべて複製して末尾に追加（シームレスループのため）
  const cards = Array.from(slider.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true'); // スクリーンリーダーに重複を読まれないようにする
    slider.appendChild(clone);
  });

  const speed = 0.6; // 1フレームあたりのスクロール量（px）。大きくすると速くなる
  let rafId;
  let isPaused = false;

  function tick() {
    if (!isPaused) {
      slider.scrollLeft += speed;

      // スクロール位置がオリジナル分を超えたら先頭にリセット（ループ処理）
      const halfWidth = slider.scrollWidth / 2;
      if (slider.scrollLeft >= halfWidth) {
        slider.scrollLeft -= halfWidth;
      }
    }
    rafId = requestAnimationFrame(tick); // 次フレームで再呼び出し
  }

  rafId = requestAnimationFrame(tick);

  // マウスオーバー中はスライドを一時停止
  slider.addEventListener('mouseenter', () => { isPaused = true; });
  slider.addEventListener('mouseleave', () => { isPaused = false; });

  // タッチ中はスライドを一時停止（タッチ終了から 1.5秒後に再開）
  slider.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
  slider.addEventListener('touchend', () => {
    setTimeout(() => { isPaused = false; }, 1500);
  }, { passive: true });
}
