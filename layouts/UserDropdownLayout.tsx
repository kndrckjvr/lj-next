const UserDropdownLayout = () => {
  return (
    <>
      <div className="px-4 py-3 text-sm text-gray-900">
        <div>Ken Cosca</div>
        <div className="font-medium truncate">name@lingjack.com</div>
      </div>
      <ul
        className="py-2 text-sm text-gray-700"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Edit Profile
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Notification Settings
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Logout
          </a>
        </li>
      </ul>
    </>
  );
};

export default UserDropdownLayout;
