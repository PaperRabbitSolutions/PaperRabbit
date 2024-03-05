import React, { useState } from 'react'

import hatch1 from '../../assets/brandingimg/hatch1.jpg';
import hatch2 from '../../assets/brandingimg/hatch2.jpg';
import hatch from '../../assets/brandingimg/hatch.jpg'



function Branding() {
    const [mouse, setMouse] = useState(false);
    const [id, setId ] = useState(0)

    const mousehover = (id) => {
        setMouse(!mouse);
        setId(id);
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[1920px] h-[940px] justify-center relative">
                <div className="w-[579px] h-[610px] left-[1091px] top-[228px] absolute">
                    <div className="w-[260px] h-10 left-[319px] top-[570px] absolute">
                        <div className="w-[120px] h-10 left-[140px] top-0 absolute bg-zinc-950 rounded-[10px] justify-center items-center inline-flex">
                            <div className="h-[30px] px-2.5 justify-between items-center inline-flex">
                                <div className="text-white text-sm font-bold font-['Inter'] leading-[30px]">Reach Us</div>
                            </div>
                        </div>
                        <div className="w-[120px] h-10 left-0 top-0 absolute bg-zinc-950 rounded-[10px] justify-center items-center inline-flex">
                            <div className="h-[30px] px-2.5 justify-between items-center inline-flex">
                                <div className="text-white text-sm font-bold font-['Inter'] leading-[30px]">Know More</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[579px] h-[258px] left-0 top-[270px] absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
                    <div className="w-[579px] h-60 left-0 top-0 absolute text-justify text-black text-sm font-normal font-['Inter'] leading-normal">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                </div>
                <div className="w-[995px] h-[662px] left-[76px] top-[228px] absolute">
                    <div className="w-[700px] h-[528px] left-[174px] top-0 absolute">
                        <img className="w-[700px] h-[528px] left-0 top-0 absolute rounded-[20px] shadow" src={hatch} alt='' />

                        <div className="w-5 h-5 left-[512px] top-[364px] absolute" onMouseEnter={()=> mousehover(1)} onMouseLeave={()=>mousehover(0)} >
                            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-sky-200 rounded-full" />
                        </div>
                        <div className="w-5 h-5 left-[190px] top-[254px] absolute" onMouseEnter={()=> mousehover(2)} onMouseLeave={()=>mousehover(0)}>
                            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-emerald-200 rounded-full" />
                        </div>
                        <div className="w-5 h-5 left-[462px] top-[164px] absolute " onMouseEnter={()=> mousehover(3)} onMouseLeave={()=>mousehover(0)}>
                            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-red-200 rounded-full" />
                        </div>
                        <div className="w-5 h-5 left-[262px] top-[464px] absolute " onMouseEnter={()=> mousehover(4)} onMouseLeave={()=>mousehover(0)}>
                            <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-white" />
                            <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-yellow-200 rounded-full" />
                        </div>

                        {/* ----------------------------popups-------------------------------------------- */}


                        {(mouse && id == 1) && <div className="w-80 left-[542px] top-[364px] absolute flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                            {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                            <div className="p-4 relative text-white text-xl font-bold font-['Inter']">Perspiciatis unde dolori perspiciatis unde dolori<br /> </div>
                            <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.</div>
                        </div>}

                        {(mouse && id == 2) && <div className="w-80  left-[230px] top-[2px] absolute flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                            {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                            <div className="p-4 relative text-white text-xl font-bold font-['Inter']">Perspiciatis unde dolori perspiciatis unde dolori<br /> </div>
                            <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.</div>
                        </div>}

                        {(mouse && id == 3) && <div className="w-80  left-[140px] top-[155px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                            {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                            <div className="p-4 relative text-white text-xl font-bold font-['Inter']">Perspiciatis unde dolori perspiciatis unde dolori<br /> </div>
                            <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.</div>
                        </div>}

                        {(mouse && id == 4) && <div className="w-80 left-[285px] top-[200px] absolute z-50 flex-col items-center justify-center bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]">
                            {/* <div className="w-80 h-[250px] left-0 top-0 relative bg-black bg-opacity-25 rounded-[20px] backdrop-blur-[20px]" /> */}
                            <div className="p-4 relative text-white text-xl font-bold font-['Inter']">Perspiciatis unde dolori perspiciatis unde dolori<br /> </div>
                            <div className="p-4 relative text-justify text-white text-sm font-normal font-['Inter']">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud. Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.</div>
                        </div>}

                        

                    </div>
                    <div className="w-[349px] h-[268px] left-0 top-[394px] absolute justify-center items-center inline-flex">
                        <img className="w-[349px] h-[268px] rounded-[20px] shadow" src={hatch2} alt='' />
                    </div>
                    <div className="w-[242px] h-[186px] left-[753px] top-[47px] absolute justify-center items-center inline-flex">
                        <img className="w-[242px] h-[186px] rounded-[20px] shadow" src={hatch1} alt='' />
                    </div>
                </div>


                {/* <div className="w-5 h-5 relative">
                    <div className="w-5 h-5  absolute rounded-full border border-white" />
                    <div className="w-[16.08px] h-[16.08px] left-[1.96px] top-[1.96px] absolute bg-red-200 rounded-full" />
                </div> */}


                <div className="left-[862px] top-[50px] absolute">
                    <div className="left-0 top-[64px] absolute text-center text-red-200 text-8xl font-normal font-['Heaven'] leading-[64px]">Hutch</div>
                    <div className="left-[11px] top-0 absolute text-center text-black text-[64px] font-normal font-['Revelstoke'] leading-[64px]">Rabbit</div>
                </div>
            </div>
        </div>
    )
}

export default Branding;