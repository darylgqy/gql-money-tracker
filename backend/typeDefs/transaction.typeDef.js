import { defaultTypeResolver } from "graphql"

const transactionTypeDef = `#graphql
    type Transaction {
        _id: ID!
        userId: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String
        date: String!
    }

    type Query {
        transactions: [Transaction!] #fetch all
        transaction(transactionId:ID!): Transaction #fetch just 1 transaction

        # to-do => add category statistics query
    }

    type Mutation { #possible CRUD actions on the transactions
        createTransaction(input: CreateTransactionInput!): Transaction
        updateTransaction(input: UpdateTransactionInput!): Transaction
        deleteTransaction(transactionId:ID!): Transaction!
    }

    input CreateTransactionInput {
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        date: String!
        location: String
    }

    input UpdateTransactionInput {
        transactionId: ID!
        description: String
        paymentType: String
        category: String
        amount: Float
        location: String
        date: String
    }

`

export default transactionTypeDef;