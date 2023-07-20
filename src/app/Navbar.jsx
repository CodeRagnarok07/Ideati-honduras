

export default function Navbar({ userdata, setUser }) {
 
    return (

        <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <a href="#" class="flex items-center">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        {userdata ?
                            <>
                                usuario {userdata.nombre}
                            </>

                            :
                            "login"
                        }
                    </span>
                </a>



                <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">

                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li onClick={() => setUser(null)}>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                logOut
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}