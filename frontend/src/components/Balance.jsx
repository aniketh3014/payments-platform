import { useEffect,useState } from "react";
import axios from "axios";

function Balance() {
 const[balance, setBalance] = useState(0);
 useEffect(() => {
    const jwt = localStorage.getItem('authToken');
    const config = {
      headers: { Authorization: `Bearer ${jwt}` }
    };

    fetch('http://localhost:3000/api/v1/user/verify', {
      method: 'POST',
      headers: config.headers,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.balance);
        setBalance(data.balance);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

    return <div className="flex shadow-sm w-80 rounded-lg bg-gray-100 mt-4">
        <div className="font-bold px-4 py-6 text-xl">
            Your balance: 
        </div>
        <div className="font-semibold mt-7">
            ₹ {balance}
        </div>
    </div>
}

export default Balance;