import { Outlet } from "react-router";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";


const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;