import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer class="relative py-10 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-10">
    <div class="relative z-[1] container m-auto px-6 md:px-12">
        <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div class="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div class="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                    <ul class="list-disc list-inside space-y-8">
                        <li><a href="#" class="hover:text-sky-400 transition">Home</a></li>

                        <li><a href="#" class="hover:text-sky-400 transition">About</a></li>
                        <li><a href="#" class="hover:text-sky-400 transition">Guide</a></li>
                        <li><a href="#" class="hover:text-sky-400 transition">Blocks</a></li>
                        <li><a href="#" class="hover:text-sky-400 transition">Contact</a></li>
                        <li><a href="#" class="hover:text-sky-400 transition">Terms of Use</a></li>
                    </ul>

                  
                </div>
                <div class="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                    <span class="block text-gray-300">We change the way UI components librairies are used</span>

                    <span class="block text-gray-300">Tailus Blocks &copy; 2021</span>

                    <span class="flex justify-between text-white"> 
                        <a href="#" class="font-semibold">Terms of Use </a>
                        <a href="#" class="font-semibold"> Privacy Policy</a> 
                    </span>

                    <span class="block text-gray-300">Need help? <a href="#" class="font-semibold text-white"> Contact Us</a></span>
                </div>
            </div>
        </div>
    </div>
    <div aria-hidden="true" class="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" class="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
    </div>
    <div aria-hidden="true" class="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
</footer>

  )
}

export default Footer