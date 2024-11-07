import React, { useEffect, useState } from 'react';
import './finalTest.scss';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'; // Import Axios
import { getCreateQuiz } from "../../../redux/QuizCreateSlice";
import {studentTestSolution} from "../../../redux/StudentTestSolution";

const FinalTest = () => {
    const dispatch = useDispatch();
    const query = new URLSearchParams(useLocation().search);
    const groupID = query.get('group');
    const quizID = query.get('quiz');
    const { quizItems } = useSelector((state) => state.quizCreateSlice);

    const [remainingTime, setRemainingTime] = useState(0);
    const [formData, setFormData] = useState({
        user: sessionStorage.getItem('userID'),
        quiz: quizID,
        answers: [], // Initialize with an empty array
    });

    const handleChange = (questionId, answerId, technique) => {
        setFormData(prevState => {
            const existingAnswerIndex = prevState.answers.findIndex(a => a.question === questionId);

            if (existingAnswerIndex !== -1) {
                const updatedAnswers = [...prevState.answers];
                if (technique === 0) { // Checkbox technique
                    const answerIndex = updatedAnswers[existingAnswerIndex].answers.indexOf(answerId);
                    if (answerIndex > -1) {
                        updatedAnswers[existingAnswerIndex].answers.splice(answerIndex, 1); // Remove answer if it exists
                    } else {
                        updatedAnswers[existingAnswerIndex].answers.push(answerId); // Add answer if it does not exist
                    }
                } else if (technique === 1) { // Radio technique
                    updatedAnswers[existingAnswerIndex].answers = [answerId]; // Only one answer for radio
                }
                return {
                    ...prevState,
                    answers: updatedAnswers,
                };
            } else {
                return {
                    ...prevState,
                    answers: [
                        ...prevState.answers,
                        {
                            question: questionId,
                            answers: technique === 1 ? [answerId] : [], // Initialize with the selected answer for radio
                            duration: 21,
                        },
                    ],
                };
            }
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
         dispatch(studentTestSolution(formData)).then(()=>{

         })
            setFormData({
                user: sessionStorage.getItem('userID'),
                quiz: quizID,
                answers: [],
            });
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }
    };

    useEffect(() => {
        dispatch(getCreateQuiz());
    }, [dispatch]);

    useEffect(() => {
        if (remainingTime > 0) {
            const timer = setInterval(() => {
                setRemainingTime((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [remainingTime]);

    const formatDuration = (duration) => {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="backgroundPage">
            <div style={{ padding: '20px 60px' }}>
                <div className="blur">
                    <div className="finalTest">
                        <div className="finalTest_head">
                            <Link style={{ textDecoration: 'none', color: '#8D8484' }} to="/about">
                                <div className="finalTest_head_homes">Bosh sahifaga qaytish</div>
                            </Link>
                            <div className="finalTest_head_homes">{formatDuration(remainingTime)}</div>
                        </div>

                        <form className="finalTest_lists" onSubmit={handleSubmit}>
                            {quizItems?.results?.map((item, index) => (
                                <div key={index}>
                                    {item.questions?.map((ans, i) => (
                                        <div key={i}>
                                            <div className="finalTest_lists_boxTest">
                                                <div className="finalTest_lists_boxTest_testTitle">
                                                    {i + 1} {ans.title}
                                                </div>
                                                <div className="finalTest_lists_boxTest_checks">
                                                    {ans.answers?.map((answer, index) => (
                                                        <label key={index}
                                                               className="finalTest_lists_boxTest_checks_TestLabel"
                                                               htmlFor={`question-${ans.id}-${index}`}>
                                                            {ans.technique !== undefined ? (
                                                                ans.technique === 0 ? ( // Checkbox
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`question-${ans.id}-${index}`}
                                                                        value={answer.id} // Use answer.id instead of answer.title
                                                                        checked={formData.answers.find(a => a.question === ans.id)?.answers.includes(answer.id) || false} // Use answer.id for comparison
                                                                        onChange={() => handleChange(ans.id, answer.id, ans.technique)} // Pass answer.id
                                                                    />
                                                                ) : ans.technique === 1 ? ( // Radio
                                                                    <input
                                                                        type="radio"
                                                                        id={`question-${ans.id}-${index}`}
                                                                        value={answer.id} // Use answer.id instead of answer.title
                                                                        checked={formData.answers.find(a => a.question === ans.id)?.answers.includes(answer.id) || false} // Use answer.id for comparison
                                                                        onChange={() => handleChange(ans.id, answer.id, ans.technique)} // Pass answer.id
                                                                    />
                                                                ) : null
                                                            ) : null}
                                                            {answer.title} {/* Keep displaying the title */}
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
