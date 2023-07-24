import AddNew from "./AddNew"
import Table from "./Table"

const api = process.env.NEXT_PUBLIC_API_GET
const getData = () => {
    return fetch(api).then(res => res.json())
}


export default async function Home() {

    const data = await getData()
    

    return (
        <div className="flex justify-center  h-full">
            <div class="mt-10 p-6 transparent border border-gray-200 rounded-lg shadow bg-gray-800 h-min">
                <AddNew />
                <Table data={data} />
            </div>
        </div>
    )
}