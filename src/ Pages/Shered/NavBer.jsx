import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import icon from "../../assets/Group 4.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const NavBer = () => {
   const {user} = useContext(AuthContext)
   const navLink = < >
             <li><Link>Home</Link></li>
             <li><Link>About</Link></li>
             <li><Link>Services</Link></li>
             <li><Link>Blog</Link></li>
             <li><Link>Contact</Link></li>
             <li><Link>{user?.email}</Link></li>

   </>
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLink}
                 
               </ul>
            </div>
            <Link>
            <a className="btn btn-ghost h-4 w-[80px]"><img src= {logo}alt="" /></a>
            </Link>
            
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                  {navLink}
            </ul>
         </div>
         <div className="navbar-end flex gap-4">
            <div> 
               <img src={icon} alt=""  className="text text-white"/>
            </div>
         <button className="btn btn-outline text-[#FF3811]">Appointment</button>
         </div>
      </div>
   );
};

export default NavBer;