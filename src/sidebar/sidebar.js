import './sidebar.css';
import { useState } from 'react';

export function Sidebar({ 
    scrollTo2,
    scrollTo3,              
    scrollTo4,
    scrollTo5,
}) {
    const [showDropdown, setDropdown] = useState(false);
    const [menu, setMenu] = useState(true);

    function showDropdownMenu() {
        setDropdown(true);
    }

    function hideDropdownMenu() {
        setDropdown(false);
    }

    function showMenu() {
        setMenu(true);
    }

    function hideMenu() {
        setMenu(false);
    }

    return (
        <div className='sidebar'>
            <div
                className='menu-button-container'
                onMouseEnter={() => {
                    showDropdownMenu()
                    hideMenu()
                }}
                onMouseLeave={() => {
                    hideDropdownMenu()
                }}
            >
                {
                    menu && <button className="menu-button">Menu</button>
                }
            </div>
            {showDropdown && (
                <div
                    className="side-button-container"
                    onMouseEnter={showDropdownMenu}
                    onMouseLeave={() => {
                        hideDropdownMenu()
                        showMenu()
                    }}
                >
                    <button onClick={scrollTo3} className="side-button">About Us</button>
                    <button onClick={scrollTo4} className="side-button">Contact Us</button>
                    <button onClick={scrollTo5} className="side-button">Meetings</button>
                    <button onClick={scrollTo2} className="side-button">Testimonials</button>
                </div>
            )}
        </div>
    );
}
