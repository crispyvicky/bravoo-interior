import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { HomeV } from "./screens/HomeV/HomeV";
import { About } from "./screens/About/About";
import { Services } from "./screens/Services/Services";
import { Portfolio } from "./screens/Portfolio/Portfolio";
import { Contact } from "./screens/Contact/Contact";
import { Process } from "./screens/Process/Process";
import { Lookbook } from "./screens/Lookbook/Lookbook";

export const App = (): JSX.Element => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomeV />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/lookbook" element={<Lookbook />} />
                </Route>
            </Routes>
        </Router>
    );
};
