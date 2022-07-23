import React, { useEffect, useState } from 'react';
import './Region.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRegion } from '../../../services/actions/regionActon';
import Row from '../Row';
import CreateRegionModal from './CreateRegionModal';

const Region = () => {
    const allRegion = useSelector(state => state.getRegion);
    const [searchInput, setSearchInput] = useState("");
    const [matchedRegion, setmatchedRegion] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRegion());
    }, [dispatch])

    const handlechange = (e) => {
        setSearchInput(e.target.value);
        const matched = allRegion.regions.region.filter(region => region.name.includes(searchInput))
        if (matched) {
            setmatchedRegion(matched)
        } else {
            setmatchedRegion([]);
        }
    }

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <label htmlFor="create-region" className='btn btn-[#0B2E4E] capitalize text-primary relative left-[400px]'>+ Create New</label>
            <div className='bg-primary mt-9 min-h-[300px] w-[1000px] shadow-lg rounded-sm flex flex-col justify-start items-center h-[450px]'>
                <div className='w-full pr-5 pt-5'>
                    <div class="form-control flex flex-row justify-end w-full">
                        <input onChange={handlechange} type="text" placeholder="Search" class="input input-bordered bg-primary mr-3 rounded-full py-1" />
                        <select class="select w-[200px] bg-primary input-bordered rounded-full py-1">
                            <option defaultValue={100}>100</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto w-full m-5">
                    <table className="table-auto table-compact w-full">
                        <thead className='bg-[#F8F9FA]'>
                            <tr>
                                <th className='border-b-[1px]'><input type="checkbox" class="checkbox bg-[#DBDBDB]" /></th>
                                <th className='border-b-[1px]'>Sl.No.</th>
                                <th className='border-b-[1px]'>Region</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                matchedRegion[0] ? matchedRegion.map((region, index) => <Row
                                    key={region._id}
                                    region={region.name}
                                    index={index}
                                // refetch={refetch}
                                ></Row>) :
                                    allRegion.regions?.region?.map((region, index) => <Row
                                        key={region._id}
                                        region={region.name}
                                        index={index}
                                    // refetch={refetch}
                                    ></Row>)
                            }
                        </tbody>
                    </table>
                </div>
                <CreateRegionModal />
            </div>
        </div>
    );
};

export default Region;