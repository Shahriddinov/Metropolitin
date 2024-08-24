import React from 'react';
import "./finaletest.scss"
import {Link} from "react-router-dom";

const FinalTest = () => {
    return (
        <div className="backgroundPage">
            <div style={{padding: " 20px 60px"}}>
                <div className="blur">
                    <div className="finalTest">
                        <div className="finalTest_head">
                            <Link style={{textDecoration: "none", color: "#8D8484"}} to="/about">
                                <div className="finalTest_head_homes">Bosh sahifaga qaytish</div>
                            </Link>

                            <div className="finalTest_head_homes">00:00:00</div>

                        </div>
                        <form className="finalTest_lists">
                            <div className="finalTest_lists_boxTest">
                                <div className="finalTest_lists_boxTest_testTitle">1. Bolalarda silni aniqlashning
                                    assosiy usullari
                                </div>
                                <div className="finalTest_lists_boxTest_checks">
                                    <label className="finalTest_lists_boxTest_checks_TestLabel" htmlFor="one">
                                        <input className="finalTest_lists_boxTest_checks_TestInput" type="checkbox"
                                               name="one" id="one"/>
                                        yoppasiga tuberkulindiagnostika
                                    </label>
                                    <label className="finalTest_lists_boxTest_checks_TestLabel" htmlFor="two">
                                        <input className="finalTest_lists_boxTest_checks_TestInput" type="checkbox"
                                               name="two" id="two"/>
                                        xaf guruhini silga tekshirish
                                    </label>
                                    <label className="finalTest_lists_boxTest_checks_TestLabel" htmlFor="three">
                                        <input className="finalTest_lists_boxTest_checks_TestInput" type="checkbox"
                                               name="three" id="three"/>
                                        ftiziatr kabuliga kelganlarni tekshirish
                                    </label>
                                </div>
                            </div>
                            <div className="finalTest_lists_boxTest">
                                <div className="finalTest_lists_boxTest_testTitle">2. Bolalarda silni aniqlashning
                                    assosiy usullari
                                </div>
                                <div className="finalTest_lists_boxTest_checks">
                                    <label className="finalTest_lists_boxTest_checks_TestLabel" htmlFor="one">
                                        <input className="finalTest_lists_boxTest_checks_TestInput" type="checkbox"
                                               name="one" id="one"/>
                                        yoppasiga tuberkulindiagnostika
                                    </label>
                                    <label className="finalTest_lists_boxTest_checks_TestLabel" htmlFor="two">
                                        <input className="finalTest_lists_boxTest_checks_TestInput" type="checkbox"
                                               name="two" id="two"/>
                                        xaf guruhini silga tekshirish
                                    </label>
                                    <label className="finalTest_lists_boxTest_checks_TestLabel" htmlFor="three">
                                        <input className="finalTest_lists_boxTest_checks_TestInput" type="checkbox"
                                               name="three" id="three"/>
                                        ftiziatr kabuliga kelganlarni tekshirish
                                    </label>
                                </div>
                            </div>
                            <button className="finalTest_lists_TestButton" type="submit">Testni
                                Yakunlsh
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalTest;