import React from 'react';
import "./personalInformation.scss"
import {Link} from "react-router-dom";
import Photo from "../../assets/images/Photos.png"
const PersonalInformation = () => {
    return (
        <div className="backgroundPage">
            <div style={{padding: " 20px 60px"}}>
                <div className="blur">
                    <div className="personal_head">
                        <Link style={{textDecoration: "none", color: "#8D8484"}} to="/about">
                            <div className="personal_head_homes">Bosh saxifaga qaytish</div>
                        </Link>

                    </div>
                  <div className="personal_infos">
                      <div className="">Shaxsiy Ma'lumotlar</div>
                      <div className="personal_infos_InfoCard">
                          <div className="personal_infos_InfoCard_Photos">
                              <img width="100%" height="100%" src={Photo} alt="Photo"/>
                          </div>
                          <div className="personal_infos_InfoCard_shows">
                              <div className="personal_infos_InfoCard_shows_self">
                                  <div className="personal_infos_InfoCard_shows_self_NTitle">FIO</div>
                                  <div className="personal_infos_InfoCard_shows_self_NTitle">Tug'ilgan kun</div>
                                  <div className="personal_infos_InfoCard_shows_self_NTitle">Jinsi</div>
                                  <div className="personal_infos_InfoCard_shows_self_NTitle">Manzil</div>
                              </div>
                              <div className="personal_infos_InfoCard_shows_self">
                                  <div className="personal_infos_InfoCard_shows_self_NTitle">Natasha Aliyeva</div>
                                  <div className="personal_infos_InfoCard_shows_self_NTitle">28-07-1999</div>
                                  <div className="personal_infos_InfoCard_shows_self_NTitle">Ayol</div>
                                  <div className="personal_infos_InfoCard_shows_self_NTitle">Toshkent viloyati, Yunusabod 1</div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>

        </div>
    );
};

export default PersonalInformation;