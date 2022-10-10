import { React, useState, useEffect } from "react";
import "./Assets/getallslots.module.css";
import Authservice from "../services/auth-service.js";
import YourSlotInfo from "./YourSlotInfo";
//import "../mystyle.css";
import { useNavigate } from "react-router";

//class Getallslots extends React.Component{
const YourSlots = () => {
    const [slots, setSlot] = useState([]);
    const [flag, setFlag] = useState();
    const tokendata = JSON.parse(localStorage.getItem("user"))
    const username = tokendata.user.username;
    useEffect(() => {
        try {
            Authservice.SlotByUserName(username).then((slotdata) => {
                const data = [];

                var data1 = Object.keys(slotdata);
                var data2 = Object.values(slotdata);
                console.log(data1);
                console.log(data2[0])
                var i = 0;
                while (i < (data2.length)-11) {
                    // data[i].skill;
                    
                    var activeresult = data2[0]
                    
                    var endDateresult = data2[4]
                    
                    var endtimeresult = data2[6]
                    
                    var skillsresult = data2[8]
                    
                    var panelNameresult = data2[2]
                    
                    var slotIdresult = data2[1]
                    
                    var slotusedresult = data2[9]
                    
                    var startDateresult = data2[3]
                    
                    var starttimeresult = data2[5]
                    // data.push({
                    //   name : nm,
                    //   count :cnt
                    // })
                    data.push({ active: activeresult, 
                        endDate: endDateresult,
                        endtime : endtimeresult,
                        skills : skillsresult,
                        panelName : panelNameresult,
                        slotId : slotIdresult,
                        slotused : slotusedresult,
                        startDate : startDateresult,
                        starttime : starttimeresult 
                    })
                    i++;
                }
                console.log(data);
                setSlot(data);
            });
        } catch (err) {
            alert("Unable to fetch data", err);
        }
    }, [flag]);
    const navigate = useNavigate();
    return (
        <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title />
            <meta name="description" content />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css"
                
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="/styles/styles.css" />
            <link rel="stylesheet" href="getallslots.css" />
            <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image" />
            <div className="container">
                    <div className="row" style={{width:'100%', marginLeft: '5%', marginTop: '2%'}}>
                    <div
                        className="min-vh-100 d-flex justify-content-center"
                        style={{ width: "90%", "margin-left": "10%" }}
                    >
                        <div className="col-12 col-md-10 col-xl-10 my-5">
                            <div className="card">
                                <h2 className="text-center mb-3 mt-3">Your Allocated Slots</h2>
                                <div className="card-header" style={{ "background-color": "white", "padding-right": "0px" }}>

                                </div>
                                <div className="table-responsive">
                                    <table className="table table-sm table-nowrap card-table">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Id</th>
                                                <th>Panel</th>
                                                <th> Start Date </th>
                                                <th> End Date </th>
                                                <th> Start Time </th>
                                                <th> End Time </th>
                                                <th> Skills</th>
                                                <th> Status </th>
                                                <th> Used </th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {slots.map((slot) => {
                                            return (
                                                <YourSlotInfo
                                                    id={slot.slotId}
                                                    name={slot.panelName}
                                                    startdate={slot.startDate}
                                                    enddate={slot.endDate}
                                                    starttime={slot.starttime}
                                                    endtime={slot.endtime}
                                                    skills={slot.skills}
                                                    active={slot.active}
                                                    usage={slot.slotused}
                                                    setFlag={setFlag}
                                                />
                                            );
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourSlots;