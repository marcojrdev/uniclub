import React from 'react'
import { useRef } from "react";
import { GrBook } from "react-icons/gr";

import livro from "../assets/svg/livro.svg";
import saude from "../assets/svg/saude.svg";
import kid from "../assets/svg/kid.svg";
import Roupas from "../assets/svg/camisa.svg";
import decoracao from "../assets/svg/sofar.svg";
import Esportes from "../assets/svg/Esportes.svg"
import Beleza from "../assets/svg/Beleza.svg"
import Imoveis from "../assets/svg/Imoveis.svg"
import Oculos from "../assets/svg/Oculos.svg"
import Servicos from "../assets/svg/Servicos.svg"



const Icones = () => {
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        if (containerRef.current) {
          const scrollAmount = direction === "left" ? -200 : 200;
          containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      };    

  return (
    <>
            <div className="relative w-full max-w-[1294px]   mx-auto overflow-hidden text-center  ">
     
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto w-full h-full px-10 "
       
      >
       
        <div className='mt-10 flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={livro} alt="" />
            
            
            </but>
            <span>Arte, Papelaria e Armarinho</span>
        </div>

        <div className=' flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={saude} alt="" />
            
            
            </but>
            <span>Saúde</span>
        </div>

<div className='mt-10 flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={Roupas} alt="" />
            
            
            </but>
            <span>Calçados, Roupas e Bolsas</span>
        </div>

<div className=' flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={kid} alt="" />
            
            
            </but>
            <span>Bebês</span>
        </div>

<div className='mt-10 flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={decoracao} alt="" />
            
            
            </but>
            <span>Casa, Móveis e Decoração</span>
        </div>

<div className='mt-10 flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={Esportes} alt="" />
            
            
            </but>
            <span>Esportes e Fitness</span>
        </div>
<div className='mt-10 flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={Beleza} alt="" />
            
            
            </but>
            <span>Beleza e Cuidado Pessoal</span>
        </div>

<div className=' flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={Imoveis} alt="" />
            
            
            </but>
            <span>Imóveis</span>
        </div>

<div className=' flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={Oculos} alt="" />
            
            
            </but>
            <span>Óculos</span>
        </div>

<div className=' flex flex-col items-center justify-center  w-[110px]'>

            <but
            
                className="w-[96px] h-[96px] flex items-center justify-center bg-[#EAE0D5] text-laranjap hover:bg-[#F47920] hover:text-white  rounded-full shrink-0"
                style={{ scrollSnapAlign: "center" }}
            > <img src={Servicos} alt="" />
            
            
            </but>
            <span>Serviços</span>
        </div>




      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
     
    </div>
    </>
  )
}

export default Icones