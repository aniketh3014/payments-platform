import { useRecoilValue, useSetRecoilState } from "recoil"; 


function Input({innerText, label, onChange}) {
    return <div className="pt-4">
        <div className="mb-2 text-sm font-bold text-white text-left">
            {label}
        </div>
        <input  onChange={onChange} placeholder={innerText} className="bg-gray-300 border border-gray-300 text-lg rounded-lg w-full p-2.5 text-black "></input>
    </div>
}

export default Input;