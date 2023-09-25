import { Account } from './models/Account'

const account1 = new Account()
account1.deposit(50)
account1.withdraw(10)
let atualBalance: number = account1.consult()

console.log(atualBalance)

// next 5