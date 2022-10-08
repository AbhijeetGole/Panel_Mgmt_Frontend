
import "./../Components/Assets/images/register.jpg"
import "./../App.css";
import React, { useEffect, useState } from "react";
import Authservice from '../services/auth-service.js'

import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { useSearchParams } from "react-router-dom";




export default function UnusedSlot() {
let[data, setData] = useState([])

  useEffect(() => {


    Authservice.unusedSlot().then(
      (dataHigh) => {
        data = [];
        var data1 = Object.keys(dataHigh.counts);
        var data2 = Object.values(dataHigh.counts);
        var i = 0;
        while (i < (data1.length)) {
          // data[i].skill;
          var nm = data1[i].toString();
          var cnt = parseInt(data2[i]);
          // data.push({
          //   name : nm,
          //   count :cnt
          // })
          data.push({ name: nm, count: cnt })
          i++;
        }
        setData(data);
        //navigate("/Home")
      },
      (error) => {
        alert("Cannot get data at this moment", error);
      }
    );
  }, []);
  console.log(data)

  return (
    <div style={{ width: '90%', marginLeft: '28%', marginTop: '5%' }} >
        
        <PieChart width={830} height={350}>
          {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
          <Pie data={data} dataKey="count" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={150} fill="#8884d8" label="Java" />
          <Pie dataKey="count" fill="#8884d8" />
          <Tooltip />
        </PieChart>
        <h6 style={{marginLeft: '30%', marginTop: '1.5%', fontWeight: 'bold', color:"#8884d8"}}>Unused Slots</h6>

    </div>
  );
}