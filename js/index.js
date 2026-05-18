const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('is-active'));
    tabContents.forEach(c => c.classList.remove('is-active'));

    btn.classList.add('is-active');
    document.getElementById(target)?.classList.add('is-active');
  });
});
