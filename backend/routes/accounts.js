import express from 'express';
import { authMiddleware } from '../middlewares.js';
import { Account } from '../db.js';
import mongoose from 'mongoose';

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
    const user_id = req.user_id;

    const userAccount = await Account.findOne({ user_id });

    if (!userAccount) {
        return res.status(404).json({
            message: "Account not found"
        })
    }

    res.json({
        balance: userAccount.balance
    })
});

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    try {

        session.startTransaction();

        const user_id = req.user_id
        const transferTo = req.body.transferTo
        console.log(transferTo)
        const amount = req.body.amount
        console.log(amount)

        const sender = await Account.findOne({ user_id }).session(session);

        if (!sender || sender.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficent balance"
            })
        }

        const toAccount = await Account.findOne({ user_id: transferTo }).session(session);
        console.log(toAccount)
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(411).json({
                message: "Account not found"
            })
            
        }

        await Account.updateOne({ user_id }, { $inc: { balance: -amount } } ).session(session);
        await Account.updateOne({ user_id: transferTo }, { $inc: { balance: amount } } ).session(session);

        await session.commitTransaction();
        console.log("Transaction successful")
        return res.status(200).json({
            message: "Transfer successful"
        })} catch {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Transaction failed"
        })
    }
    
})

export default accountRouter;