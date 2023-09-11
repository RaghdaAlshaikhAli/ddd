import React, { useEffect, useReducer } from "react";
import { useEditContext } from "./../../../context/editContext";
import { initalstate2, reducer2 } from "../../../reducer/ProfileReduce";
import { Localhost } from "../../../config/api";
import { useParams } from "react-router-dom";
import axios from "axios";

const About = () => {
  const [state, dispatch] = useReducer(reducer2, initalstate2);
  
  const data = {
    firstname: state.firstname,
    lastname: state.lastname,
    email: state.email,
    Gender: state.Gender,
    phone: state.phone,
    address: state.address,
    country: state.country,
  };

  const params = useParams();
  const id = params.id;
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${Localhost}/Profile/${id}`);
        const profile = response.data;

        dispatch({ type: "firstname", value: profile.firstname });
        dispatch({ type: "lastname", value: profile.lastname });
        dispatch({ type: "email", value: profile.email });
        dispatch({ type: "gender", value: profile.gender });
        dispatch({ type: "phone", value: profile.phone });
        dispatch({ type: "address", value: profile.address });
        dispatch({ type: "country", value: profile.country });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetch();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`${Localhost}/Profile/${id}`);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const [isEditing, setIsEditing] = useEditContext();
  return (
    <div className="about">
      <div className="titleItem">About</div>
      {isEditing ? (
        <>
          <div className="editButton" onClick={() => setIsEditing(false)}>
            Done
          </div>
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <div className="detailItem">
                <span className="itemKey">First Name:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    value={data.firstname}
                    name="firstname"
                    onChange={(e) =>
                      dispatch({ type: "firstname", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Last Name:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    name="lastname"
                    value={data.lastname}
                    onChange={(e) =>
                      dispatch({ type: "lastname", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Gender:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    name="Gender"
                    value={data.Gender}
                    onChange={(e) =>
                      dispatch({ type: "Gender", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">phone:</span>
                <span className="itemValue">
                  <input
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={(e) =>
                      dispatch({ type: "phone", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) =>
                      dispatch({ type: "email", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={(e) =>
                      dispatch({ type: "address", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    value={data.country}
                    name="country"
                    onChange={(e) =>
                      dispatch({ type: "country", value: e.target.value })
                    }
                  />
                </span>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="editButton" onClick={() => setIsEditing(true)}>
            Edit
          </div>
          <div className="wrapper">
            <div className="detailItem">
              <span className="itemKey">First Name:</span>
              <span className="itemValue">{data.firstname}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Last Name:</span>
              <span className="itemValue">{data.lastname}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Gender:</span>
              <span className="itemValue">{data.Gender}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">phone:</span>
              <span className="itemValue">{data.phone}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemValue">{data.email}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Address:</span>
              <span className="itemValue">{data.address}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Country:</span>
              <span className="itemValue">{data.country}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
