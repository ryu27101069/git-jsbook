// confirmダイアログを表示
const forHere = confirm('店内ご利用ですか？');
const total = calc(forHere) * 600;
document.querySelector('#total').textContent = total;

// OKをクリックしたときは消費税率を1.1に
// キャンセルをクリックしたときは消費税率を1.08にする
function calc(here) {
  let tax = 1.08;
  if (here) {
    tax = 1.1;
  }
  return tax;
}
