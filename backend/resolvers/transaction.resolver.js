const transactionResolver = {
    Query: {
        transactions: async (_,__, context) => {
            try {
                if (!context.getUser()) throw new Error("Unauthorized");
                const userId = await context.getUser()._id;

                const transactions = await Transaction.find({ userId });
                return transactions;
            } catch (err) {
                console.error("Error getting transactions:", err);
                throw new Error("Error getting transactions");
            }
        },
        transaction: async (_, { transactionId },) => {
            try {
                const transaction = await Transaction.findById(transactionId);
                return transaction
            } catch (err) {
                console.error("Error getting transaction:", err);
                throw new Error("Error getting transaction");
            }
        }
    },
    Mutation: {}
}

export default transactionResolver; 