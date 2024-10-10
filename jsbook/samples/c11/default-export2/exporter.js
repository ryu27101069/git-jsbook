// 学生データのクラス
// 専攻、学年、名前を保存可能
export default class { // 無名クラスをデフォルトエクスポート
  major;
  grade;
  firstName = '';
  lastName = '';
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
