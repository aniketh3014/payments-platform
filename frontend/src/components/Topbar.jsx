import { useEffect, useState } from "react";

function Topbar() {
    const [Name, setName] = useState("");
    useEffect(() => {
        const jwt = localStorage.getItem('authToken');
        const config = {
          headers: { Authorization: `Bearer ${jwt}` }
        };
    
        fetch('http://ec2-13-127-180-46.ap-south-1.compute.amazonaws.com/api/v1/user/verify', {
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

    return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-5 font-mono">
        PaymentsWeb
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4 font-sans">
            Hello, {Name}
        </div>
        <div className="rounded-full h-12 w-12 bg-blue-300 flex justify-center mt-1 mr-3">
            <div className="flex flex-col justify-center h-full text-2xl font-sans">
                {Name[0]}
            </div>
        </div>
    </div>
</div>

}

export default Topbar;