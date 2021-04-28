import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CustomToast = ({ closeToast }) => {
    return(
        <div>
            Something went wrong
            <button onClick={closeToast}>Close Me</button>
        </div>
    )
}

toast.configure()

const Toastify = () => {

    const notify = () => {
        toast('Basic notification',{position:toast.POSITION.TOP_LEFT})
        toast.success('Success notification',{position:toast.POSITION.TOP_CENTER,autoClose:8000})
        toast.info(<CustomToast />,{position:toast.POSITION.TOP_RIGHT,autoClose:false})
        toast.warn('Warning notification',{position:toast.POSITION.BOTTOM_LEFT})
        toast.error('Error notification',{position:toast.POSITION.BOTTOM_CENTER})
        toast('Basic notification',{position:toast.POSITION.BOTTOM_RIGHT})
    }
    return (
        <div>
            <button onClick={notify}>Notify Me</button>
        </div>
    )
}

export default Toastify
