import { Link } from "react-router-dom";
import { FaFacebook, FaEnvelope, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-gray-500 p-5">
      <div className="grid grid-cols-2 md:flex justify-evenly mb-2">
        <div>
          <Link to="/" className="text-2xl font-semibold text-white">
            Toys<span className="activeList">&</span>Hobbies
          </Link>
        </div>
        <div>
          <p className="text-white font-semibold">Terms and Conditions</p>
          <p>Accept Cookies</p>
          <p>Sign up</p>
        </div>
        <div>
          <p className="text-white font-semibold">Some Link</p>
          <p>
            <Link to="/" className="hover:text-white hover:underline">
              Home
            </Link>
          </p>
          <p>
            <Link to="/allToys" className="hover:text-white hover:underline">
              All Toys
            </Link>
          </p>
          <p>
            <Link to="/blogs" className="hover:text-white hover:underline">
              Blogs
            </Link>
          </p>
        </div>
        <div>
          <p className="text-white font-semibold">Contact Us</p>
          <p>+88012324345</p>
          <p>+88046667435</p>
        </div>
      </div>
      <hr />
      <div className="text-white flex justify-center gap-5 text-2xl my-8">
        <Link to='https://www.facebook.com' className="hover:text-rose-600"><FaFacebook></FaFacebook></Link>
        <Link to='https://www.google.com' className="hover:text-rose-600"><FaGoogle></FaGoogle></Link>
        <Link to='https://www.yahoo.com' className="hover:text-rose-600"><FaEnvelope></FaEnvelope></Link>
        <Link to='https://www.twitter.com' className="hover:text-rose-600"><FaTwitter></FaTwitter></Link>
        
      </div>
      <p className="text-white text-center">&copy; 2023 Copyright: Toys & Hobbies</p>
    </div>
  );
};

export default Footer;
