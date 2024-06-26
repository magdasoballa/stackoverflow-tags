import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import './BaseLayout.scss'

const BaseLayout = () => {
    return <div className="layout-container">
        <Header />
        <Outlet />
        <Footer />
    </div>
}

export default BaseLayout;