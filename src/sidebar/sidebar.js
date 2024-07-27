import './sidebar.css';
import { useState } from 'react';

export function Sidebar({ scrollTo }) {
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
                    <button onClick={scrollTo} className="side-button">About Us</button>
                    <button onClick={scrollTo} className="side-button">Contact Us</button>
                    <button onClick={scrollTo} className="side-button">Meetings</button>
                    <button onClick={scrollTo} className="side-button">Testimonials</button>
                </div>
            )}
        </div>
    );
}
