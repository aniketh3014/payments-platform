
function Card({ children }) {

    return <div className="bg-gray-900 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-gray-800 p-2 h-max px-5 w-96 shadow-md">
                { children }
            </div>
        </div>
    </div>
}

export default Card;
