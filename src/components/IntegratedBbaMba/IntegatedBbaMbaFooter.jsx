import React, { useEffect } from "react";
import logo from "../../assets/images/Icem-footer-logo.png";

function Footer() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-baskerville-regular">
      <div className="bg-gray-100 px-4 md:px-10 py-6 rounded-tl-3xl rounded-tr-3xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
          {/* Left Column */}
          <div className="flex flex-col sm:w-1/2 text-sm">
            <div className="mb-4">
              <img src={logo} alt="ICEM Logo" className="w-32 sm:w-40" />
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-lg text-[#023b5e]" />
                <div>
                  <p>Indira Chanakya Campus (ICC)</p>
                  <p>S.No. 64,65, Gat No. 276 At Post : Parandwadi,</p>
                  <p>Near Somatne phata, Tal. : Maval, Dist. Pune – 410 506</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone-alt text-lg text-green-600" />
                <p>91+ 7720010705 / 06</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-lg text-gray-500" />
                <p>info@indiraicem.ac.in</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-globe text-lg text-blue-600" />
                <a
                  href="https://www.indiraicem.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  www.indiraicem.ac.in
                </a>
              </div>
            </div>

            <div className="flex gap-4 text-lg mt-4">
              <a href="https://facebook.com" className="hover:text-blue-600">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-600">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-700">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://youtube.com" className="hover:text-red-600">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="sm:w-1/2">
            <h3 className="text-lg sm:text-xl text-[#023b5e] font-bold mb-4">
              Important Links
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
              {[
                "Staff Grievance Form",
                "Women Welfare Policy",
                "Anti Ragging Policy",
                "Faculty Application Form",
                "SPPU",
                "AICTE",
                "DTE",
                "MahaDBT",
                "MANDATORY DISCLOSURE",
                "AICTE APPROVAL",
              ].map((link, i) => (
                <a key={i} href="#" className="hover:text-gray-400">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#023b5e] text-white text-xs sm:text-sm text-center py-3 px-4">
        © 2024. Indira College of Engineering and Management.
      </div>
    </div>
  );
}

export default Footer;
