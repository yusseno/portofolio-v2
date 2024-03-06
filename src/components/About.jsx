import React, { useEffect } from "react";
import Golang from '../assets/images/abaut/golang-removebg.png'
import Reacts from '../assets/images/abaut/react-removebg.png'
import Tailwind from '../assets/images/abaut/tailwind-removebg.png'
import Yusseno from '../assets/images/abaut/yusseno-full-transformed.png'
import NextJs from '../assets/images/abaut/next-js.png'
import NestJs from '../assets/images/abaut/nestjs-icon.png'
import Laravel from '../assets/images/abaut/laravel-icon.png'
import Ubuntu from '../assets/images/abaut/Ubuntu_and_Ubuntu_Server_Icon.png'
import Docker from '../assets/images/abaut/docker-icon.png'
import Gitlab from '../assets/images/abaut/gitlab-icon.png'
import MySql from '../assets/images/abaut/mysql-icon.png'
import PostresSql from '../assets/images/abaut/postgresSql-icon.png'
import MongoDb from '../assets/images/abaut/mongodb-icon.png'
import Redist from '../assets/images/abaut/redis-icon.png'


import AOS from 'aos'
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="font-mono lg:px-40 px-10 lg:py-12 py-2 lg:pb-36 bg-[#09192F] w-full" id="about">
            <div className="flex" data-aos="fade-right">
                <div>
                    <h2 className="text-[32px] w-[150px] text-slate-100 font-bold pb-2">About Me</h2>
                </div>
                <div className="bg-slate-400 w-full h-[2px] mt-6 ml-2">
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 py-4" data-aos="fade-left">
                <figure className="flex justify-center">
                    <div className="w-[250px] h-[260px] bg-red-400 rounded-md absolute z-10">
                        <img src={Yusseno} alt='kosong' className="absolute mt-3"></img>
                    </div>
                    <div className="w-[250px] h-[260px] rounded-md absolute ml-10 mt-5 border-2 border-[#64FFDA] z-0">
                    </div>
                </figure>
                <article className="mt-[310px] lg:mt-0 lg:mr-4">
                    <p className="text-slate-400 text-xs lg:text-sm text-justify text-[16px]"> &nbsp; Hallo! Nama saya Yusseno dan saya senang membuat hal-hal yang hidup di internet. Ketertarikan saya pada pengembangan web dimulai Sekolah Menengah ketika saya mendapatkan tawaran untuk mencoba mengedit template untuk mengerjakan tugas teman saya, berupa tentang HTML & CSS!. <br />
                        &nbsp; Kemudian kareba merasakan tertarik di bidang tersebut saya memutuskan masuk ke sekolah kejuruan dan memutuskan melanjutkan studi ke Universitas untuk menpelajari lebih lanjut minat saya.<br />
                        &nbsp; Berikut adalah beberapa teknologi yang telah saya gunakan baru-baru ini diantaranya :
                    </p>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A9A9A9" class="w-6 h-6 mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <p className="text-slate-400 text-sm ml-2 mt-3">Backend</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-1">
                        <div className="flex flex-col items-center justify-center">
                            <img src={Golang} alt='kosong' className="h-6 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Golang</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={NextJs} alt='kosong' className="h-6 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Next Js</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={NestJs} alt='kosong' className="h-6 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Nest Js</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={Laravel} alt='kosong' className="h-6 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Laravel</p>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A9A9A9" class="w-6 h-6 mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <p className="text-slate-400 text-sm ml-2 mt-3">Frontend</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-1">
                        <div className="flex flex-col items-center justify-center">
                            <img src={Reacts} alt='kosong' className="h-6 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">React</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={Tailwind} alt='kosong' className="h-5 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Tailwind CSS</p>
                         </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A9A9A9" class="w-6 h-6 mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <p className="text-slate-400 text-sm ml-2 mt-3">Development & Operations</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-1">
                        <div className="flex flex-col items-center justify-center">
                            <img src={Ubuntu} alt='kosong' className="h-6 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Ubuntu</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={Gitlab} alt='kosong' className="h-5 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Gitlab</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={Docker} alt='kosong' className="h-5 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Docker</p>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A9A9A9" class="w-6 h-6 mt-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <p className="text-slate-400 text-sm ml-2 mt-3">Database</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-1">
                        <div className="flex flex-col items-center justify-center">
                            <img src={MySql} alt='kosong' className="h-6 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">MySql</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={PostresSql} alt='kosong' className="h-5 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">PostgresSQL</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={MongoDb} alt='kosong' className="h-5 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">MongoDB</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={Redist} alt='kosong' className="h-5 mt-2"></img>
                            <p className="text-slate-400 text-xs lg:text-sm mt-2">Redist</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>

    )
}

export default About;