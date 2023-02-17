import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function RandomPeopleApi() {
  const [peopleData, setPeopleData] = useState([]);
  console.log(peopleData);

  const fetchPeopleApi = () => {
    axios.get("https://swapi.dev/api/people").then((res) => {
      if (res.status === 200) {
        setPeopleData(res.data.results);
        console.log(res.data);
      }
    });
  };

  useEffect(() => {
    fetchPeopleApi();
  }, []);
  return (
    <div>
      <div style={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
        <table style={{dispay:'flex', border:'1px solid black',borderRadius:'7px', alignContent:'center', height:'20rem'}}>
          <thead
            style={{
              backgroundColor: "green",
              borderRadius:'5px',
              border: "1px green solid",
              padding: "10px",
              margin: "10px",
            }}
          >
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Year of Birth</th>
              <th>Gender</th>
              <th>Eye Color</th>
              <th>Hair Color</th>
              <th>Height(cm)</th>
              <th>Weight(kg)</th>
              <th>Skin Color</th>
              <th>Created</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody style={{border: '1px solid black',backgroundColor:'orange'}}>
            {peopleData.map((info,index) => {
              return (
                <tr key={index} style={{border:'1px black solid', borderRadius:'5px', justifyContent:'center', alignItems:'center'}}>
                  <td>{index + 1}</td>
                  <td>{info.name}</td>
                  <td>{info.birth_year}</td>
                  <td>{info.gender}</td>
                  <td>{info.eye_color}</td>
                  <td>{info.hair_color}</td>
                  <td>{info.height}</td>
                  <td>{info.mass}</td>
                  <td>{info.skin_color}</td>
                  <td>{info.created}</td>
                  <td>{info.edited}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <span style={{display:'flex', justifyContent:'space-around',padding:'10px',}}>
        <div>Previous Page</div>
        <div>Next Page</div>
      </span>
    </div>
  );
}
