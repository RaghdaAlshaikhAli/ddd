import React from 'react'
import { useEditContext } from './../../../context/editContext';

const Experience = () => {
    const [isEditing, setIsEditing] = useEditContext();
    return (
        <div className="experience">
            <div className="title">Experience</div>
            {isEditing ? <>
                <div className="wrapper">
                    <div className="items">
                        <div className="company">
                            <div className="name">Owner at Zenar Company</div>
                            <div className="time">March 2020 - now</div>
                            <div className="btns"><div className="deleteButton">Delete</div>
                                <div className="editButton">Edit</div></div>
                        </div>
                        <div className="company">
                            <div className="name">Owner at Zenar Company</div>
                            <div className="time">March 2020 - now</div>
                            <div className="btns"><div className="deleteButton">Delete</div>
                                <div className="editButton">Edit</div></div>
                        </div>
                        <div className="company">
                            <div className="name">Owner at Zenar Company</div>
                            <div className="time">March 2020 - now</div>
                            <div className="btns"><div className="deleteButton">Delete</div>
                                <div className="editButton">Edit</div></div>
                        </div>
                        <div className="company">
                            <div className="name">Owner at Zenar Company</div>
                            <div className="time">March 2020 - now</div>
                            <div className="btns"><div className="deleteButton">Delete</div>
                                <div className="editButton">Edit</div></div>
                        </div>
                    </div>
                    <div className="add">
                        <div className="addTitle">Add New Experience Field</div>
                        <label>Name : <input type="text" /></label>
                        <label>History : <input type="text" /></label>
                        <div className="addButton">Add</div>
                    </div>
                </div>
            </> : <> <div className="wrapper">
                <div className="items">
                    <div className="company">
                        <div className="name">Owner at Zenar Company</div>
                        <div className="time">March 2020 - now</div>
                    </div>
                    <div className="company">
                        <div className="name">Owner at Zenar Company</div>
                        <div className="time">March 2020 - now</div>
                    </div>
                    <div className="company">
                        <div className="name">Owner at Zenar Company</div>
                        <div className="time">March 2020 - now</div>
                    </div>
                    <div className="company">
                        <div className="name">Owner at Zenar Company</div>
                        <div className="time">March 2020 - now</div>
                    </div>
                </div>
            </div></>}
        </div>
    )
}

export default Experience