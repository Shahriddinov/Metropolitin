import React, {useState, useEffect} from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router";

const Layout = props => {
    const {pathname} = useLocation();
    const [text, setText] = useState("");
    const [speaker, setSpeaker] = useState(false);
    const { children } = props;
    const changeSpeakSwitcher = value => {
        setSpeaker(value);
    };

    useEffect(() => {
        document.onmouseup = () => {
            if (speaker && text !== window.getSelection().toString()) {
                window.responsiveVoice.speak(window.getSelection().toString(), "Russian Female");
                setText(window.getSelection().toString());
            }
        };
    }, [speaker]);

    return (
        <>
            <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
                <>
                        <Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher} />
                            <div className="page-content">{children}</div>
                        <Footer />
                      </>
               
            </div> 
        </>
    );
};

export default Layout;
