import logo from "../assets/img/logo_navbar.svg";
// import React from "react";
function Navbar() {
  let links = [
    { name: "الرئيسية", link: "/" },
    { name: "المعسكرات والبرامج", link: "/Courses" },
    { name: "حول الأكاديمية", link: "/About" },
    { name: "أخبار الأكاديمية", link: "/Blog" },
    { name: "اشترك في النشرة", link: "/Subscribe" },
  ];
  return (
    <div className="bg-gray-200 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4 md:px-20 px-7 ">
        <div className=" cursor-pointer px-5 flex items-center">
          <div className=" md:flex justify-between md:justify-normal items-center w-full">
            <div className="logo w-1/2 md:w-auto">
              <img src={logo} className="mx-auto h-14" alt="" />
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <ul
          className="absolute hidden bg-white md:z-auto z-[-1] left-0 w-full md:w-auto px-5 md:pr-0
        pr-16 transition-all duration-500 ease-in  md:static md:flex md:items-center md:ml-auto ml-5">
          {links.map((link) => (
            <li key={link.name} className="ml-5 md:my-0 my-5 text-lg ">
              <a
                className="cursor-pointer text-gray-800 hover:text-gray-400 duration-500  "
                href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
