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

        const user_id = req.user_id;
        const transferTo = req.body.transferTo;
        const amount = req.body.amount;

        const sender = await Account.findOne({ user_id }).session(session);

        if (!sender || sender.balance < amount) {
            await session.abortTransaction();
            alert("Insufficent balance");
            return res.status(400).json({
                message: "Insufficent balance"
            })
        }

        const toAccount = await Account.findOne({ user_id: "65dc15ddc1c86cccdce16197" }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            alert("Account not found");
            return res.status(400).json({
                message: "Account not found"
            })
            
        }

        await Account.updateOne({ user_id }, { $inc: { balance: -amount } } ).session(session);
        await Account.updateOne({ user_id: transferTo }, { $inc: { balance: amount } } ).session(session);

        await session.commitTransaction();

        res.json({
            message: "Transfer successful"
        })
        alert("Transfer successful");

    } catch (err) {
        await session.abortTransaction();
        alert("Transaction failed");
        return res.status(400).json({
            message: "Transaction failed", err
        })
    }
    
})

export default accountRouter;