import { useEffect, useState } from "react";

function Topbar() {
    const [Name, setName] = useState("");
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
            // console.log(data.firstName);
            setName(data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1))   ;
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    return <div className="shadow h-14 flex justify-between bg-inherit">
    <div className="flex flex-col justify-center h-full ml-5">
        PaymentsWeb
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-5">
            Hello, {Name}
        </div>
        <div className="rounded-full h-12 w-12 bg-blue-200 flex justify-center mt-1 mr-3">
            <div className="flex flex-col justify-center h-full text-xl">
                {Name[0]}
            </div>
        </div>
    </div>
</div>

}

export default Topbar;