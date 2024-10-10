function myFunc() {
  return 'callMe() が呼び出されました。';
}
const myVar = 'これがmyVarの値です。';
export {myFunc as callMe, myVar}; // myFuncのエクスポート名をcallMeに変更
