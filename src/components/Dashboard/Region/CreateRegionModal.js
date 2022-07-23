import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { createRegion, getRegion } from '../../../services/actions/regionActon';

const CreateRegionModal = () => {
    const [newRegion, setNewRegion] = useState("");
    const createdRegion = useSelector(state => state.createdRegion);
    const dispatch = useDispatch();

    const handleCreate = () => {
        const region = {
            name: newRegion
        }
        dispatch(createRegion(region));
        if (!createdRegion.haveError) {
            dispatch(getRegion())
            toast.success("Region created successfully!")
            setNewRegion("");
        } else {
            toast.error("Request fail!")
            return;
        }
    }
    return (
        <div>
            <input type="checkbox" id="create-region" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-primary">
                    <h3 className="font-normal py-4 text-base text-[#495057]">Region</h3>
                    <input onChange={(e) => setNewRegion(e.target.value)} type="text" name="region" id="region" className='input bg-primary border border-[#CED4DA] py-1 w-3/4 text-[#495057]' />
                    <div className="modal-action mt-10">
                        <button onClick={() => handleCreate()} className="btn btn-neutral capitalize text-primary">Add Region</button>
                        <label htmlFor="create-region" className="btn capitalize btn-ghost">Cancel</label>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default CreateRegionModal;