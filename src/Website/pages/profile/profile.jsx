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
  
  const [editingIndexEmails, setEditingIndexEmails] = useState(-1);
  const [editingIndexPhones, setEditingIndexPhones] = useState(-1);
  const [editingIndexSocialLinks, setEditingIndexSocialLinks] = useState(-1);
  
  const [showAddEmail, setShowAddEmail] = useState(false);
  const [showAddPhone, setShowAddPhone] = useState(false);
  const [showAddSocial, setShowAddSocial] = useState(false);
  
  const addEmail = () => {
    setContactInfo({
      ...contactInfo,
      emails: [...contactInfo.emails, ""],
    });
    setShowAddEmail(true);
    setEditingIndexEmails(contactInfo.emails.length);
  };
  
  const addPhone = () => {
    setContactInfo({
      ...contactInfo,
      phones: [...contactInfo.phones, ""],
    });
    setShowAddPhone(true);
    setEditingIndexPhones(contactInfo.phones.length);
  };
  
  const addSocialLink = () => {
    setContactInfo({
      ...contactInfo,
      socialLinks: [...contactInfo.socialLinks, ""],
    });
    setShowAddSocial(true);
    setEditingIndexSocialLinks(contactInfo.socialLinks.length);
  };
  
  const removeEmail = (index) => {
    const updatedFields = [...contactInfo.emails];
    updatedFields.splice(index, 1);
    setContactInfo({
      ...contactInfo,
      emails: updatedFields,
    });
    setEditingIndexEmails(-1);
  };
  
  const removePhone = (index) => {
    const updatedFields = [...contactInfo.phones];
    updatedFields.splice(index, 1);
    setContactInfo({
      ...contactInfo,
      phones: updatedFields,
    });
    setEditingIndexPhones(-1);
  };
  
  const removeSocialLink = (index) => {
    const updatedFields = [...contactInfo.socialLinks];
    updatedFields.splice(index, 1);
    setContactInfo({
      ...contactInfo,
      socialLinks: updatedFields,
    });
    setEditingIndexSocialLinks(-1);
  };
  
  const updateEmailValue = (index, value) => {
    const updatedFields = [...contactInfo.emails];
    updatedFields[index] = value;
    setContactInfo({
      ...contactInfo,
      emails: updatedFields,
    });
  };
  
  const updatePhoneValue = (index, value) => {
    const updatedFields = [...contactInfo.phones];
    updatedFields[index] = value;
    setContactInfo({
      ...contactInfo,
      phones: updatedFields,
    });
  };
  
  const updateSocialLinkValue = (index, value) => {
    const updatedFields = [...contactInfo.socialLinks];
    updatedFields[index] = value;
    setContactInfo({
      ...contactInfo,
      socialLinks: updatedFields,
    });
  };
  
  const finishEditingEmail = () => {
    setShowAddEmail(false);
    setEditingIndexEmails(-1);
  };
  
  const finishEditingPhone = () => {
    setShowAddPhone(false);
    setEditingIndexPhones(-1);
  };
  
  const finishEditingSocialLink = () => {
    setShowAddSocial(false);
    setEditingIndexSocialLinks(-1);
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
                    <div className="fieldVal">
                      {editingIndexEmails === index ? (
                        <div className="AddInput">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                              updateEmailValue(index, e.target.value)
                            }
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                finishEditingEmail();
                              }
                            }}
                            style={{
                              border: "1px solid grey",
                              outline: "none",
                            }}
                          />
                          {editingIndexEmails === index ? (
                            <button
                              onClick={() =>finishEditingEmail() }
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
                            ""
                          )}
                        </div>
                      ) : (
                        <span>{email}</span>
                      )}

                      <button onClick={() => removeEmail(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                {showAddEmail === false && (
                  <button
                    className="addfieldButton"
                    onClick={() => addEmail()}
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
                    <div className="fieldVal">
                      {editingIndexPhones === index ? (
                        <div className="AddInput">
                          <input
                            type="email"
                            value={phone}
                            onChange={(e) =>
                              updatePhoneValue(index, e.target.value)
                            }
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                finishEditingPhone();
                              }
                            }}
                            style={{
                              border: "1px solid grey",
                              outline: "none",
                            }}
                          />
                          {editingIndexPhones === index ? (
                            <button
                              onClick={() => finishEditingPhone()}
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
                            ""
                          )}
                        </div>
                      ) : (
                        <span>{phone}</span>
                      )}

                      <button onClick={() => removePhone(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                {showAddPhone === false && (
                  <button
                    className="addfieldButton"
                    onClick={() => addPhone()}
                  >
                    <AiFillPlusCircle />
                    Add Phone Number
                  </button>
                )}
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
                    <div className="fieldVal">
                      {editingIndexSocialLinks === index ? (
                        <div className="AddInput">
                          <input
                            value={socialLink}
                            onChange={(e) =>
                              updateSocialLinkValue(
                                index,
                                e.target.value
                              )
                            }
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                finishEditingSocialLink();
                              }
                            }}
                            style={{
                              border: "1px solid grey",
                              outline: "none",
                            }}
                          />
                          {editingIndexSocialLinks === index ? (
                            <button
                              onClick={() =>
                                finishEditingSocialLink()
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
                            ""
                          )}
                        </div>
                      ) : (
                        <>
                          <BiLinkAlt />
                          <span>{socialLink}</span>
                        </>
                      )}

                      <button onClick={() => removeSocialLink(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                {showAddSocial === false && (
                  <button
                    className="addfieldButton"
                    onClick={() => addSocialLink()}
                  >
                    <AiFillPlusCircle />
                    Add Social Link
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </BodyComponent>
    </React.Fragment>
  );
};
