import { Outlet } from "react-router-dom";
import { MainHeaderSection } from "../screens/HomeV/sections/MainHeaderSection/MainHeaderSection";
import { ContactFooterSection } from "../screens/HomeV/sections/ContactFooterSection/ContactFooterSection";

export const Layout = (): JSX.Element => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <MainHeaderSection />
            <main className="flex-grow">
                <Outlet />
            </main>
            <ContactFooterSection />
        </div>
    );
};
