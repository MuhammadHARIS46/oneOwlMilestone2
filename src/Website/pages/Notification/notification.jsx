import React, {  useState } from 'react'
import BodyComponent from '../../components/bodyComponent'
import { AiOutlineClose, AiOutlineWarning } from 'react-icons/ai'
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import {NotificationApi} from "../../../services/generalApis/Notification"
export const Notification = () => {

    const {ReadMyNotification} = NotificationApi()

    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        return formattedTime;
    }
    const currentTime = getCurrentTime();

    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 4;

    const [data, setData] = useState([
        {
            id:1,
            notificationHeader: 'Unread Notification - notification1',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            id:2,

            notificationHeader: 'Unread Notification - notification2',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            id:3,

            notificationHeader: 'Unread Notification - notification3',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            id:4,
            notificationHeader: 'Unread Notification - notification4',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            id:5,
            notificationHeader: 'Unread Notification - notification5',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            id:6,
            notificationHeader: 'Unread Notification - notification6',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            id:7,
            notificationHeader: 'Unread Notification - notification6',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {id:9,
            notificationHeader: 'Unread Notification - notification6',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
        {
            id:10,
            notificationHeader: 'Unread Notification - notification6',
            notificationBody: 'This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.'
        },
    ])

    const clearAllData = () => {
        setData([]); // Set data to an empty array
    };

    // Function to handle page change
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    // Calculate the starting and ending indices for the current page
    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;

    // Slice the data array to display only the items for the current page
    const displayedItems = data.slice(startIndex, endIndex);

    const clearItem = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };



    const [selectedItemHeader, setSelectedItemHeader] = useState("");
    const [selectedItemBody, setSelectedItemBody] = useState("");
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const openModal = () => {
        setIsLogoutModalOpen(true);
    };


    const closeModal = () => {
        setIsLogoutModalOpen(false);
    };
    const readMyNotification = async(id)=>{
        try{
            const response = await ReadMyNotification(id)
            console.log(response.data.data)
        }
        catch(err){
            console.log("error",err)
        }
    }

    return (
        <React.Fragment>
            <BodyComponent>
                <div className="notificationComponent">
                    <div className="headingMainCon">
                        <h3>Notification</h3>
                        <button className='clear' onClick={clearAllData}>Clear All</button>
                    </div>
                    {
                        displayedItems.map((item, keyId) => (


                            <div className="mainListComp" key={keyId}>
                                <div className="mainListHeading">
                                    <h6>
                                        <AiOutlineWarning />
                                        {item.notificationHeader}
                                    </h6>
                                    <span>{currentTime}</span>
                                </div>
                                <div className="mainListPara">
                                    {item.notificationBody}
                                </div>

                                <div className="listingButtons">
                                    <button className="clear" onClick={() => clearItem(keyId)}>
                                        Clear
                                    </button>
                                    <button className="View" onClick={() => {
                                        setSelectedItemHeader(item.notificationHeader);
                                        setSelectedItemBody(item.notificationBody);
                                        readMyNotification(item.id)
                                        openModal();
                                    }}>
                                        View
                                    </button>
                                </div>
                                <hr />
                            </div>
                        ))
                    }

                </div>

                {
                    data &&
                    <ReactPaginate
                        previousLabel={<MdKeyboardArrowLeft />}
                        nextLabel={<MdKeyboardArrowRight />}
                        breakLabel={'...'}
                        pageCount={Math.ceil(data.length / perPage)}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                }
            </BodyComponent>

            {isLogoutModalOpen && (
                <dialog id='modalNotification' className='modalLogout' open>
                    <div className="modalLogoutMain">

                        <button className='modalLogoutButton' onClick={closeModal}>
                            <AiOutlineClose />
                        </button>
                        <p className='headerNotify'>  <AiOutlineWarning /> {selectedItemHeader}</p>
                        <p>{selectedItemBody}</p>
                    </div>
                </dialog>
            )}
        </React.Fragment>
    )
}
