import React from 'react'

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column'
    },
};
const buttonStyles = {
    position: 'absolute',
    top: '0',
    right: '0',
    border: 'none',
    background: 'transparent',
    fontSize: '20px',
    color: '#6eb0f0',
    padding: '0 10px',
    fontWeight: 'bold',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
}
const AddStyle = {
    border: 'none',
    background: '#6eb0f0',
    padding: '10px',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: '700'
}
const Div = {
    display: 'flex',
    flexDirection: 'column',

}
const Head = {
    padding: '0 10px',
    fontWeight: '500',
    color: '#6eb0f0',
}
const TextArea = {
    background:'#b8d0e7',
    border:'none',
    borderRadius:'5px'
}
const Add = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#6eb0f0';
        subtitle.style.fontSize = '20px';
        subtitle.style.fontWeight = '800';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="card">
            <div className="add-style">
                <button onClick={openModal}>+</button>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Service</h2>
                    <button onClick={closeModal} style={buttonStyles}>x</button>
                    <form style={formStyle}>
                        <input type='file' />
                        <div style={Div}>
                            <span style={Head}>Description</span>
                            <textarea cols="30" rows="10" style={TextArea}></textarea>
                        </div>
                        <button style={AddStyle}>Add</button>
                    </form>
                </Modal>
            </div>
        </div>
    )
}

export default Add