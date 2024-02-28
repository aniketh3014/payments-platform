import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    return <div className="flex justify-center h-screen bg-black text-white">
        <div className="h-full flex flex-col justify-center">
            <div
                class="h-min text-card-foreground max-w-md p-4 w-96 bg-gray-600 shadow-lg rounded-lg"
            >
                <div className="flex flex-col p-6">
                <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-red-300 flex items-center justify-center">
                    <span className="text-2xl text-white ml">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold ml-2">{name}</h3>
                </div>
                <div>
                    <div className="mt-3 mb-4">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount">
                        Amount (in Rs)
                    </label>
                    <input
                        onChange={(e) => {
                            setAmount(Number(e.target.value));
                        }}
                        type="number"
                        className="text-black mt-2 flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={async () => {
                        const response = await fetch("http://localhost:3000/api/v1/account/transfer", {
                            method: "POST",
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('authToken')}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                amount: amount,
                                transferTo: id
                            })
                        });
                        if (response.status === 200) {
                            alert("Transaction successful")
                        } else {
                            alert("Transaction failed")
                        }
                        navigate("/dashboard");
                        }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}

export default SendMoney;