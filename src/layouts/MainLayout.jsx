import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-120px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;