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

