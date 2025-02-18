import React from 'react'
import Imgfundo from "../assets/img/sessão cliente unimed natal.jpg"
import artesanato from "../assets/img/artesanato-potiguar 1.png"

const SessaoCliente = () => {
  return (
    <>
    <div className="flex justify-center w-full">
      <div
        className="flex flex-col justify-center w-full max-w-[1194px] min-h-[50%] bg-cover bg-center gap-5 p-40 sm:p-20"
        style={{ backgroundImage: `url(${Imgfundo})` }}
      >
        <h1 className="text-2xl text-white text-left">
          Descontos cliente <b>Unimed Natal</b>
        </h1>

        {/* Grid Responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="max-w-[207px] w-full bg-white border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img className="rounded-t-lg w-full" src={artesanato} alt="Produto" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="font-medium">Garrafa de areia colorida</h5>
                  <div className="flex items-center gap-2">
                    <p className="text-[0.9rem] text-gray-500 line-through">R$ 32,90</p>
                    <p className="text-[0.9rem] text-red-500">10% OFF</p>
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">R$ 29,61</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  3x R$ 6,33 sem juros no cartão <br /> ou R$ 18,50 no pix
                </p>
                <div className="flex gap-0.5">
                  <p className="text-[0.9rem]">Vendido por</p>
                  <p className="text-[0.9rem] underline">Sr.Castanha</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default SessaoCliente