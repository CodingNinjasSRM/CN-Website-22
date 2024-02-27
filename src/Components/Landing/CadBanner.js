import React from 'react'
import appbanner from "./assets/appbanner.png";
import webbanner from "./assets/webbanner.png";

const CadBanner = () => {
  return (
    <div className=''>
          <div className="hidden md:block md:flex md:flex-col absolute">
            <img src={webbanner} alt="cad" className="w-screen  -z-100 justify-center mx-auto"  />
            <a href="https://cad-website-2.vercel.app/" target="new">
              <button className="py-3 w-1/5 px-6 xl:text-xl text-white bg-pink-800 rounded absolute md:bottom-[4vh] xl:bottom-[10vh] left-[25vw] ">KNOW MORE</button>
            </a>
          </div>

          <div className="block md:hidden"> 
           < img src={appbanner} alt="cad" className="w-screen  -z-100 justify-center mx-auto flex md:hidden"  />
           <a href="https://cad-website-2.vercel.app/" target="new">
             <button className="py-2  px-5 text-[10px] text-white bg-pink-800 rounded text-center my-5">KNOW MORE</button>
            </a>
          </div>
    </div>
  )
}

export default CadBanner