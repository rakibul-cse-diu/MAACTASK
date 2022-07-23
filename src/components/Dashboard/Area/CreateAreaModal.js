import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { createArea, getArea } from '../../../services/actions/areaAction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAreaModal = () => {
    const [newArea, setNewArea] = useState("");
    const [newRegion, setNewRegion] = useState("62d7ae07019ff300120f1d00");
    const createdArea = useSelector(state => state.createdArea);
    const allRegion = useSelector(state => state.getRegion);
    const dispatch = useDispatch();

    const handleCreate = () => {
        const area = {
            name: newArea,
            region: newRegion
        }
        dispatch(createArea(area));
        if (!createdArea.haveError) {
            dispatch(getArea())
            toast.success("Area created successfully!")
            setNewArea("");
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
                    <select onChange={(e) => {
                        setNewRegion(e.target.value)
                        console.log(newRegion)
                    }} class="bg-primary select select-bordered border-[#CED4DA] py-1 w-3/4 text-[#495057]">
                        <option defaultValue="Dhaka">Select region</option>
                        {
                            allRegion.regions?.region?.map((region, index) => <option key={index} value={region._id}>{region.name}</option>)
                        }
                    </select>
                    <h3 className="font-normal py-4 text-base text-[#495057]">Area</h3>
                    <input onChange={(e) => setNewArea(e.target.value)} type="text" name="area" id="area" className='input bg-primary border border-[#CED4DA] py-1 w-3/4 text-[#495057]' />
                    <div className="modal-action mt-10">
                        <button onClick={() => handleCreate()} className="btn btn-neutral capitalize text-primary">Add Area</button>
                        <label htmlFor="create-region" className="btn capitalize btn-ghost">Cancel</label>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default CreateAreaModal;