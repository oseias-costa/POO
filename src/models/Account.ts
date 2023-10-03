export class Account {
  private _balance: number;

  constructor() {
    this._balance = 0;
  }

  consult(): number {
    return this._balance;
  }

  deposit(value: number): boolean {
    if (value >= 0) {
      this._balance += value;
      return true;
    }
    return false;
  }

  withdraw(value: number): boolean {
    if (this._balance >= value && value >= 0) {
      this._balance -= value;
      return true;
    }
    return false;
  }
}
