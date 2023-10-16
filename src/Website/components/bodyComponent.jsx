import React from 'react'
import SearchBar from './searchBar'


const BodyComponent = ({ children }) => {
    return (
        <section className='mainSection'>
            <div className="container">
                <div className="mainSectionWrapper">

                    <div className="mainSectionInner">
                        
                        <div className='mobileSearch'>
                            <SearchBar />
                        </div>
                        {children}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BodyComponent