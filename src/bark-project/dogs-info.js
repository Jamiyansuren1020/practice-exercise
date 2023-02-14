import React from "react";
import moment from "moment";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsXCircle } from "react-icons/bs";
import { type } from "@testing-library/user-event/dist/type";

export default function DogsInfo({ dogs, updateDogsInfo,}) {
    // console.log(dogs.vaccinations)
    // console.log(vac[0])
    // console.log(vaccine)
    // console.log(vac)
//   console.log(moment(dogs.dob).format("L"));
//   console.log(dogs);
//   console.log(dogs.membershipName);
  let qty = 0
  return (
    <div>
      <div className="dog-pic-name">
        <div className="dog-picture">
          <img
            src={dogs.imageUrl}
            style={{ height: "100px", width: "100px" }}
            alt=" "
          />
        </div>
        <div>
          <div className="name">Name</div>
          {dogs.name}
          <div className="dob">DOB</div>
          {moment(dogs.dob).format("MM-DD-YYYY")}
        </div>
        <div className="breed-text">
          Breed
          {dogs.breed}
        </div>
      </div>
      <div className="first-info">
        <div className="neutered-btn"  onClick={() => {
                updateDogsInfo({type:"neuter-sprayed" , id: dogs.id})
            }}>
          {dogs.requireNeuteredSpayed ? (
            <AiOutlineCheckCircle style={{ height: "20px", color: "green" }}/>
          ) : (
            <BsXCircle style={{ height: "20px", color: "red" }} />
          )}
          Neutered/Spayed:{dogs.requireNeuteredSpayed ? "Yes" : "No"} (required)
        </div>
        <div onClick={() => {
            updateDogsInfo({type:"banned" , id: dogs.id})
        }}>
          {dogs.isBanned ? (
            <BsXCircle style={{ height: "20px", color: "red" }} />
          ) : (
            <AiOutlineCheckCircle style={{ height: "20px", color: "green" }} />
          )}
          {dogs.isBanned ? "Banned" : "Not Banned"}
        </div>
        <div onClick={() => {
            updateDogsInfo({type:"subscription", id: dogs.id})
        }}>
          {/* dogs.subscription ni baih ym bol mun membershipName iig dynamic string bolgono */}
          {dogs.subscription && dogs.subscription.status === "Inactive" ? (
            <BsXCircle style={{ height: "20px", color: "red" }} />
          ) : (
            <AiOutlineCheckCircle style={{ height: "20px", color: "green" }} />
          )}
          {dogs.subscription
            ? `${dogs.subscription.membershipName} ${
                dogs.subscription.status === "Inactive" ? "(Inactive)" : ""
              }`
            : "No Subscription"}
        
        </div>
        <div>
            
            {/* {dogs.vaccinations.map((vaccine) => {
                return(
                    <div>
                        
                    {vaccine.status === "missing" && "expired" ? (
                <BsXCircle style={{ height: "20px", color: "red" }} />
            ) :  (
                <AiOutlineCheckCircle style={{ height: "20px", color: "green" }} />
            ) `Vaccinations /3 `}
            
                    {vaccine.vaccinationName} ({vaccine.status})
                    </div>
                )
            })} */}
            
            Vaccinations {dogs.vaccinations.filter((vac)=> {
              return (
                vac.status === "Verified"
              )
            }).length} 
            /{dogs.vaccinations.length}
            {dogs.vaccinations?.map((vac, idx) => {
                return(
                    <div onClick={() => {
                      updateDogsInfo({type: "edit-vaccine", id:dogs.id, vacId: vac.vaccinationId})
                      }}>
                        <div>
                        {/* Vaccinations {`${vac.status === "Verified"}` ? `${qty + 1}` : `${qty}` && vac.status === "Expired" ? `${qty - 1}` : `${qty}`}/3 */}
                        </div>
                        {vac.status === "Verified" ? (<AiOutlineCheckCircle style={{ height: "20px", color: "green" }} />)
                        : (<BsXCircle style={{ height: "20px", color: "red" }} />) }
                        {vac.vaccinationName}
                    </div>
                )
            })}
            
        </div>
      </div>
    </div>
  );
}
