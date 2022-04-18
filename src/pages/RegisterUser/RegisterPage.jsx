import { MyFooter } from "../../components/Footer/Footer"
import { MyHeader } from "../../components/Header/Header"
import { UserRegister } from "../../components/UserRegister/UserRegister"


export const RegisterPage = () => {
    return (
        <>
            <MyHeader />
            <UserRegister />
            <MyFooter />
        </>
    )
}