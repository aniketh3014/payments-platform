function Balance({ value }) {
    return <div className="flex shadow-sm w-80 rounded-lg bg-gray-100 mt-4">
        <div className="font-bold px-4 py-6 text-xl">
            Your balance: 
        </div>
        <div className="font-semibold mt-7">
            ₹ {value}
        </div>
    </div>
}

export default Balance;