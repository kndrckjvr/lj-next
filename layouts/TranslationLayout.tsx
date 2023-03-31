const TranslationLayout = () => {
  return (
    <ul
      className="py-2 text-sm text-gray-700"
      aria-labelledby="dropdownDefaultButton"
    >
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          English
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          ภาษาไทย
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          한국어
        </a>
      </li>
    </ul>
  );
};

export default TranslationLayout;
