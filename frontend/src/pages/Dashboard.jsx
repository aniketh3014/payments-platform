import Topbar from "../components/Topbar"
import Balance from "../components/Balance"
import Users from "../components/Users";
function Dashboard() {
    return <div className="h-screen bg-black">
        <div className="bg-gray-800 font-bold font-serif text-white">
            <Topbar />
        </div>
        <div>
            <Balance />
        </div>
        <div className="text-white font-semibold">
            <Users />
        </div>
    </div>
}

export default Dashboard;