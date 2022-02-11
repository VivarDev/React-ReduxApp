import React from 'react'

const Header = () => {
    return (
        <div className="grid grid-cols-2 place-items-center p-4 bg-white dark:bg-slate-900 rounded-lg shadow-xl">

            <div className="text-lg md:text-4xl m-4 text-slate-900 dark:text-white  font-medium ">Product Manager Redux</div>
            <button className='w-28 md:w-32 md:h-14 lg:w-48 transition-colors duration-300 dark:bg-indigo-500 dark:text-indigo-100 text-gray-900 bg-blue-500 rounded-lg dark:hover:bg-indigo-700 hover:bg-blue-700'>Agregar Producto</button>
        </div>

    );
}

export default Header;