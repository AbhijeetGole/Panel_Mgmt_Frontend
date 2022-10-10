
import "./../Components/Assets/images/register.jpg"
import "./../App.css";
import React, { useEffect, useState } from "react";
import Authservice from '../services/auth-service.js'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";



export default function UnusedSlot() {
  let[data,setData] = useState([]); 

  useEffect(()=>{
    
    
      Authservice.highestSlot().then(
        (dataHigh) => {
          data = [];
          var data1 = Object.keys(dataHigh.counts);
          var data2 = Object.values(dataHigh.counts);
          var i=0;
          while(i<(data1.length))
          {
              // data[i].skill;
              var nm = data1[i].toString();
              var cnt = parseInt(data2[i]);
              // data.push({
              //   name : nm,
              //   count :cnt
              // })
              data.push({name:nm,count:cnt})
              i++;
          }
          setData(data);
          //navigate("/Home")
        },
        (error) => {
          alert("Cannot get data at this moment", error);
        }
      );
},[]);
console.log(data)

return (
    <div style={{width: '100%', marginLeft: '30%', marginTop: '5%'}} >
    <BarChart 
      width={750}
      height={450}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis dataKey="count"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
    </div>
  );
}