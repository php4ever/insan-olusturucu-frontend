import React from 'react'

function Row({ title, content }) {
    return (
        <tr className="border-b border-gray-700">
            <th className='px-6 py-3 border-r border-b border-gray-600 text-center bg-gray-700'>{title}</th>
            <td className="px-6 py-2.5 bg-gray-800 hover:bg-gray-600">{content}</td>
        </tr>
    )
}

export default Row