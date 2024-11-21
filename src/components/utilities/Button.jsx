/* eslint-disable react/prop-types */
export const Button = ({ children }) => {
  return (
    <div>
      {" "}
      <button className="bg-black hover:bg-gray-800 text-white duration-700 rounded-md px-4 py-2 font-medium text-sm">
        {children}
      </button>
    </div>
  );
};
