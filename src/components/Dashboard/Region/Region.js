import React, { useEffect } from 'react';
import './Region.css';
import createRegion from '../../../assets/images/dashboard-bg.png';
import { useDispatch, useSelector } from 'react-redux';
import { getRegion } from '../../../services/actions/regionActon';
import Row from '../Row';

const Region = () => {
    const allRegion = useSelector(state => state.getRegion);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRegion());
        console.log(allRegion)
    }, [])

    if (allRegion) {
        console.log(allRegion.regions.region)
    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <button className='btn btn-[#0B2E4E] capitalize text-primary relative left-[400px]'>+ Create New</button>
            <div className='bg-primary mt-9 min-h-[300px] w-[1000px] shadow-lg rounded-sm flex flex-col justify-center items-center h-[450px]'>
                <div className='w-full pr-5 pt-5'>
                    <div class="form-control flex flex-row justify-end w-full">
                        <input type="text" placeholder="Search" class="input input-bordered bg-primary mr-3 rounded-full py-1" />
                        <select class="select w-[200px] bg-primary input-bordered rounded-full py-1">
                            <option defaultValue={10}>10</option>
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
                                allRegion?.regions?.region?.map((region, index) => <Row
                                    key={region._id}
                                    region={region.name}
                                    index={index}
                                // refetch={refetch}
                                ></Row>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Region;