import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

import Kanban from '../assets/images/project/kanban_app.png'
import Bluebird from '../assets/images/project/bluebird.png'
import UKMIK from '../assets/images/project/ukm-ik.png'




const Projects = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="font-mono lg:px-40 px-10 lg:py-12 py-2 lg:pb-0 bg-[#09192F] text-slate-400 w-full" id="project">
            <div className="flex" data-aos="fade-right">
                <div>
                    <h2 className="text-[32px] w-[125px] text-slate-100 font-bold pb-2">Project</h2>
                </div>
                <div className="bg-slate-400 w-full h-[2px] mt-6 ml-2">
                </div>
            </div> 
            <div className="lg:grid lg:grid-cols-3 pt-8 justify-center mb-6">
                <div className="relative group justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img src={Kanban} className="px-4 lg:h-48 lg:w-100 rounded-md" data-aos="fade-right"></img>
                    </div>
                    <div className="text-left p-4" data-aos="fade-left">
                        <span className="flex text-[#64FFDA] text-[16px]">future Project</span>
                        <span className="flex font-semibold text-[22px]  pb-4">Website Kanban APP</span>
                        <span className="flex text-[16px] text-justify italic text-xs">Project ini dibangun ketika mengerjakan final project MKBM Studi Independen di Ruang Guru, dengan program Sofware Enginnering dengan pilihan kelas Backend</span>
                        <span className="flex text-[16px] text-justify italic text-xs">Teknologi : Golang dan TailwindCSS</span>
                    </div>
                </div>
                <div className="relative group justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img src={Bluebird} className="h-32 w-96 lg:h-48 lg:w-56" data-aos="fade-right"></img>
                    </div>
                    <div className="text-left p-4" data-aos="fade-left">
                        <span className="flex text-[#64FFDA] text-[16px]">future Project</span>
                        <span className="flex font-semibold text-[22px] pb-4">Apliksi Squad Management System</span>
                        <span className="flex text-[16px] text-justify italic text-xs">Project ini dibangun ketika Magang di PT. Bluebird Tbk. dimana aplikasi ini di bangun untu keperluan management karyawan dan absensi karyawn menggunakan QR code.</span>
                        <span className="flex text-[16px] text-justify italic text-xs">Teknologi : React JS, Golang, Kotlin dan TailwindCSS</span>
                    </div>
                </div>
                <div className="relative group justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img src={UKMIK} className="px-4 lg:h-48 lg:w-100 rounded-md" data-aos="fade-right"></img>
                    </div>
                    <div className="text-left p-4" data-aos="fade-left">
                        <span className="flex text-[#64FFDA] text-[16px]">future Project</span>
                        <span className="flex font-semibold text-[22px] pb-4">Webiste Unit Kegiatan Mahasiswa Informatika dan Komputer</span>
                        <span className="flex text-[16px] text-justify italic text-xs">Project ini dibangun untuk kebutuhan organisasi saya dimna terdapat landing page dan terdapat sistem administrasi organisasi (proker, anggota, surat dll)</span>
                        <span className="flex text-[16px] text-justify italic text-xs">Teknologi : React JS, Golang NestJs dan TailwindCSS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects