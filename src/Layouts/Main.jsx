import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div className="relative h-full w-full bg-black overflow-hidden">
            <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="fixed bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;