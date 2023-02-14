import React, { useReducer } from "react";
import DogsInfo from "./dogs-info";
import "./bark.css";
const reduceDogsInfo = (curr, action) => {
  switch (action.type) {
    case "neuter-sprayed":
      return {
        ...curr,
        ownerDogs: curr.ownerDogs.map((dog) => {
          if (action.id === dog.id) {
            return {
              ...dog,
              requireNeuteredSpayed: !dog.requireNeuteredSpayed,
            };
          } else {
            return dog;
          }
        }),
      };
    case "banned":
      return {
        ...curr,
        ownerDogs: curr.ownerDogs.map((ban) => {
          if (ban.id === action.id) {
            return {
              ...ban,
              isBanned: !ban.isBanned,
            };
          } else {
            return ban;
          }
        }),
      };
    case "subscription":
      return {
        ...curr,
        ownerDogs: curr.ownerDogs.map((dog) => {
          if (action.id === dog.id) {
            return {
              ...dog,
              subscription: dog.subscription
                ? {
                    ...dog.subscription,
                    status:
                      dog.subscription?.status === "Active"
                        ? "Inactive"
                        : "Active",
                  }
                : { membershipName: "Monthly Membership", status: "Active" },
            };
          } else {
            return dog;
          }
        }),
      };
      case "edit-vaccine" :
        return{
          ...curr,
          ownerDogs: curr.ownerDogs.map((dog) => {
            if(action.id === dog.id) {
              return {
                ...dog,
                vaccinations: dog.vaccinations.map((vac, qty) => {
                  if(vac.vaccinationId === action.vacId) {
                    return {
                      ...vac, status: vac.status === "Verified" ? "Expired" : "Verified",
                    }
                  } else {
                    return vac
                  }
                })
              }
            } else {
              return dog
            }
            // return{
            //   ...dog,
            //   vaccinations:dog.vaccinations.map((vac, idx) => {
            //     if(vac.vaccinationId === vac.Id)
            //   })
            // }
          })
        }
    default:
      return curr;
  }
};
export default function Bark() {
  const [dogsInfo, updateDogsInfo] = useReducer(reduceDogsInfo, {
    ownerInfo: null,
    ownerDogs: [
      {
        id: 31,
        name: "Chika",
        ownerId: 4,
        ownerName: "Badi Owner",
        imageUrl: "https://bark-backend.azurewebsites.net/api/dog/image/517",
        dob: "2018-05-19T00:00:00",
        freeGroupId: null,
        isBanned: true,
        requireNeuteredSpayed: false,
        breed: "Affen Border Terrier",
        vaccinations: [
          {
            vaccinationId: 4,
            vaccinationName: "Distemper",
            status: "Verified",
          },
          {
            vaccinationId: 6,
            vaccinationName: "Influenza",
            status: "Verified",
          },
          {
            vaccinationId: 7,
            vaccinationName: "Leptospirosis",
            status: "Verified",
          },
        ],
        subscription: {
          id: 54,
          membershipName: "Annual Membership",
          status: "Active",
          statusDescription: "active",
          note: "stripe",
          paymentMethod: null,
          isExpired: false,
          expireDate: null,
        },
        status: "Red",
      },
      {
        id: 108,
        name: "Snoopy",
        ownerId: 4,
        ownerName: "Badi Owner",
        imageUrl: "https://bark-backend.azurewebsites.net/api/dog/image/460",
        dob: "2023-01-04T00:00:00",
        freeGroupId: 20,
        isBanned: false,
        requireNeuteredSpayed: true,
        breed: "Adronicus Mastiff",
        vaccinations: [
          {
            vaccinationId: 4,
            vaccinationName: "Distemper",
            status: "Verified",
          },
          { vaccinationId: 6, vaccinationName: "Influenza", status: "Missing" },
          {
            vaccinationId: 7,
            vaccinationName: "Leptospirosis",
            status: "Expired",
          },
        ],
        subscription: null,
        status: "Red",
      },
      {
        id: 118,
        name: "Banhar",
        ownerId: 4,
        ownerName: "Badi Owner",
        imageUrl: "https://bark-backend.azurewebsites.net/api/dog/image/555",
        dob: "2023-01-10T00:00:00",
        freeGroupId: null,
        isBanned: false,
        requireNeuteredSpayed: true,
        breed: "Adronicus Mastiff",
        vaccinations: [
          {
            vaccinationId: 4,
            vaccinationName: "Distemper",
            status: "Verified",
          },
          {
            vaccinationId: 6,
            vaccinationName: "Influenza",
            status: "Verified",
          },
          {
            vaccinationId: 7,
            vaccinationName: "Leptospirosis",
            status: "Verified",
          },
        ],
        subscription: {
          id: 65,
          membershipName: "Annual Membership",
          status: "Inactive",
          statusDescription: "active",
          note: "234",
          paymentMethod: null,
          isExpired: false,
          expireDate: null,
        },
        status: "Brown",
      },
    ],
  });
  return (
    <div className="main-container">
      {dogsInfo.ownerDogs.map((dog) => {
        return (
          <div className="dog-info-container">
            <DogsInfo dogs={dog} updateDogsInfo={updateDogsInfo}/>
          </div>
        );
      })}
    </div>
  );
}

// Create an useReducer state
// Initial state value is

// functionality requirements:
/**
 * 1. When clicked on the red "x" in circles, it should change it to green
 */

/**
 * Colors:
 * status red: #e3e8ee
 * status blue: #d6ecff
 * times red: #ec4758
 * check green: #1ab394
 * text-color: #337ab7
 * bg-secondary: #e7eaec
 */
