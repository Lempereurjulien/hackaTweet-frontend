import { useState } from 'react';
import ReactModal from 'react-modal';

export default function Modal(props){

    const [modal, setModal] = useState(false);

    const toogleModal = () =>{
         props.check = false;
    }
    return(
        <>
        <ReactModal isOpen={props.check}>
            <button onClick={toogleModal}></button>
        </ReactModal>
        </>
    )
}