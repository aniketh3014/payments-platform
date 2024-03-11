import Heading from "../components/Heading";
import Instruction from "../components/Instruction";
import Input from "../components/Input";
import Card from "../components/Card";
import Button from "../components/Button";
import BottomText from "../components/BottomText";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { EmailAtom } from "../store/Atoms";
import { FirstNameAtom } from "../store/Atoms";
import { LastNameAtom } from "../store/Atoms";
import { passwordAtom } from "../store/Atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

    const username = useRecoilValue(EmailAtom);
    const firstName = useRecoilValue(FirstNameAtom);
    const lastName = useRecoilValue(LastNameAtom);
    const password = useRecoilValue(passwordAtom);
    const setFirstname = useSetRecoilState(FirstNameAtom);
    const setLastName = useSetRecoilState(LastNameAtom);
    const setPassword = useSetRecoilState(passwordAtom);
    const setEmail = useSetRecoilState(EmailAtom);

    const navigate = useNavigate();

    return <div>    

        <Card>
            <Heading text={"Signup"} />
            <Instruction text={"Enter your information to create an account"} />
            <Input label={"Email"} innerText={"example@gmail.com"} onChange={e => {
                setEmail(e.target.value)
            }}/>           
            <Input label={"First name"} innerText={"first name"} onChange={e => {
                setFirstname(e.target.value)}} />
            <Input label={"Last name"} innerText={"last name"}  onChange={e => {
                setLastName(e.target.value)}}/>
            <Input label={"Password"} innerText={"password"}  onChange={e => {
                setPassword(e.target.value)}}/>
            <Button text={"Create account"} onClick={async() => {
                const response = await axios.post("http://ec2-13-127-180-46.ap-south-1.compute.amazonaws.com:3000/api/v1/user/signup", {
                    username,
                    firstName,
                    lastName,
                    password
                })
                if (response.status === 200) {
                    alert("Account created successfully")
                } else {
                    alert("Account creation failed")
                }
                localStorage.setItem("authToken", response.data.token)
                navigate("/dashboard")
            }} />
            <BottomText text={"Already have an account?"} linkItem={"Sign in"} to={"/signin"} />
        </Card>
        
    </div>
    

}

export default Signup