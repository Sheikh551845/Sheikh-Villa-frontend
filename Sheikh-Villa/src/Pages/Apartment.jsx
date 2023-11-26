import React from 'react'
import ApartmentCard from '../Components/ApartmentCard'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../Hooks/useAxiosPublic';

export default function Apartment() {

  const axiosPublic = useAxiosPublic();
  const {data: AllApartment = [], isPending: loading, refetch} = useQuery({
    queryKey: ['AllApartment'], 
    queryFn: async() =>{
        const res = await axiosPublic.get('/AllApartment');
        return res.data;
    }
})

console.log(AllApartment.length)
  return (
    <div>
      <ApartmentCard></ApartmentCard>
    </div>
  )
}
