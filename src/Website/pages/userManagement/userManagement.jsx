import React, { useEffect, useState } from "react";
import BodyComponent from "../../components/bodyComponent";
import ReactPaginate from "react-paginate";
import profileImg from "../../../assets/images/guy.png";
// import { BsFillCameraVideoFill, BsFillChatDotsFill, BsTelephoneFill } from 'react-icons/bs';
// import { AiOutlineDelete } from 'react-icons/ai';
import { UserApi } from "../../../services/adminApis/User";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { AiOutlineClose } from "react-icons/ai";
import "../Auth/styles.css";
export const UserManagement = () => {
  const { getAllUsers, sendCompanyInvite } = UserApi();

  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 6;
  const [allUsers, setAllUsers] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [deleteDialogue, setDeleteDialogue] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);
  const [data, setData] = useState({
    invitee: "",
    type: "",
    name: "",
  });
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);
  const openDeleteDialogue = () => {
    setDeleteDialogue(true);
  };

  const closeDeleteDialogue = () => {
    setDeleteDialogue(false);
  };
  const openEditModal = () => {
    setEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditModal(false);
  };
  const openInviteModal = () => {
    setInviteModal(true);
  };
  const handleCloseInviteModal = () => {
    setInviteModal(false);
  };
  const getAllUser = async () => {
    try {
      const response = await getAllUsers();
      setAllUsers(response.data.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendInvite = async () => {
    setInviteModal(false);
    console.log(data);
    try {
      const response = await sendCompanyInvite(data);
      console.log("response", response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <BodyComponent>
        <div className="row g-3">
          <div className="col-12">
            <h2 className="cardMainHeading">User Management</h2>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <button onClick={openInviteModal} className="inviteeButn">Invite</button>
            </div>
            <div className="communicationTable privacyTable">
              <div className="table-responsive privacyPagination">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Agents</th>
                      <th>Date Created</th>
                      <th>Role</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedUsers?.map((item, index) => (
                      <tr key={item.id}>
                        <td>
                          <div className="privacyAgentCol">
                            <p>{startIndex + index + 1}</p>
                          </div>
                        </td>
                        <td>
                          <div className="privacyAgentCol">
                            <img src={profileImg} alt="" />
                            <p>
                              {item.firstname} {item.lastname}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="privacyStatusCol">
                            <p>
                              {item.createdAt
                                ? new Date(item.createdAt).toLocaleDateString()
                                : ""}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="privacyStatusCol">
                            <p>{item.role}</p>
                          </div>
                        </td>
                        <td>
                          <div className="privacyStatusCol">
                            <p>{item.phone || "----"}</p>
                          </div>
                        </td>
                        <td>
                          <div className="actionButtons">
                            <button className="green" onClick={openEditModal}>
                              Edit
                            </button>
                            <button
                              className="delete"
                              onClick={openDeleteDialogue}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={Math.ceil(allUsers.length / perPage)}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageChange}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>
      </BodyComponent>
      {editModal && (
        <Modal
          show={editModal}
          onHide={handleCloseEditModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseEditModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
      {inviteModal && (
        <Modal
          show={inviteModal}
          onHide={handleCloseInviteModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Send Invite
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "100%",
                alignItems: "center",
              }}
            >
              <input
                placeholder="email of user or agent to be invited"
                value={data.invitee}
                type="email"
                onChange={onChange}
                name="invitee"
                className="managementInputs"
              />
              <input
                placeholder="Name"
                value={data.name}
                onChange={onChange}
                name="name"
                className="managementInputs"
              />
              <select
                name="type"
                value={data.type}
                onChange={onChange}
                className="managementInputs"
              >
                <option value="">Select inivte type</option>
                <option value="invite_user">User</option>
                <option value="agent">Agent</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={sendInvite}>Send Invite</Button>
            <Button onClick={handleCloseInviteModal} variant="danger">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {deleteDialogue && (
        <dialog id="modalLogout" className="modalLogout" open>
          <div className="modalLogoutMain">
            <button className="modalLogoutButton" onClick={closeDeleteDialogue}>
              <AiOutlineClose />
            </button>
            <p>Are you sure you want to delete?</p>
            <div className="logoutButtons">
              <button className="yesButton" onClick={closeDeleteDialogue}>
                Yes
              </button>
              <button className="NoButton" onClick={closeDeleteDialogue}>
                No
              </button>
            </div>
          </div>
        </dialog>
      )}
    </React.Fragment>
  );
};
