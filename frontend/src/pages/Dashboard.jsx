import Topbar from "../components/Topbar"
import Balance from "../components/Balance"

function Dashboard() {
    return <div className="h-screen">
        <div className="bg-gray-100">
            <Topbar />
        </div>
        <div>
            <Balance value={"1000"} />
        </div>
    </div>
}

export default Dashboard;