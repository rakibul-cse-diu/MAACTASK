import React from 'react';

const RowArea = ({ index, area, region }) => {
    return (
        <tr>
            <td className='border-[1px] text-center'><input type="checkbox" class="checkbox bg-[#DBDBDB] text-center" /></td>
            <td className='border-[1px] text-center'>{index + 1}</td>
            <td className='border-[1px] text-center'>{region}</td>
            <td className='border-[1px] text-center'>{area}</td>
        </tr>
    )
};

export default RowArea;