function Button({ text, onClick }) {
    return <div className="pt-5"><button onClick={onClick} className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center"> {text} </button> </div>
}

export default Button;