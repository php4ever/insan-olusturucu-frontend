import { useEffect, useState } from 'react';
import Row from './Row';
function Main() {

    const [data, setData] = useState({});

    useEffect(() => {
        getObject();
    }, [data]);

    const getObject = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(setData);
    }


    return (
        <main className='h-[calc(100%-150px)] w-4/5 mx-auto flex flex-col justify-center gap-[50px] bg-slate-900 text-slate-400'>
            <div className="relative overflow-x-auto rounded-lg">
                <table className="table-fixed w-full text-sm text-center text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr className="px-6 py-3">
                            <th className="px-6 py-3 w-[130px]  bg-gray-700 border-r border-b border-gray-600"></th>
                            <th className="px-6 py-3">İnsan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(data).map((key, i) => (
                                <Row key={i} title={key} content={data[key]} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <button
                onClick={getObject}
                className='w-1/6 mx-auto text-gray-400 text-sm border border-gray-600 py-2 outline-none rounded-lg hover:bg-gray-600 hover:text-white'>Generate</button>
        </main>
    )
}

export default Main