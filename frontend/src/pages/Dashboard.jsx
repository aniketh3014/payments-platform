import Topbar from "../components/Topbar"
import Balance from "../components/Balance"
import Users from "../components/Users";
function Dashboard() {
    return <div className="h-screen">
        <div className="bg-gray-100">
            <Topbar />
        </div>
        <div>
            <Balance />
        </div>
        <div>
            <Users />
        </div>
    </div>
}

export default Dashboard;