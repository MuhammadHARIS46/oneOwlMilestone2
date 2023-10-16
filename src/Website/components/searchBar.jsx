import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { ROUTES } from '../../../utils/routes';
import { useNavigate } from 'react-router';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [searchData] = useState([
        { componentName: 'Incoming Sessions', componentRoute: ROUTES.DASHBOARD },
        { componentName: 'Total Conversation', componentRoute: ROUTES.DASHBOARD },
        { componentName: 'Total Transaction', componentRoute: ROUTES.DASHBOARD },
        { componentName: 'Average Waiting Time', componentRoute: ROUTES.DASHBOARD },
        { componentName: 'Conversation Summary', componentRoute: ROUTES.COMMUNICATION },
        { componentName: 'All Contact', componentRoute: ROUTES.PREFERENCE },
        { componentName: 'Activities', componentRoute: ROUTES.PREFERENCE },
        { componentName: 'Summary of Total Placed Orders', componentRoute: ROUTES.BILLING },
        { componentName: 'Summary of Engaged customers', componentRoute: ROUTES.PRIVACY },
        { componentName: 'Notification', componentRoute: ROUTES.NOTIFICATION },
    ]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Handle input field focus
    const handleInputFocus = () => {
        setShowSuggestions(true);
    };

    // Handle user input change
    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = searchData.filter((item) =>
            item.componentName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    };

    // Handle suggestion click to navigate
    const handleSuggestionClick = (route) => {
        navigate(route);
        setSearchQuery('');
        setShowSuggestions(false);
    };

    return (
        <div className="searchBarHeader">
            <CiSearch className='searchIcon' />
            <input
                type="text"
                name=""
                placeholder='Search'
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <button className='crossIcon' onClick={() => {setShowSuggestions(false), setSearchQuery('')}}>
                <RxCross1 />
            </button>

            {showSuggestions && (
                <ul className="suggestions">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion.componentRoute)}
                        >
                            {suggestion.componentName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;