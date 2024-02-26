import Card from "../components/Card";
import Instruction from "../components/Instruction";
import Input from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import BottomText from "../components/BottomText";

function Signin() {
    return <div>
        <Card>
            <Heading text={"Sign in"} />
            <Instruction text={"Enter your credentials to access your account"} />
            <Input label={"Email"} innerText={"your email.."} />
            <Input label={"Password"} innerText={"your password.."} />
            <Button text={"Sign in to your account"} />
            <BottomText text={"Dont't have an account?"} linkItem={"Sign up"} to={"/signup"} />
        </Card>
    </div>
}

export default Signin;