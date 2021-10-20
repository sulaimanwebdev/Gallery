import React, {useState, useCallback, useRef} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'



const Home = () => {


const [openBurger, setopenBurger] = useState("")
  let burgerMenu = () =>{
    setopenBurger('show-panel')
  }

  let close = () => {
    setopenBurger("")
  }
    return (
        <>


        <div className={`${openBurger} panel transition	 transform -translate-x-full font-bold text-lg p-10  w-wPanelDeskTop bg-white  h-screen fixed top-0 left-0 z-10 flex flex-col gap-8 sm3:w-wPanelMobile `}>
      <a href="#" className="mt-10">Home</a>
      <a href="#">Portfolio</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <CloseIcon className="absolute top-11 cursor-pointer right-10" style={{fontSize: '36px'}} onClick={close}/>
        </div>

<div className="bottomHeader hidden  items-center gap-7 justify-between px-7 bg-white fixed bottom-0 left-0 w-full py-5 md2:flex">
<div className="burger cursor-pointer"><MenuIcon style={{fontSize: '36px'}} onClick={burgerMenu} /></div>
<div className="font-bold text-lg sm2:text-base cursor-pointer">+ Book Now</div>
</div>


<div className="max-w-newCutom mx-auto px-7 md2:pb-7">


<div className="flex items-center justify-between md2:gap-5 py-5">

  <div className="items-center gap-4 hidden md2:flex md2:gap-2"><KeyboardBackspaceIcon /> <span className="font-bold text-lg sm2:text-base">Portfolio</span> </div>

  <div className="flex items-center gap-7 visible md2:hidden">
    <div className="burger cursor-pointer"><MenuIcon style={{fontSize: '36px'}}/></div>
    <nav className="flex gap-5 font-bold text-lg">
      <a href="#">Home</a>
      <a href="#">Portfolio</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
     </div>
     <div className="logo"><img src="/images/logo_big.svg" alt=""  className="cursor-pointer w-24"/></div>

</div>
















<div className="ssCont">


<Swiper slidesPerView={'auto'} spaceBetween={30} pagination={{
  "clickable": true
}} className="mySwiper">
  
 <SwiperSlide><video autoPlay muted loop src="https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-tree-wet-18310-large.mp4" /></SwiperSlide>
 <SwiperSlide><img src="https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" /></SwiperSlide>
 <SwiperSlide><img src="https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" /></SwiperSlide>
<SwiperSlide><img src="https://images.pexels.com/photos/2311713/pexels-photo-2311713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/></SwiperSlide>
<SwiperSlide><img src="https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" /></SwiperSlide>


  </Swiper>


  
  </div>


























<footer class="bg-white">
  <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
      <div class="px-5 py-2">
        <a href="#" class="text-base font-bold  hover:text-gray-900">
          About
        </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base font-bold  hover:text-gray-900">
          Blog
        </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base font-bold  hover:text-gray-900">
          Jobs
        </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base font-bold  hover:text-gray-900">
          Press
        </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base font-bold  hover:text-gray-900">
          Accessibility
        </a>
      </div>

      <div class="px-5 py-2">
        <a href="#" class="text-base font-bold  hover:text-gray-900">
          Partners
        </a>
      </div>
    </nav>
    <div class="mt-8 flex justify-center space-x-6">
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Facebook</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
        </svg>
      </a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Instagram</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
        </svg>
      </a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Twitter</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">GitHub</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
      </a>

      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Dribbble</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
    <p class="mt-8 text-center text-base opacity-70 font-light">
      &copy; 2020 Workflow, Inc. All rights reserved.
    </p>
  </div>
</footer>

</div>
            
        </>
    )
}

export default Home;
