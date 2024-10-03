import React, {useEffect} from 'react';
import './finalTest.scss';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getCreateQuiz} from "../../../redux/QuizCreateSlice";
import {getAllGroups} from "../../../redux/GroupSlice";

const FinalTest = () => {
    const dispatch = useDispatch();

    // URL query stringdan ma'lumotlarni olish
    const query = new URLSearchParams(useLocation().search);
    const groupID = query.get('group');
    const quizID = query.get('quiz');
    const {quizItems} = useSelector((state) => state.quizCreateSlice);
    useEffect(() => {
        dispatch(getCreateQuiz());
    }, [dispatch]);
    console.log(quizItems?.results)
    return (
        <div className="backgroundPage">
            <div style={{padding: '20px 60px'}}>
                <div className="blur">
                    <div className="finalTest">
                        <div className="finalTest_head">
                            <Link style={{textDecoration: 'none', color: '#8D8484'}} to="/about">
                                <div className="finalTest_head_homes">Bosh sahifaga qaytish</div>
                            </Link>
                            <div className="finalTest_head_homes">00:00:00</div>
                        </div>

                        <form className="finalTest_lists">
                            {quizItems?.results?.map((item, index) => (
                                <div key={index}>
                                    {item.questions?.map((ans, i) => (
                                        <div key={i}>
                                            <div className="finalTest_lists_boxTest">
                                                <div className="finalTest_lists_boxTest_testTitle">
                                                    {i + index} {ans.title}                                               </div>
                                                <div className="finalTest_lists_boxTest_checks">
                                                    {ans.answers?.map((answer, index) => (
                                                        <label key={index}
                                                               className="finalTest_lists_boxTest_checks_TestLabel"
                                                               htmlFor="one">
                                                            {console.log(ans)}
                                                            {/*<input*/}
                                                            {/*    className="finalTest_lists_boxTest_checks_TestInput"*/}
                                                            {/*    type="checkbox"*/}
                                                            {/*    name="one"*/}
                                                            {/*    id="one"*/}
                                                            {/*/>*/}
                                                            {ans.technique !== undefined ? (
                                                                ans.technique === 0 ? (
                                                                    <input type="checkbox" readOnly  />
                                                                ) : ans.technique === 1 ? (
                                                                    <input type="radio" readOnly  />
                                                                ) : null
                                                            ) : null}
                                                            {answer.title}
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            ))}
                            <button className="finalTest_lists_TestButton" type="submit">
                                Testni Yakunlsh
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalTest;
