import React,{useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const Modals = () => {
    const [modalIsOpen,setModalIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Open modal</button>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay:{backgroundColor:'grey'},
                        content:{ color:'orange'}
                    }
                }
                >
                <h2>Modal Title</h2>
                <p>Modal body</p>
                <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
            </Modal>
        </div>
    )
}

export default Modals
