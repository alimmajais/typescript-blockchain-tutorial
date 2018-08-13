
interface TransactionData{
    from: string;
    to: string;
    amount: string;
}

export default class Transaction implements TransactionData{
    constructor(
        public from: string,
        public to: string,
        public amount: string
    ){}
}