import {AiFillGithub} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Social_media = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="font-mono lg:px-40 lg:py-12 px-10 lg:pb-0 bg-[#09192F] w-full text-slate-400">
            <div className="flex justify-center min-[1023px]:hidden">
                <a href='https://github.com/yusseno' className='m-4'>
                    <AiFillGithub className='hover:text-[#64FFDA] text-2xl' />
                </a>
                <a href='https://www.instagram.com/yusseno19/' className='m-4'>
                    <AiFillInstagram className='hover:text-[#64FFDA] text-2xl' />
                </a>
                <a href='https://twitter.com/yusseno19' className='m-4'>
                    <AiFillTwitterCircle className='hover:text-[#64FFDA] text-2xl' />
                </a>
                <a href='https://www.linkedin.com/in/yusseno-seno-622247198/' className='m-4'>
                    <AiFillLinkedin className='hover:text-[#64FFDA] text-2xl' />
                </a>
            </div>
            <div className='flex justify-center pb-4 min-[1023px]:hidden'>
                <AiOutlineCopyrightCircle className='w-6 h-6'></AiOutlineCopyrightCircle>
                <p className='text-sm pt-1 pl-2'>2024 : Design & Build Yusseno</p>
            </div>
            <div className="relative justify-center max-[1023px]:hidden">
                <div className='fixed top-1/3 left-0 text-[14px] ml-[75px]'>
                    <a href='https://github.com/yusseno' className='m-4'>
                        <AiFillGithub className='hover:text-[#64FFDA] text-2xl' />
                    </a>
                    <a href='https://www.instagram.com/yusseno19/' className='m-4'>
                        <AiFillInstagram className='hover:text-[#64FFDA] text-2xl' />
                    </a>
                    <a href='https://twitter.com/yusseno19' className='m-4'>
                        <AiFillTwitterCircle className='hover:text-[#64FFDA] text-2xl' />
                    </a>
                    <a href='https://www.linkedin.com/in/yusseno-seno-622247198/' className='m-4'>
                        <AiFillLinkedin className='hover:text-[#64FFDA] text-2xl' />
                    </a>
                </div>
                <div className='fixed top-3/4 left-0 h-1/3 w-[1px] bg-slate-400 ml-[85px]'></div>
               
            </div>
            <div className='flex justify-center pb-4 max-[1023px]:hidden'>
                <AiOutlineCopyrightCircle className='w-6 h-6'></AiOutlineCopyrightCircle>
                <p className='text-sm pt-1'>&nbsp; 2024 : Design & Build Yusseno</p>
            </div>
            
        </div>

    )
}
export default Social_media