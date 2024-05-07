import { useLoaderData } from "react-router-dom";


const CheckOut = () => {

   const service = useLoaderData();
   const { title, price } = service;

   return (
      <div>
         <h1>{title} </h1>
         <div className=" max-w-md mx-auto p-12 bg-white rounded border border-red-500">
            <form>
               <div className="flex justify-between">
                  <div className="mb-4">
                     <label className="block mb-2" htmlFor="service-name">Service Name</label>
                     <input className="w-1/2 p-2 pl-10 text-sm text text-white border border-gray-300 rounded" id="service-name" type="text" />
                  </div>

                  <div className="mb-4 w-1/2">
                     <label className="block mb-2" htmlFor="service-price">Service Price</label>
                     <input className="w-1/2 p-2 pl-10 text-sm text text-white border border-gray-300 rounded" id="service-price" type="number" />
                  </div>
               </div>

               <div className="mb-4">
                  <label className="block mb-2" htmlFor="text-here">Text here</label>
                  <textarea className="w-full p-2 pl-10 text-sm text text-white border border-gray-300 rounded" id="text-here" rows="4"></textarea>
               </div>

               <div className="mb-4">
                  <label className="block mb-2" htmlFor="product-description">Product Description</label>
                  <textarea className="w-full p-2 pl-10 text-sm text text-white border border-gray-300 rounded" id="product-description" rows="4"></textarea>
               </div>

               <button className="bg-orange-500 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
         </div>
      </div>
   );
};

export default CheckOut;