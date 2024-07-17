import React, { useEffect, useState } from 'react';
import "./teacherScience.scss";
import { Link, useNavigate } from "react-router-dom";
import ModalScience from "./ModalScience/ModalScien";
import { useDispatch, useSelector } from "react-redux";
import { getAllScience, getScience } from "../../../../redux/getScienceSlice/getScienceSlice";
import { addTask } from "../../../../redux/AddHomeworkSlice/AddHomeworkSlice";
import { getAllGroups } from "../../../../redux/getGroupSlice/getGroupSlice";
import { getTask } from "../../../../redux/getHomeworkSlice/getHomeworkSlice";

const TeacherScience = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sciences, limit, offset } = useSelector((state) => state.AllScienceSlice);
    const { teacher } = useSelector((state) => state.teacherReducer);
    const { science } = useSelector((state) => state.getAllScience);
    const { homework } = useSelector((state) => state.getHomeworkSlice);

    const [showModal, setShowModal] = useState(false);
    const [selectedScience, setSelectedScience] = useState(null);
    const [formData, setFormData] = useState({
        finished_date: "",
        group: "",
        course: "",
        teacher: parseInt(localStorage.getItem('userID')),
        file: null,
        description: ""
    });

    useEffect(() => {
        dispatch(getAllGroups());
        dispatch(getAllScience());
        dispatch(getScience({ limit, offset }));
        dispatch(getTask({ limit, offset })); // Fetch homework data
    }, [limit, offset, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'teacher' || name === 'course' || name === 'group' ? parseInt(value) : value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleShowModal = (science) => {
        setSelectedScience(science);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(formData)).then((result) => {
            if (result.meta.requestStatus === 'fulfilled') {
                navigate("/teacher/homework", { state: { selectedScience } });
            }
        });
        setFormData({
            finished_date: "",
            group: "",
            course: "",
            teacher: parseInt(localStorage.getItem('userID')),
            file: null,
            description: ""
        });
        handleCloseModal();
    };

    // Count the number of homework assignments for each science subject
    const getHomeworkCount = (scienceId) => {
        return homework.filter(hw => hw.course === scienceId).length;
    };

    return (
        <div className="backgroundPage">
            <div style={{ padding: "20px 60px" }}>
                <div className="science">
                    <div className="science_class">
                        <Link style={{ textDecoration: "none", color: "#8D8484" }} to="/teacher/about">
                            <div className="science_class_weeks">Bosh saxifaga qaytish</div>
                        </Link>
                    </div>

                    <div className="main-table">
                        <table className="science_liness">
                            <thead>
                            <tr>
                                <th className="science_liness_th">Fanlar</th>
                                <th className="science_liness_th">Guruh</th>
                                <th className="science_liness_th">Mashg'ulotlar</th>
                                <th className="science_liness_th">Topshiriqlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sciences.map((row) => (
                                <tr key={row.id} onClick={() => handleShowModal(row)}>
                                    <td className="science_liness_items">{row.name}</td>
                                    <td className="science_liness_items">{row.group}</td>
                                    <td className="science_liness_items">{row.training}</td>
                                    <td className="science_liness_items">
                                        <Link
                                            to="/teacher/homework"
                                            state={{ scienceId: row.id, scienceName: row.name, group: row.group, training: row.training }}
                                        >
                                            <button className="science_liness_but">{getHomeworkCount(row.id)}</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        {showModal && <ModalScience
                            data={formData}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            handleFileChange={handleFileChange}
                            show={showModal}
                            handleClose={handleCloseModal}
                            teacherData={teacher || []}
                            scienceData={science || []}
                            setSelectedScience={setSelectedScience}  // Pass the function here
                        />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherScience;
