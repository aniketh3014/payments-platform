import { useEffect, useState } from "react"
import Button from "./Button"
import { useNavigate } from "react-router-dom";


function Users() {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://ec2-13-127-180-46.ap-south-1.compute.amazonaws.com/api/v1/user/bulk?filter=${filter}`, {
                    method: 'POST',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('authToken')}`
                    }
                });
                const data = await response.json();
                setUsers(data.user);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [filter]);

    return <div className="m-4">
        <div className="font-bold mt-20 text-lg">
            Users
        </div>
        <div className="my-5">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-80 px-2 py-1 border rounded-lg bg-gray-50 border-slate-200 opacity-80"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
        
    </div>
}

function User({user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between bg-gray-500 shadow rounded-lg px-4 p-2 mb-3">
        <div className="flex items-center">
            <div className="rounded-full h-12 w-12 bg-red-300 flex justify-center ">
                <div className="flex flex-col justify-center h-full text-2xl">
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex font-black">
                <div className="font-black p-2 font-serif">
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex items-center">
            <Button onClick={() => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} text={"Send Money"} />
        </div>
    </div>
}

export default Users;