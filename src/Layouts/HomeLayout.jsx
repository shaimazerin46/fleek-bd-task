import { Outlet } from "react-router";
import Navbar from "../Components/Common/Navbar";


const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;