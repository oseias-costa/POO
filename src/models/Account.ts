export class Account {
    balance: number

    constructor(){
        this.balance = 0
    }

    consult(): number {
        return this.balance
    }

    deposit(value: number): boolean {
        if(value >= 0){
            this.balance += value
            return true
        }
        return false
    }

    withdraw(value: number): boolean {
        if(this.balance >= value && value >= 0){
            this.balance -= value
            return true
        }
        return false
    }

}