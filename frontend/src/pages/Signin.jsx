import Card from "../components/Card";
import Instruction from "../components/Instruction";
import Input from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import BottomText from "../components/BottomText";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { EmailAtom } from "../store/Atoms";
import { passwordAtom } from "../store/Atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {

    const username = useRecoilValue(EmailAtom);
    const password = useRecoilValue(passwordAtom);
    const setUsername = useSetRecoilState(EmailAtom);
    const setPassword = useSetRecoilState(passwordAtom);
    const navigate = useNavigate();

    return <div>
        <Card>
            <Heading text={"Sign in"} />
            <Instruction text={"Enter your credentials to access your account"} />
            <Input label={"Email"} innerText={"your email.."} onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            <Input label={"Password"} innerText={"your password.."} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <Button text={"Sign in to your account"} onClick={async() => {
                const response = await axios.post("http://ec2-13-127-180-46.ap-south-1.compute.amazonaws.com/api/v1/user/signin", {
                    username,
                    password
                })
                if (response.status === 200) {
                    alert("Sign in successful")
                }else {
                    alert("Sign in failed")
                }
                localStorage.setItem("authToken", response.data.token);
                navigate("/dashboard")
            }}/>

            <BottomText text={"Dont't have an account?"} linkItem={"Sign up"} to={"/signup"} />
        </Card>
    </div>
}

export default Signin;