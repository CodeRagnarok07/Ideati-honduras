"use client"
export default function Table({ data }) {

    return (
        <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xs  uppercase bg-gray-700 text-gray-400">
                <tr>
                    <th >
                        N°
                    </th>
                    <th scope="col" class="px-6 py-3">
                        brand
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        stockUnits
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>

                </tr>
            </thead>

            <tbody className="
                        [&>*:nth-child(odd)]:bg-gray-900
                        [&>*:nth-child(even)]:bg-gray-800 

                        [&>*]:border-b
                        [&>*]:border-gray-700
                        ">


                {data.map((v, k) => (
                    <tr key={k} class="[&>*]:px-6 py-4 text-white">
                        <td >
                           { k+1}
                        </td>
                        <th scope="row" class=" font-medium whitespace-nowrap ">
                            {v.brand.name}
                        </th>
                        <td >
                            {v.name}

                        </td>
                        <td >
                            {v.price}
                        </td>
                        <td >
                            {v.stockUnits}
                        </td>
                        <td >
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}