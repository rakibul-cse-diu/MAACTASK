import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getArea } from '../../../services/actions/areaAction';
import RowArea from './RowArea';
import CreateAreaModal from './CreateAreaModal';

const Area = () => {
    const allArea = useSelector(state => state.getArea);
    const [searchInput, setSearchInput] = useState("");
    const [matchedArea, setmatchedArea] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArea());
    }, [dispatch])

    const handlechange = (e) => {
        setSearchInput(e.target.value);
        const matched = allArea.areas.area.filter(area => area.name.includes(searchInput))
        if (matched) {
            setmatchedArea(matched)
        } else {
            setmatchedArea([]);
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
                                <th className='border-b-[1px]'>Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                matchedArea[0] ? matchedArea.map((area, index) => <RowArea
                                    key={area._id}
                                    area={area.name}
                                    region={area.region.name}
                                    index={index}
                                // refetch={refetch}
                                ></RowArea>) :
                                    allArea.areas?.area?.map((area, index) => <RowArea
                                        key={area._id}
                                        area={area.name}
                                        region={area.region.name}
                                        index={index}
                                    // refetch={refetch}
                                    ></RowArea>)
                            }
                        </tbody>
                    </table>
                </div>
                <CreateAreaModal />
            </div>
        </div>
    );
};

export default Area;