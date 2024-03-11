import { useEffect,useState } from "react";
import axios from "axios";

function Balance() {
 const[balance, setBalance] = useState(0);
 useEffect(() => {
    const jwt = localStorage.getItem('authToken');
    const config = {
      headers: { Authorization: `Bearer ${jwt}` }
    };

    fetch('https://be1.aniketghosh.ninja/api/v1/user/verify', {
      method: 'POST',
      headers: config.headers,
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data.balance);
        setBalance(data.balance);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return <div className="px-4"> 
          <div className="flex shadow-sm w-80 rounded-lg bg-gray-500 mt-10 text-white">
            <div className="font-bold px-4 py-6 text-xl">
              Your balance: 
            </div>
            <div className="font-bold mt-6 text-lg">
                ₹ {balance}
            </div>
        </div>
  </div>

}

export default Balance;