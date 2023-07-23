'use client'

import { useState } from "react"

export default function AddNew() {

    const [visible, setVisible] = useState()
    const [data, setData] = useState({
        "name": "",
        "price": 0,
        "stockUnits": 0,
        "brand": {
            "name": ""
        },
        "_rid": "DXJ4AKfQ-okBAAAAAAAAAA==",
        "_self": "dbs/DXJ4AA==/colls/DXJ4AKfQ-ok=/docs/DXJ4AKfQ-okBAAAAAAAAAA==/",
        "_etag": "\"08007417-0000-0700-0000-64b9ffd30000\"",
        "_attachments": "attachments/",
        "_ts": 1689911251
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        });


        console.log(response);
        // setVisible(!visible)

    }


    return (
        <>

            <div 
             onClick={() => setVisible(!visible)}
            className="w-full p-3 bg-gray-500 text-center hover:bg-gray-600 text-white cursor-pointer ">
                add new
            </div>

            {visible &&
                // onClick={() => setVisible(!visible)}
                <div
                className="absolute z-0 bg-gray-900 inset-0 bg-opacity-90 flex items-center justify-center">


                    <div class="relative z-100 mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow w-full mx-[30%] h-lg">

                        <div className="flex justify-between text-3xl font-bold uppercase w-full p-3  text-center  cursor-pointer ">
                            add new

                            <div
                                onClick={() => setVisible(!visible)}
                                className="px-2  rounded-md bg-gray-500 hover:bg-gray-600 text-white">
                                x
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} action="">

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Brand Name
                                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="Brand"
                                    value={data.brand.name}
                                    onChange={(e) => setData({ ...data, brand: { name: e.target.value } })}
                                    placeholder="new product" />
                            </label>

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Product Name
                                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                    placeholder="new product" />
                            </label>

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Price
                                <input type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="price"
                                    value={data.price}
                                    onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                    placeholder="new product" />
                            </label>

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Stock
                                <input type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="stockUnits"
                                    value={data.stockUnits}
                                    onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                    placeholder="new product" />
                            </label>

                            <input type="submit" value={"Send"} className="rounded-lg mx-auto cursor-pointer flex h-full px-4 bg-blue-500 text-white" />


                        </form>

                    </div>
                </div>
            }

        </>
    )
}