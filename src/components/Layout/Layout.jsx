import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router";

const Layout = props => {
	const { pathname } = useLocation();
	const { children } = props;
	const [text, setText] = useState("");
	const [speaker, setSpeaker] = useState(false);

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
		//eslint-disable-next-line
	}, [speaker]);

	return (
		<>

			<div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
				{pathname === "/about" ? <>
					<Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher} />
					<div className="page-content">{children}</div>
					<Footer />
				</> : <div className="page-content">{children}</div>}
			</div>
		</>
	);
};

export default Layout;
