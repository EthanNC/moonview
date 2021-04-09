import Link from 'next/link'
import MarketDropdown from './MarketDropdown'

export const Sidebar = () => {
  return (
    <div className="flex fixed flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 ">
      <div className="relative mt-6">
      <MarketDropdown/>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="inline-flex flex-col space-y-4">
          <Link href="/">
          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
          >
            
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 64 64"><g id="Layer_17" data-name="Layer 17"><path d="M52,32.75H34.25a1.5,1.5,0,0,0-1.5,1.5V52a1.5,1.5,0,0,0,1.5,1.5H48.62a4.89,4.89,0,0,0,4.88-4.88V34.25A1.5,1.5,0,0,0,52,32.75ZM50.5,48.62a1.88,1.88,0,0,1-1.88,1.88H35.75V35.75H50.5Z"/><path d="M48.62,10.5H34.25a1.5,1.5,0,0,0-1.5,1.5V29.75a1.5,1.5,0,0,0,1.5,1.5H52a1.5,1.5,0,0,0,1.5-1.5V15.38A4.89,4.89,0,0,0,48.62,10.5ZM50.5,28.25H35.75V13.5H48.62a1.88,1.88,0,0,1,1.88,1.88Z"/><path d="M29.75,32.75H12a1.5,1.5,0,0,0-1.5,1.5V48.62a4.89,4.89,0,0,0,4.88,4.88H29.75a1.5,1.5,0,0,0,1.5-1.5V34.25A1.5,1.5,0,0,0,29.75,32.75ZM28.25,50.5H15.38a1.88,1.88,0,0,1-1.88-1.88V35.75H28.25Z"/><path d="M29.75,10.5H15.38a4.89,4.89,0,0,0-4.88,4.88V29.75a1.5,1.5,0,0,0,1.5,1.5H29.75a1.5,1.5,0,0,0,1.5-1.5V12A1.5,1.5,0,0,0,29.75,10.5Zm-1.5,17.75H13.5V15.38a1.88,1.88,0,0,1,1.88-1.88H28.25Z"/></g></svg>

            <span className="mx-4 font-medium">Dashboard</span>
          </a>
          </Link>

          <Link href="/trending">
          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>

            <span className="mx-4 font-medium">Trending</span>
          </a>
          </Link>
          <hr className="my-6 dark:border-gray-600" />

          <Link href="/settings">
          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">Settings</span>
          </a>
          </Link>
        </nav>

        <div className="flex items-center px-4 -mx-2">       
        <svg xmlns='http://www.w3.org/2000/svg' className='w-5' viewBox='0 0 512 512'><title>Moon</title><path d='M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z'/></svg>      
          <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
            MoonView
          </h4>
        </div>
      </div>
    </div>
  );
};
