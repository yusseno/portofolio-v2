import { TbPoint } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

import { LiaSchoolSolid } from "react-icons/lia";


const Experience = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="font-mono lg:px-40 px-10 lg:py-12 py-2 lg:pb-36 bg-[#09192F] text-slate-400 w-full" id="experience">
            <div className="flex" data-aos="fade-right">
                <div>
                    <h2 className="text-[24px] lg:text-[32px] text-slate-100 font-bold pb-2">Experience</h2>
                </div>
                <div className="bg-slate-400 w-full h-[2px] mt-4 lg:mt-6 ml-2">
                </div>
            </div>
                           
            <div className="flex">
                <article>
                    <div className="flex" data-aos="fade-left">
                        <LiaSchoolSolid className='text-[26px] ml-1 mt-[6px]'></LiaSchoolSolid>
                        <p className="ml-2 mt-2 text-sm">Non Formal Education</p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <span className="w-fit"><TbPoint className='ml-8 mt-2 lg:mt-0 lg:size-8'></TbPoint></span>
                        <p className="text-slate-400 ml-2 mt-2 text-justify pb-2 text-xs">Kampus Merdeka white Ruang Guru Software Engineering Backend Golang <i>(Agustus - Desember 2022)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-right">
                        <VscOrganization className='text-[26px] ml-1 mt-[6px]'></VscOrganization>
                        <p className="ml-2 mt-2 text-sm">Organization</p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <span className="w-fit"><TbPoint className='ml-8 mt-2 lg:mt-0 lg:size-8'></TbPoint></span>
                        <p className="text-slate-400 ml-2 mt-2 text-justify pb-2 text-xs">Unit Kegiatan Mahasiswa Informatika dan Komputer <i>(2020 - 2024)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <span className="w-fit"><TbPoint className='ml-8 mt-2 lg:mt-0 lg:size-8'></TbPoint></span>
                        <p className="text-slate-400 ml-2 mt-2 text-justify pb-2 text-xs">Himpunan Mahasiswa Jurusan Informatika <i>(2020 - 2023)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-left">
                        <span className="w-fit"><TbPoint className='ml-8 mt-2 lg:mt-0 lg:size-8'></TbPoint></span>
                        <p className="text-slate-400 ml-2 mt-2 text-justify pb-2 text-xs">Badan Eksekutif Mahasiswa Kementrian SDM dan Luar negeri <i>(2020 - 2021)</i></p>
                    </div>
                </article>
            </div>
        </div>
    )
}
export default Experience