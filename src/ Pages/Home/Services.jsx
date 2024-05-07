import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";



const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(()=>{
      fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => setServices(data))
   },[])
   return (

         <div>
            <div className="text text-center space-y-5">
               <h1 className="font-bold text-orange-600">Service</h1>
               
               <h2 className="text-5xl font-bold ">Our Service Area</h2>
               <p>the majority have suffered alteration in some form, by injected humour, <br />
                or randomised words which donot look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 mt-9">
                     {
                        services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                        ></ServicesCard>)
                     }
            </div>
         </div>
   );
};

export default Services;