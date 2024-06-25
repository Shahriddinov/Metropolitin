import React from 'react';
import "./teacherSchedule.scss"
import {Link} from "react-router-dom";
const TeacherSchedule = () => {

    const data = [
        { id: 1, name: 'Ali', age: 25, city: 'Toshkent', class: 'texnika', help:'texnik yordam', science:"math" },
        { id: 2, name: 'Vali', age: 30, city: 'Samarqand' },
        { id: 3, name: 'Guli', age: 28, city: 'Buxoro' },
        { id: 4, name: 'Ali', age: 25, city: 'Toshkent', class: 'texnika', help:'texnik yordam', science:"math" },
        { id: 5, name: 'Vali', age: 30, city: 'Samarqand' },
        { id: 6, name: 'Guli', age: 28, city: 'Buxoro' },
    ];
    return (
        <div className="schedule">
          <div style={{ padding:" 20px 60px"}}>
              <div className="schedule_tables">
                  <div className="schedule_tables_class">
                      <divf>Dars jadvali</divf>
                      <div className="schedule_tables_class_weeks">Haftalik</div>
                     <Link style={{textDecoration:"none", color:"#8D8484"}} to="/teacher/about">
                         <div className="schedule_tables_class_weeks">Bosh saxifaga qaytish</div>
                     </Link>
                  </div>
                  <table border="1" className="tabless" >
                      <thead>
                      <tr>
                          <th className="tabless_th">T</th>
                          <th className="tabless_th">Пн 13/05</th>
                          <th className="tabless_th">Вт 14/05</th>
                          <th className="tabless_th">Ср 15/05</th>
                          <th className="tabless_th">Чт 16/05</th>
                          <th className="tabless_th">Пт 17/05</th>
                          <th className="tabless_th">Сб 18/05</th>
                      </tr>
                      </thead>
                      <tbody>
                      {data.map((item) => (
                          <tr key={item.id}>
                              <td className="tabless_items">{item.id}</td>
                              <td className="tabless_items">{item.name}</td>
                              <td className="tabless_items">{item.age}</td>
                              <td className="tabless_items">{item.city}</td>
                              <td className="tabless_items">{item.class}</td>
                              <td className="tabless_items">{item.help}</td>
                              <td className="tabless_items">{item.science}</td>
                          </tr>
                      ))}
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
    );
};

export default TeacherSchedule;