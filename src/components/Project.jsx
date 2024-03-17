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
        <div className="font-mono lg:px-40 px-10 lg:py-12 py-2 lg:pb-0 text-slate-400 w-full" id="project">
            <div className="flex" data-aos="fade-right">
                <div>
                    <h2 className="text-[24px] lg:text-[32px] text-slate-100 font-bold pb-2">Project</h2>
                </div>
                <div className="bg-slate-400 w-full h-[2px] mt-4 lg:mt-6 ml-2">
                </div>
            </div> 
            <div className="lg:grid lg:grid-cols-3 pt-2 justify-center mb-6">
                <div class="lg:p-4 m-8 rounded-xl">
                    <picture class="rounded-lg block overflow-hidden">
                        <img
                        class="hover:scale-110 ease-in lg:hover:scale-125 duration-150 h-36 lg:h-44"
                        src={Kanban}
                        />
                    </picture>

                    <h1 class="mt-4 mb-2 text-md font-bold text-[#64FFDA]">Website Kanban APP</h1>
                    <p class="text-xs text-justify">
                        Project ini dibangun ketika mengerjakan final project MKBM Studi Independen di Ruang Guru, dengan program Sofware Enginnering dengan pilihan kelas Backend
                    </p>
                    <p class="text-xs italic pt-2">
                        Teknologi : Golang dan TailwindCSS
                    </p>
                </div>
                <div class="lg:p-4 m-8  rounded-xl">
                    <picture class="rounded-lg block overflow-hidden">
                        <img
                        class="scale:90 hover:scale-110 ease-in duration-150 h-44"
                        src={Bluebird}
                        />
                    </picture>

                    <h1 class="mt-4 mb-2 text-md font-bold text-[#64FFDA]">Apliksi Squad Management System</h1>
                    <p class="text-xs text-justify">
                        Project ini dibangun ketika Magang di PT. Bluebird Tbk. dimana aplikasi ini di bangun untu keperluan management karyawan dan absensi karyawn menggunakan QR code.                </p>
                    <p class="text-xs italic pt-2">
                        Teknologi : React JS, Golang, Kotlin dan TailwindCSS
                    </p>
                </div>
                <div class="lg:p-4 m-8 rounded-xl">
                    <picture class="rounded-lg block overflow-hidden">
                        <img
                        class="hover:scale-110 ease-in lg:hover:scale-125 duration-150 h-36 lg:h-44"
                        src={UKMIK}
                        />
                    </picture>

                    <h1 class="mt-4 mb-2 text-md font-bold text-[#64FFDA]">Webiste Unit Kegiatan Mahasiswa Informatika dan Komputer</h1>
                    <p class="text-xs text-justify">
                        Project ini dibangun untuk kebutuhan organisasi saya dimna terdapat landing page dan terdapat sistem administrasi organisasi (proker, anggota, surat dll)                </p>
                    <p class="text-xs italic pt-2">
                        Teknologi : React JS, Golang NestJs dan TailwindCSS
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Projects