const MobileDropdownLayout = () => {
  return (
    <>
      <ul
        className="py-2 text-sm text-gray-700"
        aria-labelledby="multiLevelDropdownButton"
      >
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Dashboard
          </a>
        </li>
        <li>
          <button
            id="doubleDropdownButton"
            data-dropdown-toggle="doubleDropdown"
            data-dropdown-placement="right-start"
            type="button"
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
          >
            Dropdown
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="doubleDropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="doubleDropdownButton"
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  My downloads
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Billing
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Rewards
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Earnings
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Sign out
          </a>
        </li>
      </ul>
    </>
  );
};

export default MobileDropdownLayout;
