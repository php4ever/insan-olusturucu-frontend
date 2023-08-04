import { useEffect, useState } from 'react';
import Row from './Row';
function Main() {

    const [data, setData] = useState({});

    useEffect(() => {
        getObject();
    }, []);

    const getObject = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(setData);
    }


    return (
        <main className='min-h-[calc(100vh-150px)] pb-[50px] w-full flex flex-col justify-center gap-[50px] bg-slate-900 text-slate-400'>
            <div className="relative rounded-lg overflow-x-auto md:w-3/6 w-4/6 mx-auto">
                <table className="table-fixed w-full text-sm text-center text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr className="px-6 py-3">
                            <th className="px-6 py-3 md:w-2/6 w-3/6 bg-gray-700 border-r border-b border-gray-600"></th>
                            <th className="px-6 py-3 md:w-4/6 w-4/6">İnsan</th>
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
                className='w-[100px] mx-auto text-gray-400 text-sm border border-gray-600 py-2 outline-none rounded-lg hover:bg-gray-600 hover:text-white focus:ring ring-gray-700'>Oluştur</button>
        </main>
    )
}

export default Main