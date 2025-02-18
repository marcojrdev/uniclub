
import {RiShoppingCartLine} from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import logo from "../../assets/svg/logoUniclub.svg"

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCepOpen, setIsCepOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".menu-container")) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className="bg-laranjap h-[8px]"></div>

    <div className="flex flex-wrap  justify-center  bg-backcolor items-center  h-[114px]   ">
    <a href="" className="min-[681px]:hidden" ><img src={logo} alt="" /></a>

      <div className=" flex justify-center  gap-10  items-center w-absolute  w-[87vw]    ">
          
        <a href="" className="max-[681px]:hidden" ><img src={logo} alt="" /></a>

        <div className="flex items-center  bg-white rounded-full border-gray-300 px-4 max-[710px]:hidden  "  >
          <form action="" method="get" >
            <div className="">
              <input className="flex-1 bg-transparent outline-none text-gray-700  w-[30vw] h-[54px]  " type="text" placeholder='O que você gostaria hoje?'  />
              <button type="submit"><HiMagnifyingGlass /></button>
            </div>

          </form>
        </div>

        
        {/* CEP*/}
        <div className=" " >
          
          <button onClick={() => setIsCepOpen(!isCepOpen)} 
            className="flex  justify-items-center items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="36" height="36" rx="18" fill="#F8F3EC"></rect> <path d="M17.9994 9C22.0219 9 25.1528 12.6206 24.9942 16.6633C24.7317 23.4347 17.9994 28 17.9994 28M11 19.3632C11.0953 19.6581 11.2012 19.9478 11.3124 20.2321C13.2453 24.9874 18.0006 27.9996 18.0006 27.9996M18.0006 9C13.9781 9 10.8472 12.2642 11.0058 15.9091M19.7357 14.0665C20.7911 15.1169 20.7911 16.8199 19.7357 17.8703C18.6804 18.9206 16.9693 18.9206 15.9139 17.8703C14.8585 16.8199 14.8585 15.1169 15.9139 14.0665C16.9693 13.0162 18.6804 13.0162 19.7357 14.0665Z" stroke="#F47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
          <div className="">
            <span className="text-left max-[1285px]:hidden">
              <p className="font-bold ">Onde</p> 
              <p> você está ?</p>
           </span>
          </div>
          </button>

          {isCepOpen && (
            <div className="absolute  flex justify-center items-center gap-2  w-100 h-10   ">
                  <form action="" method="get">
                  <input className="flex-1 bg-corsecudaria outline-none text-gray-700   " type="text" placeholder='Digigite seu cep'  />
                  <button className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none" type="submit">Buscar</button>
                  </form>
            </div>    
        
      )}
          {/*Faça cadastro*/}
        </div>
        <div className="flex  justify-items-center items-center gap-5">
          <span className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow" > <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="36" height="36" rx="18" fill="#F8F3EC"></rect> <path d="M21.1088 17.1088C22.9637 15.2538 22.9637 12.2462 21.1088 10.3912C19.2538 8.53625 16.2462 8.53625 14.3912 10.3912C12.5363 12.2462 12.5363 15.2538 14.3912 17.1088C16.2462 18.9637 19.2538 18.9637 21.1088 17.1088Z" stroke="#F47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.9995 22C22.022 22 25 24 24.9943 27M18.0007 22C13.9782 22 11 24 11.0059 27" stroke="#F47920" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg></span>
          <span className="text-left max-[1285px]:hidden">
            <b>Faça login</b>
           <br /> ou cadastre-se
          </span>
        </div>
        <div>
        <button type="onclik" className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow">
          <span > <RiShoppingCartLine className="text-orange-500 w-6 h-6"/>  </span>
        </button>
        </div>
      </div>
    </div>

      {/*Pesquisa*/}
     <div className="fixed top-25 right-1 flex items-center gap-2 min-[710px]:hidden " >
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="p-2 bg-laranjap text-white rounded-xl hover:bg-amber-400 transition"
      >
        <HiMagnifyingGlass size={20} />
      </button>
      {isSearchOpen && (
        <input
          type="text"
          placeholder="O que você gostaria hoje?"
          className="p-2 border bg-white border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>

    {/*DEPARTAMENTO*/}
    <div className=" bg-corsecudaria w-full flex  items-center justify-center ">
      
      <div className="flex flex-row justify-center  items-center  h-[9vh] w-[87vw] gap-10  ">
      <div className="flex relative menu-container items-center  ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 p-2 text-3F3F3F rounded-xl  "
        >
          <FiMenu size={30} className="text-laranjap" />
          <span className="text-xl" >Departamentos</span>
          <IoIosArrowDown size={20} className="text-laranjap" />
        </button>
        {/*className="fixed inset-0 bg-black bg-opacity-50 z-40  "*/ }
        {isMenuOpen && (
          <div
           className="absolute top-full z-40 left-0 mt-2  bg-black:transparent bg-opacity-50  " 
           
           onClick={() => setIsMenuOpen(false)}
           >
            <div className="flex flex-row justify-center gap-10 bg-white p-4 rounded-2xl shadow-lg w-[60vw] max-[914px]:flex-col md:w-[70vw] " onClick={(e) => e.stopPropagation()}>
              <div className="md:w-80 ">
                <h2 className="text-lg font-semibold mb-2">Saúde e Bem-estar</h2>
                <ul className="flex flex-col ">
                  <li className="p-2 hover:bg-gray-200 rounded">Beleza</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Cuidados Pessoais</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Esportes e Aventura</li>
                </ul>

                <h2 className="text-lg font-semibold mt-2 mb-2">Casa</h2>
                <ul className="flex flex-col ">
                  <li className="p-2 hover:bg-gray-200 rounded">Casa, Jardim e Limpeza</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Móveis e Decoração</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Construção</li>
                </ul>
              </div>

              <div className="md:w-80">
                <h2 className="text-lg font-semibold mb-4 ">Estilo</h2>
                <ul className="flex flex-col ">
                  <li className="p-2 hover:bg-gray-200 rounded">Vestuário</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Calçados</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Bijuterias e Acessórios</li>
                </ul>
                <h2 className="text-lg font-semibold mt-2 mb-2">Tincidunt</h2>
                <ul className="flex flex-col ">
                  <li className="p-2 hover:bg-gray-200 rounded">Tempor</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Consequat</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Construção</li>
                </ul>
              </div>
              <div className="md:w-80">
                <h2 className="text-lg font-semibold mt-2 mb-2">Eletro</h2>
                <ul className="flex flex-col ">
                  <li className="p-2 hover:bg-gray-200 rounded">Eletrodomésticos</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Celulares, Tablets e Acessórios</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Câmeras e Acessórios</li>
                </ul>
                </div>
              <div className="md:w-80">
              <h2 className="text-lg font-semibold mt-2 mb-2">Mais Departamentos</h2>
                <ul className="flex flex-col ">
                  <li className="p-2 hover:bg-gray-200 rounded">Produtos Regionais</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Brinquedos e Jogos</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Livros</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Bebês</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Alimentos e Bebidas</li>
                  <li className="p-2 hover:bg-gray-200 rounded">Agro e Indústria</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="max-[736px]:hidden"> <a href="">Descontos Cliente Unimed Natal</a></div>
      </div>

      
      <div className="flex flex-row-reverse  basis-[43vw] max-[736px]:hidden"><a href="">Venda no Uniclube</a></div>

      </div>
    
    </div>
    

    </>
  )
}

export default Navbar