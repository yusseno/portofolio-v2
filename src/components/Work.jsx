// import {GrWorkshop} from 'react-icons/gr';
import { TbPoint } from "react-icons/tb";


import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Work = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="font-mono lg:px-40 px-10 lg:py-12 py-2 lg:pb-36 bg-[#09192F] text-slate-400 w-full" id="work">
            <div className="flex" data-aos="fade-right">
                <div>
                    <h2 className="text-[32px] w-[75px] text-slate-100 font-bold pb-2">Work</h2>
                </div>
                <div className="bg-slate-400 w-full h-[2px] mt-6 ml-2">
                </div>
            </div>
            <div className="flex">
                <article>
                    <div className="flex" data-aos="fade-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A9A9A9" class="w-6 h-6mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <p className="text-slate-400 ml-2 mt-2 text-sm">PT. Mutual Sinegi Infinite</p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <span className="w-fit"><TbPoint className='ml-8 mt-2 lg:mt-0 lg:size-8'></TbPoint></span>
                        <p className="text-slate-400 ml-2 mt-2 text-justify pb-2 text-xs">PKL - Department Networking and Server Solution <i>(Maret - Juli 2015)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A9A9A9" class="w-6 h-6mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <p className="text-slate-400 ml-2 mt-2 text-sm">PT. Susi Air</p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <span className="w-fit"><TbPoint className='ml-8 mt-2 lg:mt-0 lg:size-8'></TbPoint></span>
                        <p className="text-slate-400 ml-2 mt-2 text-justify pb-2 text-xs">Departement IT <i>(Mei 2018 - January 2020)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A9A9A9" class="w-6 h-6mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <p className="text-slate-400 ml-2 mt-2 text-sm">PT. ICP Cipta Prima</p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <span className="w-fit"><TbPoint className='ml-8 mt-2 lg:mt-0 lg:size-8'></TbPoint></span>
                        <p className="text-slate-400 ml-2 mt-2 text-justify pb-2 text-xs">Freelance Software Tester <i>(Juli 2022 - January 2023)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A9A9A9" class="w-6 h-6mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <p className="text-slate-400 ml-2 mt-2 text-sm">PT. Bluebird Tbk.</p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <span className="w-fit"><TbPoint className='ml-8 mt-2 lg:mt-0 lg:size-8'></TbPoint></span>
                        <p className="text-slate-400 ml-2 mt-2 text-justify pb-2 text-xs"> Magang MSIB - Software Engineering Golang <i>(februari 2023 - Juni 2023)</i></p>
                    </div>
                </article>
            </div>  
        </div>
    )   
}
export default Work