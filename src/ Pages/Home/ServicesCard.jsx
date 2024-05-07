import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
   const { _id,title,img,price} = service;
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img}alt="Shoes" className="h-[200px]"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="font font-bold text-orange-700">${price}</p>
    <div className="card-actions justify-end">
      <div >
         <Link to= {`/checkout/${_id}`}>
         
         <FaArrowRight></FaArrowRight>
         </Link>
        
      </div>
    </div>
  </div>
</div>
      </div>
   );
};

export default ServicesCard;