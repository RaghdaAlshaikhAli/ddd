import React, { useState } from 'react'

const Avatar = () => {
    const [file, setFile] = useState("");
    const [active, setActive] = useState(true);

    const toggleBtn = () => {
        setActive(!active);
    }
    return (
        <>
            <div className='avatar'>
                <div><img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="avatar" /></div>
                <label htmlFor="file"><div className="editButton">Edit</div></label>
            </div>
            <input type="file" id='file' style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
            <div className="desc">
                <div className="title">John Joe</div>
                <div className="surName">Owner of zenar Shop .</div>
                <div className="desc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget nisi sed arcu ultrices ultrices. Nulla eget nisi sed arcu</div>
            </div>
            <div className="status">
                <span>Status</span>
                <span className={active ? "active" : "offLine"} onClick={toggleBtn}>{active ? "Active" : "offLine"}</span>
            </div>
            <div className="membership">
                <span>Membership</span>
                <span>Nov 06,2023</span>
            </div>
        </>
    )
}

export default Avatar