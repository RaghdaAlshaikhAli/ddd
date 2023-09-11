import React, { useState } from 'react';
import './style.scss';
import Menu from './Menu';

const SubHeader = () => {
    const [showMenu, setShowMenu] = useState({});

    const toggleShow = (item) => {
        setShowMenu((prevShowMenu) => ({
            ...prevShowMenu,
            [item]: !prevShowMenu[item],
        }));
    };

    return (
        <div className='subHeader'>
            <ul>
                <li onClick={() => toggleShow('Palestine')}>Palestine</li>
                {showMenu['Palestine'] && <Menu country="Palestine" />}
                <li onClick={() => toggleShow('Egypt')}>Egypt</li>
                {showMenu['Egypt'] && <Menu country="Egypt" />}
                <li onClick={() => toggleShow('London')}>London</li>
                {showMenu['London'] && <Menu country="London" />}
                <li onClick={() => toggleShow('Packestan')}>Packestan</li>
                {showMenu['Packestan'] && <Menu country="Packestan" />}
                <li onClick={() => toggleShow('Soudia')}>Soudia</li>
                {showMenu['Soudia'] && <Menu country="Soudia" />}
                <li onClick={() => toggleShow('Jordan')}>Jordan</li>
                {showMenu['Jordan'] && <Menu country="Jordan" />}

            </ul>
        </div>
    );
};

export default SubHeader;
