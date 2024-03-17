import {AiOutlineSend} from 'react-icons/ai';

const Contact = () => {
    
    return (
        <div className="font-mono lg:px-40 px-10 lg:py-12 py-2 lg:pb-0 bg-[#09192F] text-slate-400 w-full" id="contact">
            <div className="min-[1023px]:hidden">
                <div className="flex">
                    <div>
                        <h2 className="text-[24px] lg:text-[32px] text-slate-100 font-bold pb-2">Contact</h2>
                    </div>
                    <div className="bg-slate-400 w-full h-[2px] mt-4 lg:mt-6 ml-2"></div>
                </div>
                <p className='text-xs'>Kotak masuk saya selalu terbuka. Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk menghubungi Anda kembali!</p>
                <div className='flex justify-center pt-4'>
                    <AiOutlineSend className='text-white hover:text-[#64FFDA] text-4xl'></AiOutlineSend>
                </div>
                {/* <div className="fixed top-[200px] right-[-60px] z-0">
                    <a href="mailto:yusseno19@gmail.com" className="">
                        <span className="fixed text-slate-400 hover:text-[#64FFDA] top-[260px] right-[0px] rotate-90">yusseno19@gmail.com</span>
                    </a>
                    <div className="fixed bottom-0 right-[-60px] w-72 h-[1px] bg-slate-400 rotate-90 z-10"></div>
                </div> */}
            </div>
            <div className='max-[1023px]:hidden relative'>
                <div className='fixed top-1/2 right-0 text-[14px] hover:text-[#64FFDA] rotate-90'>
                    <a href="mailto:yusseno19@gmail.com">
                        <span>yusseno19@gmail.com</span>
                    </a>
                </div>
                <div className='fixed top-3/4 right-0 h-1/3 w-[1px] bg-slate-400 mr-[75px]'></div>
            </div>
        </div>
    )
}
export default Contact