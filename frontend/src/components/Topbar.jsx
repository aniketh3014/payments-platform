function Topbar({name}) {
    return <div className="shadow h-14 flex justify-between bg-inherit">
    <div className="flex flex-col justify-center h-full ml-5">
        Your PayMent App
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-5">
            {}
        </div>
        <div className="rounded-full h-12 w-12 bg-blue-200 flex justify-center mt-1 mr-3">
            <div className="flex flex-col justify-center h-full text-xl">
                {}
            </div>
        </div>
    </div>
</div>

}

export default Topbar;