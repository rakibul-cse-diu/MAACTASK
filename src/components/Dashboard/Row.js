import React from 'react';

const Row = ({ region, index }) => {
    return (
        <tr>
            <td className='border-[1px] text-center'><input type="checkbox" class="checkbox bg-[#DBDBDB] text-center" /></td>
            <td className='border-[1px] text-center'>{index + 1}</td>
            <td className='border-[1px] text-center'>{region}</td>
        </tr>
    );
};

export default Row;