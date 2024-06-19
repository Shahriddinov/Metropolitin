import React from 'react';
import "./homework.scss"
import {Link} from "react-router-dom";

const Homework = () => {
    const data = [
        {id: 1, science: 'Metropoliten vagonlarning elektr jihozlari', homework: 'Vazifa_1.docx', day: '29.03.2024', file: 'Vazifa_2.pdf', download:'Yuklang 1-2 topshiriqlarni'},
        {id: 2, science: 'Metropoliten vagonlarning elektr jihozlari', homework: 'Vazifa_1.docx', day: '29.03.2024', file: 'Vazifa_2.pdf', download:'Yuklang 1-2 topshiriqlarni'},
        {id: 3, science: 'Metropoliten vagonlarning elektr jihozlari', homework: 'Vazifa_1.docx', day: '29.03.2024', file: 'Vazifa_2.pdf', download:'Yuklang 1-2 topshiriqlarni'},
        {id: 4, science: 'Metropoliten vagonlarning elektr jihozlari', homework: 'Vazifa_1.docx', day: '29.03.2024', file: 'Vazifa_2.pdf', download:'Yuklang 1-2 topshiriqlarni'},
        {id: 5, science: 'Metropoliten vagonlarning elektr jihozlari', homework: 'Vazifa_1.docx', day: '29.03.2024', file: 'Vazifa_2.pdf', download:'Yuklang 1-2 topshiriqlarni'},
        {id: 6, science: 'Metropoliten vagonlarning elektr jihozlari', homework: 'Vazifa_1.docx', day: '29.03.2024', file: 'Vazifa_2.pdf', download:'Yuklang 1-2 topshiriqlarni'},
    ];
    return (
        <div className="backgroundPage">
            <div style={{padding: " 20px 60px"}}>
                <div className="blur">
                    <div className="result">
                        <div className="result_head">
                            <Link style={{textDecoration: "none", color: "#8D8484"}} to="/about">
                                <div className="result_head_homes">Bosh saxifaga qaytish</div>
                            </Link>
                            <Link style={{textDecoration: "none", color: "#8D8484"}} to="/science">
                                <div className="result_head_homes">Ortga qaytish</div>
                            </Link>
                        </div>
                        <table border="1" className="tabless">
                            <thead>
                            <tr>
                                <th className="tabless_th">FANLAR</th>
                                <th className="tabless_th">VAZIFA</th>
                                <th className="tabless_th">TOPSHIRIQ MUDDATI</th>
                                <th className="tabless_th">FILE</th>
                                <th className="tabless_th">IZOH</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="tabless_items">
                                        {item.science}
                                    </td>
                                    <td className="tabless_items">
                                        {item.homework}
                                    </td>
                                    <td className="tabless_items">
                                        {item.day}
                                    </td>
                                    <td className="tabless_items">
                                        {item.file}
                                    </td>
                                    <td className="tabless_items">
                                        {item.download}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            Result
        </div>
    );
};

export default Homework;