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
  const [userData, setUserData] = useState({
    firstname:"",
    lastname:"",
    email: "",
    phone: "",
  });

  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = (email) => {
    return emailRegex.test(email);
  };
  const [addEmailVal, setAddEmailVal] = useState({
    email1: "",
    email2: "",
    email3: "",
    email4: "",
  });
  const [removeEmail, setremoveEmail] = useState(0);
  const [addEmail1, setAddEmail1] = useState(false);
  const [addedEmail1, setAddedEmail1] = useState(false);
  const [addEmail2, setAddEmail2] = useState(false);
  const [addedEmail2, setAddedEmail2] = useState(false);
  const [addEmail3, setAddEmail3] = useState(false);
  const [addedEmail3, setAddedEmail3] = useState(false);
  const [addEmail4, setAddEmail4] = useState(false);
  const [addedEmail4, setAddedEmail4] = useState(false);
  const [email1Valid, setEmail1Valid] = useState(true);
  const [email2Valid, setEmail2Valid] = useState(true);
  const [email3Valid, setEmail3Valid] = useState(true);
  const [email4Valid, setEmail4Valid] = useState(true);
  const getEmailVal = (e) => {
    setAddEmailVal({ ...addEmailVal, [e.target.name]: e.target.value });
  };
  const onClickEmail1 = () => {
    if (emailRegex.test(addEmailVal.email1)) {
      setAddedEmail1(true);
      setremoveEmail(1);
    } else {
      setEmail1Valid(false);
    }
  };
  const onClickEmail2 = () => {
    if (emailRegex.test(addEmailVal.email2)) {
      setAddedEmail2(true);
      setremoveEmail(2);
    } else {
      setEmail2Valid(false);
    }
  };
  const onClickEmail3 = () => {
    if (emailRegex.test(addEmailVal.email3)) {
      setAddedEmail3(true);
      setremoveEmail(3);
    } else {
      setEmail3Valid(false);
    }
  };
  const onClickEmail4 = () => {
    if (emailRegex.test(addEmailVal.email4)) {
      setAddedEmail4(true);
      setremoveEmail(4);
    } else {
      setEmail4Valid(false);
    }
  };

  const [addPhoneVal, setAddPhoneVal] = useState({
    phone1: "",
    phone2: "",
    phone3: "",
    phone4: "",
  });
  const [removePhone, setremovePhone] = useState(0);
  const [addPhone1, setAddPhone1] = useState(false);
  const [addedPhone1, setAddedPhone1] = useState(false);
  const [addPhone2, setAddPhone2] = useState(false);
  const [addedPhone2, setAddedPhone2] = useState(false);
  const [addPhone3, setAddPhone3] = useState(false);
  const [addedPhone3, setAddedPhone3] = useState(false);
  const [addPhone4, setAddPhone4] = useState(false);
  const [addedPhone4, setAddedPhone4] = useState(false);
  const getPhoneVal = (e) => {
    setAddPhoneVal({ ...addPhoneVal, [e.target.name]: e.target.value });
  };

  const [addSocialVal, setAddSocialVal] = useState({
    social1: "",
    social2: "",
    social3: "",
    social4: "",
  });
  const [removeSocial, setremoveSocial] = useState(0);
  const [addSocial1, setAddSocial1] = useState(false);
  const [addedSocial1, setAddedSocial1] = useState(false);
  const [addSocial2, setAddSocial2] = useState(false);
  const [addedSocial2, setAddedSocial2] = useState(false);
  const [addSocial3, setAddSocial3] = useState(false);
  const [addedSocial3, setAddedSocial3] = useState(false);
  const [addSocial4, setAddSocial4] = useState(false);
  const [addedSocial4, setAddedSocial4] = useState(false);
  const getSocialVal = (e) => {
    setAddSocialVal({ ...addSocialVal, [e.target.name]: e.target.value });
  };

  const [userNum, setUserNum] = useState("");

  const [userDetails, setUserDetails] = useState();
  const [edit, setEdit] = useState(false);
  const getInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  
    const updatedData = {
      firstname: !userData.firstname ? userDetails.firstname : userData.firstname,
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
  }, [userDetails]);

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
                  align="center"
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

                      <input type="text" defaultValue={userDetails?.firstname} readOnly style={{
                        color:"#858585"
                      }} />
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
                      <input type="text" defaultValue={userDetails?.lastname} readOnly style={{
                        color:"#858585"
                      }} />
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
                      <input type="email" defaultValue={userDetails?.email} readOnly style={{
                        color:"#858585"
                      }} />
                      
                    )}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  <div className="formField">
                    <label htmlFor="">Address</label>
                    {edit === true ? (
                      <input type="text" placeholder="Customer Address Here" />
                    ) : (
                        <input type="text" defaultValue="-------" readOnly style={{
                            color:"#858585"
                          }} />
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
                      <input type="text" defaultValue={userDetails?.phone} readOnly style={{
                        color:"#858585"
                      }} />
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
                      <input type="text" defaultValue="-------" readOnly style={{
                        color:"#858585"
                      }} />
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
                        <input type="text" defaultValue="-------" readOnly style={{
                            color:"#858585"
                          }} />
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
                        backgroundColor: "#0B2360",
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
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
              <h5 className="formHeading5 addFieldMargin">Contact Info</h5>
              <div className="addFields addFieldMargin">
                <p className="fieldHead">Email</p>
                <p className="fieldVal">
                  {" "}
                  {userEmail ? userEmail : `xyz@email.com`}
                </p>
                {addedEmail1 && (
                  <p className="fieldVal"> {addEmailVal.email1} </p>
                )}
                {addedEmail2 && (
                  <p className="fieldVal"> {addEmailVal.email2} </p>
                )}
                {addedEmail3 && (
                  <p className="fieldVal"> {addEmailVal.email3} </p>
                )}
                {addedEmail4 && (
                  <p className="fieldVal"> {addEmailVal.email4} </p>
                )}

                {removeEmail == 0 && (
                  <>
                    {addEmail1 ? (
                      <div className="AddInput">
                        <input
                          type="email"
                          className={email1Valid ? "" : "invalid"}
                          name="email1"
                          value={addEmailVal.email1}
                          onChange={getEmailVal}
                        />
                        <button onClick={onClickEmail1}>
                          {" "}
                          <RiAddLine />{" "}
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddEmail1(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Email</span>
                      </button>
                    )}
                  </>
                )}
                {removeEmail == 1 && (
                  <>
                    {addEmail2 ? (
                      <div className="AddInput">
                        <input
                          type="email"
                          className={email1Valid ? "" : "invalid"}
                          name="email2"
                          value={addEmailVal.email2}
                          onChange={getEmailVal}
                        />
                        <button onClick={onClickEmail2}>
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddEmail2(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Email</span>
                      </button>
                    )}
                  </>
                )}
                {removeEmail == 2 && (
                  <>
                    {addEmail3 ? (
                      <div className="AddInput">
                        <input
                          className={email1Valid ? "" : "invalid"}
                          type="email"
                          name="email3"
                          value={addEmailVal.email3}
                          onChange={getEmailVal}
                        />
                        <button onClick={onClickEmail3}>
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddEmail3(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Email</span>
                      </button>
                    )}
                  </>
                )}
                {removeEmail == 3 && (
                  <>
                    {addEmail4 ? (
                      <div className="AddInput">
                        <input
                          className={email1Valid ? "" : "invalid"}
                          type="email"
                          name="email4"
                          value={addEmailVal.email4}
                          onChange={getEmailVal}
                        />
                        <button onClick={onClickEmail4}>
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddEmail4(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Email</span>
                      </button>
                    )}
                  </>
                )}
              </div>
              <div className="addFields addFieldMargin">
                <p className="fieldHead">Phone</p>
                <p className="fieldVal">
                  {" "}
                  {userPhone ? userPhone : `123456789`}{" "}
                </p>
                {addedPhone1 && (
                  <p className="fieldVal"> {addPhoneVal.phone1} </p>
                )}
                {addedPhone2 && (
                  <p className="fieldVal"> {addPhoneVal.phone2} </p>
                )}
                {addedPhone3 && (
                  <p className="fieldVal"> {addPhoneVal.phone3} </p>
                )}
                {addedPhone4 && (
                  <p className="fieldVal"> {addPhoneVal.phone4} </p>
                )}
                {removePhone == 0 && (
                  <>
                    {addPhone1 ? (
                      <div className="AddInput">
                        <input
                          type="number"
                          name="phone1"
                          value={addPhoneVal.phone1}
                          onChange={getPhoneVal}
                        />
                        <button
                          onClick={() => {
                            setAddedPhone1(true), setremovePhone(1);
                          }}
                        >
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddPhone1(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Phone Number</span>
                      </button>
                    )}
                  </>
                )}
                {removePhone == 1 && (
                  <>
                    {addPhone2 ? (
                      <div className="AddInput">
                        <input
                          type="number"
                          name="phone2"
                          value={addPhoneVal.phone2}
                          onChange={getPhoneVal}
                        />
                        <button
                          onClick={() => {
                            setAddedPhone2(true), setremovePhone(2);
                          }}
                        >
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddPhone2(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Phone Number</span>
                      </button>
                    )}
                  </>
                )}
                {removePhone == 2 && (
                  <>
                    {addPhone3 ? (
                      <div className="AddInput">
                        <input
                          type="number"
                          name="phone3"
                          value={addPhoneVal.phone3}
                          onChange={getPhoneVal}
                        />
                        <button
                          onClick={() => {
                            setAddedPhone3(true), setremovePhone(3);
                          }}
                        >
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddPhone3(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Phone Number</span>
                      </button>
                    )}
                  </>
                )}
                {removePhone == 3 && (
                  <>
                    {addPhone4 ? (
                      <div className="AddInput">
                        <input
                          type="number"
                          name="phone4"
                          value={addPhoneVal.phone4}
                          onChange={getPhoneVal}
                        />
                        <button
                          onClick={() => {
                            setAddedPhone4(true), setremovePhone(4);
                          }}
                        >
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddPhone4(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Phone Number</span>
                      </button>
                    )}
                  </>
                )}
              </div>
              <div className="addFields addFieldMargin">
                <p className="fieldHead">Social Links</p>
                {addedSocial1 && (
                  <a
                    className="fieldVal fieldAnchor fieldValNo"
                    href={`${addSocialVal.social1}`}
                    target="_blank"
                  >
                    <BiLinkAlt />
                    {addSocialVal.social1}{" "}
                  </a>
                )}
                {addedSocial2 && (
                  <a
                    className="fieldVal fieldAnchor fieldValNo"
                    href={`${addSocialVal.social2}`}
                    target="_blank"
                  >
                    <BiLinkAlt />
                    {addSocialVal.social2}{" "}
                  </a>
                )}
                {addedSocial3 && (
                  <a
                    className="fieldVal fieldAnchor fieldValNo"
                    href={`${addSocialVal.social3}`}
                    target="_blank"
                  >
                    <BiLinkAlt />
                    {addSocialVal.social3}{" "}
                  </a>
                )}
                {addedSocial4 && (
                  <a
                    className="fieldVal fieldAnchor fieldValNo"
                    href={`${addSocialVal.social4}`}
                    target="_blank"
                  >
                    <BiLinkAlt />
                    {addSocialVal.social4}{" "}
                  </a>
                )}
                <a
                  className="fieldVal fieldAnchor fieldValNo"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <SiFacebook style={{ color: "#1877F2" }} /> www.facebook.com
                </a>
                <a
                  className="fieldVal fieldAnchor fieldValNo"
                  href="https://www.twitter.com/"
                  target="_blank"
                >
                  <AiFillTwitterCircle style={{ color: "#26a7de " }} />{" "}
                  www.twitter.com
                </a>
                <a
                  className="fieldVal fieldAnchor"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <AiFillLinkedin style={{ color: "#1877F2" }} />{" "}
                  www.LinkedIn.com
                </a>

                {removeSocial == 0 && (
                  <>
                    {addSocial1 ? (
                      <div className="AddInput">
                        <input
                          type="text"
                          name="social1"
                          value={addSocialVal.social1}
                          onChange={getSocialVal}
                        />
                        <button
                          onClick={() => {
                            setAddedSocial1(true), setremoveSocial(1);
                          }}
                        >
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddSocial1(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Social Link</span>
                      </button>
                    )}
                  </>
                )}
                {removeSocial == 1 && (
                  <>
                    {addSocial2 ? (
                      <div className="AddInput">
                        <input
                          type="text"
                          name="social2"
                          value={addSocialVal.social2}
                          onChange={getSocialVal}
                        />
                        <button
                          onClick={() => {
                            setAddedSocial2(true), setremoveSocial(2);
                          }}
                        >
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddSocial2(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Social Link</span>
                      </button>
                    )}
                  </>
                )}
                {removeSocial == 2 && (
                  <>
                    {addSocial3 ? (
                      <div className="AddInput">
                        <input
                          type="text"
                          name="social3"
                          value={addSocialVal.social3}
                          onChange={getSocialVal}
                        />
                        <button
                          onClick={() => {
                            setAddedSocial3(true), setremoveSocial(3);
                          }}
                        >
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddSocial3(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Social Link</span>
                      </button>
                    )}
                  </>
                )}
                {removeSocial == 3 && (
                  <>
                    {addSocial4 ? (
                      <div className="AddInput">
                        <input
                          type="text"
                          name="social4"
                          value={addSocialVal.social4}
                          onChange={getSocialVal}
                        />
                        <button
                          onClick={() => {
                            setAddedSocial4(true), setremoveSocial(4);
                          }}
                        >
                          <RiAddLine />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="addfieldButton"
                        onClick={() => setAddSocial4(true)}
                      >
                        <AiFillPlusCircle />
                        <span>Add Social Link</span>
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </BodyComponent>
    </React.Fragment>
  );
};
