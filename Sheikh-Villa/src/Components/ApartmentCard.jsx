import React from 'react'

export default function ApartmentCard(Apartment) {

  return (
    <div className='col-span-1 cursor-pointer group '>
      <div className='flex flex-col gap-2 w-full bg-black bg-opacity-60 rounded-lg '>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={`${Apartment.Apartment.apartment_image}`}
            alt='Room'
          />

          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            <button className='btn bg-green'>Agreement</button>
          </div>
          {Apartment.Apartment.status=="rented" &&
            <div
              className='
               absolute
               bottom-3
               right-3
               flex
               justify-center
               items-center gap-2
                      '
            >
              <p className="text-red-500 font-bold text-xl">Rented</p>
              <img src="https://i.ibb.co/4VLWhXp/pngwing-com.png" alt=""  className="w-10 h-10"/>

            </div>
          }

        </div>
        <div className='p-4'>
          <div className='flex gap-2  justify-center items-center mb-2 border border-1 border-white'>

            <p className=' text-lg font-bold text-white'>{Apartment.Apartment.apartment_no}</p>
          </div>
          <div className='flex gap-2  items-center'>
            <p className='font-semibold text-lg text-white'>Rent :</p>
            <p className=' text-lg text-green-300'>{Apartment.Apartment.rent}</p></div>

          <div className='flex gap-2  items-center'>
            <p className='font-semibold text-lg text-white'>Block :</p>
            <p className=' text-lg text-blue-300'>{Apartment.Apartment.block_name}</p>
          </div>

          <div className='flex gap-2  items-center'>
            <p className='font-semibold text-lg text-white'>Floor :</p>
            <p className=' text-lg text-blue-300'>{Apartment.Apartment.floor_no}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
