import { Link } from "react-router-dom";

function BottomText({text, linkItem, to }) {
    return <div className="text-gray-400">
        <div className="py-2 text-sm flex justify-center">
      <div>
        {text}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer text-blue-400" to={to}>
        {linkItem}
      </Link>
    </div>
    </div>
}

export default BottomText;