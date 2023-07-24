import AddNew from "./AddNew"
import Table from "./Table"

const api = process.env.NEXT_PUBLIC_API_GET
const getData = () => {
    return fetch(api,{ cache: 'no-store' }).then(res => res.json())
}


// const getData = async() => {
//     const res = await import("./api/get/route")
//     return await (await res.GET()).json();
// }

export default async function Home() {

    // const data = await res.json()
    const data =  await getData()
    return (
        <div className="flex justify-center  h-full">
            <div class="mt-10 p-6 transparent border border-gray-200 rounded-lg shadow bg-gray-800 h-min">
                <AddNew />
                <Table data={data.reverse()} />
            </div>
        </div>
    )
}