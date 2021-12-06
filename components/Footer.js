import React from "react";

function Footer() {
  return (
    <footer data-aos="fade-up" data-aos-delay="20" className="footer bg-white relative  border-b-2 border-blue-700">
      <div className="container mx-auto px-6"></div>
      <div className="container mx-auto px-6">
        <div className="mt-2 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              © 2021 By Meepong
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
