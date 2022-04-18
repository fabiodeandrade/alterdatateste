import { Dashboard } from "../../components/Dashboard/Dashboard";
import { MyFooter } from "../../components/Footer/Footer"
import { MyHeader } from "../../components/Header/Header"


export const MainPage = () => {
    document.title = "Area Administrativa - Nuvem";
    
    return (
        <>
            <MyHeader />
            <Dashboard />
            <MyFooter />
        </>
    )
}