import Heading from "../components/Heading";
import Instruction from "../components/Instruction";
import Input from "../components/Input";
import Card from "../components/Card";
import Button from "../components/Button";
import BottomText from "../components/BottomText";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { EmailAtom } from "../atoms/EmailAtom";


function Signup() {
    const email = useRecoilValue(EmailAtom);
    const setEmail = useSetRecoilState(EmailAtom);
    return <div>
        <Card>
            <Heading text={"Signup"} />
            <Instruction text={"Enter your information to create an account"} />
            <Input label={"Email"} innerText={"example@gmail.com"} onChange={e => {
                setEmail(e.target.value);
            }}/>
            
            <Input label={"First name"} innerText={"first name"} />
            <Input label={"Last name"} innerText={"last name"} />
            <Input label={"Password"} innerText={"password"} />
            <Button text={"Create account"} />
            <BottomText text={"Already have an account?"} linkItem={"Sign in"} to={"/signin"} />
        </Card>
    </div>
    

}

export default Signup