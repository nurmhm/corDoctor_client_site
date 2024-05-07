import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Bannar = () => {


   return (
      <div className="carousel w-full h-auto rounded-xl">
         <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.5)] w-full h-full transform -translate-y-1/2  items-center top-1/2 gap-5">
               <div className='text text-white w-1/3 space-y-7 ml-12'>
                  <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                  <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
                  <div>
                     <button className="btn border-none bg-[#FF3811] mr-4">Discover More</button>
                     <button className="btn btn-outline text-[#FF3811]">Default</button>
                  </div>
               </div>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
               <a href="#slide4" className="btn btn-circle">❮</a>
               <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
            <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.5)] w-full h-full transform -translate-y-1/2  items-center top-1/2 gap-5">
               <div className='text text-white w-1/3 space-y-7 ml-12'>
                  <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                  <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
                  <div>
                     <button className="btn btn-active btn-secondary mr-4">Secondary</button>
                     <button className="btn btn-outline">Default</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
               <a href="#slide1" className="btn btn-circle">❮</a>
               <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
            <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.5)] w-full h-full transform -translate-y-1/2  items-center top-1/2 gap-5">
               <div className='text text-white w-1/3 space-y-7 ml-12'>
                  <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                  <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
                  <div>
                     <button className="btn btn-active btn-secondary mr-4">Secondary</button>
                     <button className="btn btn-outline">Default</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
               <a href="#slide2" className="btn btn-circle">❮</a>
               <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
            <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.5)] w-full h-full transform -translate-y-1/2  items-center top-1/2 gap-5">
               <div className='text text-white w-1/3 space-y-7 ml-12'>
                  <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                  <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
                  <div>
                     <button className="btn btn-active btn-secondary mr-4">Secondary</button>
                     <button className="btn btn-outline">Default</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
               <a href="#slide3" className="btn btn-circle">❮</a>
               <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
         </div>

         <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-full" />
            <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.5)] w-full h-full transform -translate-y-1/2  items-center top-1/2 gap-5">
               <div className='text text-white w-1/3 space-y-7 ml-12'>
                  <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                  <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
                  <div>
                     <button className="btn btn-active btn-secondary mr-4">Secondary</button>
                     <button className="btn btn-outline">Default</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
               <a href="#slide4" className="btn btn-circle">❮</a>
               <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide6" className="carousel-item relative w-full">
            <img src={img6} className="w-full" />
            <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.5)] w-full h-full transform -translate-y-1/2  items-center top-1/2 gap-5">
               <div className='text text-white w-1/3 space-y-7 ml-12'>
                  <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                  <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
                  <div>
                     <button className="btn btn-active btn-secondary mr-4">Secondary</button>
                     <button className="btn btn-outline">Default</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
               <a href="#slide5" className="btn btn-circle">❮</a>
               <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
         </div>
      </div>
   );
};

export default Bannar;