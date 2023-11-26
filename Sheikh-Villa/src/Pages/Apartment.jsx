import React, { useEffect, useState } from 'react'
import ApartmentCard from '../Components/ApartmentCard'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../Hooks/useAxiosPublic';
import ComponentTitle from '../Components/ComponentTitle';
import Spinner from '../Components/Spinner';

export default function Apartment() {

  const axiosPublic = useAxiosPublic();
  const {data: AllApartment = [], isPending: loading, refetch} = useQuery({
    queryKey: ['AllApartment'], 
    queryFn: async() =>{
        const res = await axiosPublic.get('/AllApartment');
        return res.data;
    }
})

const [AllData, setAllData]=useState();
const[items, setItems]=useState();
const [tPage,setTPage]=useState([])
const[numPages,setNumPages]=useState()
const[currentPage, setCurrentPage]=useState(1);
const[typedData,setTypedData]=useState(AllApartment);

useEffect(() => {
  setTypedData(AllApartment);
  setAllData(AllApartment);
  setItems(AllApartment.length);
  setNumPages([1]);
}, [AllApartment])



const handleChange =(e)=>
{
  if(e.target.value>70000)
 {
const findData =  AllApartment.filter(item => item.rent >= e.target.value);
   setTypedData(findData);
   setAllData(findData)

 }
 else if(e.target.value<70000)
 {
  const findData =  AllApartment.filter(item => item.rent <= e.target.value);
  setTypedData(findData);
   setAllData(findData)
 }
 
else
{
  setTypedData(AllApartment)
  setAllData(AllApartment)
}





}



const handleItemChange =(e)=>
{  
setAllData (typedData.slice(0,e.target.value))
const pages=Math.ceil((typedData.length)/(e.target.value));
setItems(e.target.value);
setTPage([])


 for(let i=1;i<=pages; i++)
 {
  tPage.push(i);
 }
 console.log(tPage.length)

 setNumPages(tPage)

}



const buttonHandler=(value)=>
{ 
setCurrentPage(value);
const start=(value-1)*items;
const end = (value*items);

console.log(start,end)
if(value==(tPage.length))
{
  const lastEnd = ((value-1)*items)+(typedData.length-((value-1)*items))+1
  setAllData (typedData.slice(start,lastEnd))
  console.log(AllData)
     
}

else{
  setAllData (typedData.slice(start,end))

}


}


  return (
    <div className="p-2 md:p-5  pt-20 md:pt-32 mb-10">

<div className='mb-5 md:mb-10'>
<ComponentTitle Title={"All Apartments"}></ComponentTitle>
</div>
<div className="flex  justify-end mb-5 ">
<div className="flex flex-col items-center justify-center mr-3">
            <label className="label">
                  <span className="label-text text-bold text-black">View By Rent</span>
                </label>
                <select
        className="input border-black max-w-fit"
        name="assignmentType"
        
        onChange={handleChange}
        required
      >
        <option value="All">All</option>
        <option value="69999">Less than 70K</option>
        <option value="70000">Greater than 70K</option>
        
  
      </select>
            </div>
            </div>
             

{
loading ? <Spinner></Spinner>:
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
{
  AllData?.map((Apartment, index) => (
  <ApartmentCard key={index} Apartment={Apartment}></ApartmentCard>
  ))
  }
</div>
}

<div className="flex flex-wrap items-center justify-center gap-3 mt-10">
  <div className="flex  items-center justify-center gap-5">
  {  numPages?.map((value, index) => (<div className="btn w-fit" key={index} value={value}  onClick={()=>buttonHandler(value)}>
    <button  className={currentPage===value ?"bg-black text-white btn  max-w-fit ":""}>{value}</button>
  </div>
         
       ))
       }
  </div>
    
  
  <div className="flex flex-col items-center justify-center mr-3">
           
                <select
        className="input border-black max-w-fit text-center"
        name="assignmentType"
        
        onChange={handleItemChange}
        required
      >
        <option value={AllApartment.length}>Apartment per page</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
  
      </select>
            </div>
  </div>


    </div>
  )
}
