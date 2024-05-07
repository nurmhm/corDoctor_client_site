import { Outlet } from "react-router-dom";
import Footer from "../ Pages/Shered/Footer";
import NavBer from "../ Pages/Shered/NavBer";


const Main = () => {
   return (
      <div>
         <NavBer></NavBer>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;