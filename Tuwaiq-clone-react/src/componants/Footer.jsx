// import React from 'react'
import footerLogo from "../assets/img/logo_navbar.svg";
function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:flex xl:items-center xl:flex-col-reverse">
          <div className="logo-footer grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="">
              <img className="h-8 w-auto" src={footerLogo} />
            </div>
            <div className="">
              <p className="text-sm text-gray-500">
                جميع الحقوق محفوظة لأكاديمية طويق 2023{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
