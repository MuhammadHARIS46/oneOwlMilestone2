/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import BodyComponent from "../../components/bodyComponent";
import ProfileImg from "../../../assets/images/guy.png";
import { BsFillCameraFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import {
  AiFillPlusCircle,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { RiAddLine } from "react-icons/ri";
import { generalApi } from "../../../services/generalApis/profile";

// eslint-disable-next-line react/prop-types
export const Profile = ({ getUserNameVal, getUserLastVal }) => {
  const { putUpdateProfile, getUserDetail } = generalApi();

  const [useProfileImg, setUserProfileImg] = useState("");
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserProfileImg(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = (email) => {
    return emailRegex.test(email);
  };

  // const getSocialVal = (e) => {
  //   setAddSocialVal({ ...addSocialVal, [e.target.name]: e.target.value });
  // };
  const [userNum, setUserNum] = useState("");

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [userDetails, setUserDetails] = useState();
  const [edit, setEdit] = useState(false);
  const getInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      firstname: !userData.firstname
        ? userDetails.firstname
        : userData.firstname,
      lastname: !userData.lastname ? userDetails.lastname : userData.lastname,
      email: !userData.email ? userDetails.email : userData.email,
      phone: !userData.phone ? userDetails.phone : userData.phone,
    };

    putUpdateProfile(updatedData)
      .then((res) => {
        console.log(res, "response");
      })
      .catch((res) => {
        console.log(res, "error");
      });

    setEdit(false);
  };

  const getUserDetails = async () => {
    try {
      const response = await getUserDetail();
      setUserDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [contactInfo, setContactInfo] = useState({
    emails: [],
    phones: [],
    socialLinks: [],
  });
  const [editingIndex, setEditingIndex] = useState(-1); // Initialize with -1 (no email is being edited)
  const [showAddEmail, setShowAddEmail] = useState(false);
  const [showAddPhone, setShowAddPhone] = useState(false);
  const [showAddSocial, setShowAddSocial] = useState(false);
  const addField = (fieldType) => {
    setContactInfo({
      ...contactInfo,
      [fieldType]: [...contactInfo[fieldType], ""],
    });
    if (fieldType === "emails") {
      setShowAddEmail(true);
    } else if (fieldType === "phones") {
      setShowAddPhone(true);
    } else if (fieldType === "socialLinks") {
      setShowAddSocial(true);
    }

    setEditingIndex(contactInfo[fieldType].length); // Start editing the newly added email
  };

  const removeField = (fieldType, index) => {
    const updatedFields = [...contactInfo[fieldType]];
    updatedFields.splice(index, 1);
    setContactInfo({
      ...contactInfo,
      [fieldType]: updatedFields,
    });
    setEditingIndex(-1); // Stop editing when an email is removed
  };

  const updateFieldValue = (fieldType, index, value) => {
    const updatedFields = [...contactInfo[fieldType]];
    updatedFields[index] = value;
    setContactInfo({
      ...contactInfo,
      [fieldType]: updatedFields,
    });
  };

  const finishEditing = (fieldType, index) => {
    if (fieldType === "emails") {
      setShowAddEmail(true);
    } else if (fieldType === "phones") {
      setShowAddPhone(true);
    } else if (fieldType === "socialLinks") {
      setShowAddSocial(true);
    }
    setEditingIndex(-1); // Stop editing and show email as plain text
  };

  return (
    <React.Fragment>
      <BodyComponent>
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
              <form className="row" onSubmit={onFormSubmit}>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <h4 className="profileCustomer">Customer</h4>
                  <h4 className="profileCustomer">Name</h4>
                </div>
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 "
                  // align="center"
                >
                  <div className="profileImg" onClick={handleImageClick}>
                    <BsFillCameraFill className="camera-icon" />
                    <img src={useProfileImg || ProfileImg} alt="" />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div
                  className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 "
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h5 className="formHeading5">Basic Info</h5>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="formField">
                    <label htmlFor="">First Name</label>
                    {edit === true ? (
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        onChange={getInput}
                      />
                    ) : (
                      <input
                        type="text"
                        defaultValue={userDetails?.firstname}
                        readOnly
                        style={{
                          color: "#858585",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="formField">
                    <label htmlFor="">Last Name</label>
                    {edit === true ? (
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        onChange={getInput}
                      />
                    ) : (
                      <input
                        type="text"
                        defaultValue={userDetails?.lastname}
                        readOnly
                        style={{
                          color: "#858585",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  <div className="formField">
                    <label htmlFor="">Email</label>
                    {edit === true ? (
                      <input
                        type="email"
                        placeholder="xyz@email.com"
                        name="email"
                        onChange={getInput}
                      />
                    ) : (
                      <input
                        type="email"
                        defaultValue={userDetails?.email}
                        readOnly
                        style={{
                          color: "#858585",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  <div className="formField">
                    <label htmlFor="">Address</label>
                    {edit === true ? (
                      <input type="text" placeholder="Customer Address Here" />
                    ) : (
                      <input
                        type="text"
                        defaultValue="-------"
                        readOnly
                        style={{
                          color: "#858585",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  <div className="formField formFieldRelative">
                    <label htmlFor="">Contact Number</label>
                    {userNum && <div className="inputFieldAbsolute">(+1)</div>}
                    {edit === true ? (
                      <input
                        className={userNum && "fieldAbsoluteInput"}
                        type="number"
                        placeholder="(+1) xxxxxxxx"
                        name="phone"
                        onChange={(e) => {
                          getInput(e), setUserNum(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        defaultValue={userDetails?.phone}
                        readOnly
                        style={{
                          color: "#858585",
                        }}
                      />
                    )}
                  </div>
                </div>
                {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                    <div className="formField">
                                        <label htmlFor="">Pasword</label>
                                        <input type="password" placeholder='****' />
                                    </div>
                                </div> */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="formField ">
                    <label htmlFor="">City</label>
                    {edit === true ? (
                      <input type="text" placeholder="City Here" />
                    ) : (
                      <input
                        type="text"
                        defaultValue="-------"
                        readOnly
                        style={{
                          color: "#858585",
                        }}
                      />
                    )}

                    {/* <select name="" id="">
                                            <option value="">Select your City</option>
                                            <option value="">Seattle</option>
                                            <option value="">Olympia</option>
                                        </select> */}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <div className="formField ">
                    <label htmlFor="">State</label>
                    {edit === true ? (
                      <input type="text" placeholder="State Here" />
                    ) : (
                      <input
                        type="text"
                        defaultValue="-------"
                        readOnly
                        style={{
                          color: "#858585",
                        }}
                      />
                    )}

                    {/* <select name="" id="">
                                            <option value="">Select your State</option>
                                            <option value="">New York</option>
                                            <option value="">Washington</option>
                                        </select> */}
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  {edit === false && (
                    <button
                      onClick={() => {
                        setEdit(true);
                      }}
                      style={{
                        width: "140.758px",
                        height: "35.311px",
                        // backgroundColor: "#0B2360",
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                        transition: "all 0.1 ease-in",
                        borderRadius: "5px",
                        padding: "5px 20px",
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      Edit
                    </button>
                  )}
                  <div className="formField">
                    {edit === true && (
                      <button
                        type="submit "
                        style={{
                          borderRadius: "5px",
                        }}
                      >
                        Save Changes
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
              <h5 className="formHeading5 addFieldMargin">Contact Info</h5>
              {/* Email fields */}
              <div className="addFields addFieldMargin">
                <p className="fieldHead">Email</p>
                <p className="fieldVal">xyz@gmail.com</p>
                {contactInfo.emails.map((email, index) => (
                  <div key={index}>
                    <p className="fieldVal">
                      {editingIndex === index ? (
                        <div className="AddInput">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                              updateFieldValue("emails", index, e.target.value)
                            }
                            style={{
                              border: "1px solid grey",
                              outline: "none",
                            }}
                          />
                          {editingIndex === index ? (
                            <button
                              onClick={() => finishEditing("emails", index)}
                              style={{
                                border: "1px solid grey",
                                backgroundColor: "transparent",
                                display: "inline-flex",
                                height: "26px",
                                width: "26px",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <RiAddLine />
                            </button>
                          ) : (
                            // <button onClick={() => setEditingIndex(index)}>
                            //   <RiAddLine /> Edit
                            // </button>
                            ""
                          )}
                        </div>
                      ) : (
                        <span>{email}</span>
                      )}

                      <button onClick={() => removeField("emails", index)}>
                        Remove
                      </button>
                    </p>
                  </div>
                ))}
                {showAddEmail === false && (
                  <button
                    className="addfieldButton"
                    onClick={() => addField("emails")}
                  >
                    <AiFillPlusCircle />
                    Add Email
                  </button>
                )}
              </div>

              {/* Phone fields */}
              <div className="addFields addFieldMargin">
                <p className="fieldHead">Phone</p>
                <p className="fieldVal">0310-909090</p>
                {contactInfo.phones.map((phone, index) => (
                  <div key={index}>
                    <p className="fieldVal">
                      {editingIndex === index ? (
                        <div className="AddInput">
                          <input
                            type="email"
                            value={phone}
                            onChange={(e) =>
                              updateFieldValue("phones", index, e.target.value)
                            }
                            style={{
                              border: "1px solid grey",
                              outline: "none",
                            }}
                          />
                          {editingIndex === index ? (
                            <button
                              onClick={() => finishEditing("phones", index)}
                              style={{
                                border: "1px solid grey",
                                backgroundColor: "transparent",
                                display: "inline-flex",
                                height: "26px",
                                width: "26px",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <RiAddLine />
                            </button>
                          ) : (
                            // <button onClick={() => setEditingIndex(index)}>
                            //   <RiAddLine /> Edit
                            // </button>
                            ""
                          )}
                        </div>
                      ) : (
                        <span>{phone}</span>
                      )}

                      <button onClick={() => removeField("phones", index)}>
                        Remove
                      </button>
                    </p>
                  </div>
                ))}
                <button
                  className="addfieldButton"
                  onClick={() => addField("phones")}
                >
                  <AiFillPlusCircle />
                  Add Phone Number
                </button>
              </div>

              {/* Social link fields */}
              <div className="addFields addFieldMargin">
                <p className="fieldHead">Social Links</p>
                <a
                  className="fieldVal fieldAnchor fieldValNo"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiFacebook style={{ color: "#1877F2" }} /> www.facebook.com
                </a>
                <a
                  className="fieldVal fieldAnchor fieldValNo"
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle style={{ color: "#26a7de " }} />{" "}
                  www.twitter.com
                </a>
                <a
                  className="fieldVal fieldAnchor"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin style={{ color: "#1877F2" }} />{" "}
                  www.LinkedIn.com
                </a>
                {contactInfo.socialLinks.map((socialLink, index) => (
                  <div key={index}>
                    <p className="fieldVal">
                      {editingIndex === index ? (
                        <div className="AddInput">
                          <input
                            value={socialLink}
                            onChange={(e) =>
                              updateFieldValue(
                                "socialLinks",
                                index,
                                e.target.value
                              )
                            }
                            style={{
                              border: "1px solid grey",
                              outline: "none",
                            }}
                          />
                          {editingIndex === index ? (
                            <button
                              onClick={() =>
                                finishEditing("socialLinks", index)
                              }
                              style={{
                                border: "1px solid grey",
                                backgroundColor: "transparent",
                                display: "inline-flex",
                                height: "26px",
                                width: "26px",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <RiAddLine />
                            </button>
                          ) : (
                            // <button onClick={() => setEditingIndex(index)}>
                            //   <RiAddLine /> Edit
                            // </button>
                            ""
                          )}
                        </div>
                      ) : (
                        <>
                          <BiLinkAlt />
                          <span>{socialLink}</span>
                        </>
                      )}

                      <button onClick={() => removeField("socialLinks", index)}>
                        Remove
                      </button>
                    </p>
                  </div>
                ))}
                <button
                  className="addfieldButton"
                  onClick={() => addField("socialLinks")}
                >
                  <AiFillPlusCircle />
                  Add Social Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </BodyComponent>
    </React.Fragment>
  );
};
