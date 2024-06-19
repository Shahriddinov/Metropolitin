import React, {useState} from 'react';
import "./science.scss"
import {Link} from "react-router-dom";
import Select from "react-select";


const options = [
    {value: "2023-2024 yil", label: "2023-2024 yil"},
    {value: "2022-2023 yil", label: "2022-2023 yil"},
    {value: "2021-2022 yil", label: "2021-2022 yil"},
    {value: "2020-2021 yil", label: "2020-2021 yil"},
];
const Science = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const data = [
        {id: 1, science: 'Metropoliten vagonlarning elektr jihozlari', name: 'Abdurashidov Abdug’ani',},
        {id: 2, science: 'Metropoliten vagonlarning elektr jihozlari', name: 'Abdurashidov Abdug’ani',},
        {id: 3, science: 'Metropoliten vagonlarning elektr jihozlari', name: 'Abdurashidov Abdug’ani',},
        {id: 4, science: 'Metropoliten vagonlarning elektr jihozlari', name: 'Abdurashidov Abdug’ani',},
        {id: 5, science: 'Metropoliten vagonlarning elektr jihozlari', name: 'Abdurashidov Abdug’ani',},
        {id: 6, science: 'Metropoliten vagonlarning elektr jihozlari', name: 'Abdurashidov Abdug’ani',},
    ];
    return (
        <div className="backgroundPage">
            <div style={{padding: " 20px 60px"}}>
                <div className="science">
                    <div className="science_class">
                        <Link style={{textDecoration: "none", color: "#8D8484"}} to="/about">
                            <div className="science_class_weeks">Bosh saxifaga qaytish</div>
                        </Link>

                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>

                    <table border="1" className="science_liness">
                        <thead>
                        <tr>
                            <th className="science_liness_th">O'QITUVCHILAR</th>
                            <th className="science_liness_th">FANLAR</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="science_liness_items">
                                    <Link to="/homework"
                                          style={{textDecoration: "none", color: "black"}}>
                                        {item.name}
                                    </Link>
                                </td>
                                <td className="science_liness_items">
                                    <Link to="/homework"
                                          style={{textDecoration: "none", color: "black"}}>
                                        {item.science}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Science;