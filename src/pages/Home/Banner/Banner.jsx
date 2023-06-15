

const Banner = () => {
    return (
 <div>
  <div className="carousel w-full h-[550px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/young-people-studying-using-laptop_23-2147844843.jpg?w=740&t=st=1686809966~exp=1686810566~hmac=a7120445ecb7e89529699ba8e5fa4f3660fe525922064c5252cf8a439762144a" className="w-full rounded-xl" />
     <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
     <div className='text-white space-y-7  pl-12 w-1/2'>
                    
                    <h3 className="text-center lg:text-4xl  ">To have another language is to possess a second soul.</h3>
                    <button className="btn btn-xs btn-outline btn-info ms-40">See Our Class</button>
                </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/intercultural-pupils_1098-13626.jpg?size=626&ext=jpg&ga=GA1.1.228412914.1672594624&semt=ais" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
     <div className='text-white space-y-7  pl-12 w-1/2'>
                    <h3 className="text-center lg:text-4xl  ">Putting Children First. Preparing Children For Success In Life</h3>
                    <button className="btn btn-xs btn-outline btn-info ms-40">See Our Class</button>
                </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/start-up-designers_1098-14229.jpg?size=626&ext=jpg&ga=GA1.2.228412914.1672594624&semt=ais" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
     <div className='text-white space-y-7  pl-12 w-1/2'>

                    <h3 className="text-center lg:text-4xl ">Teaching Turning Today’s Learners Into Tomorrow’s Leaders</h3>
                    <button className="btn btn-xs btn-outline btn-info ms-40">See Our Class</button>
                </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  
</div>

        </div>
    );
};

export default Banner;