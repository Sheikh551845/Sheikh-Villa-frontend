import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';



export default function MakeAnnouncement() {
    const axiosPublic = useAxiosPublic();

    const dateObject = new Date();

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
    const day = String(dateObject.getDate()).padStart(2, '0');

   const currentDate = `${year}-${month}-${day}`;

   const [formData, setFormData] = useState({Date:currentDate});
 
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        
      };

    
    
    
     
    
   
   
    
      const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(formData)
    
        const res = await axiosPublic.post('/AllAnnouncement', formData);
         
  
        if (res.data.insertedId) {
            
         
          Swal.fire('Created', ' Announcement has been created.', 'success');
          setFormData({Announcement:" ", Title:" "})
         
        }
    
          
       
      };
      
      
        
       
     
    
      return (
        
        <div>
           
          <div className="w-full ">
       
          <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
        <form onSubmit={handleSubmit} className="w-[15rem] md:w-fit flex flex-col gap-3">
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
              <label className="label">
                <span className="label-text text-bold text-black">Title</span>
              </label>
              <input
                type="text"
                placeholder="Announcement title"
                className="input border-black w-[15rem] md:w-96"
                name="Title"
                value={formData.Title}
                onChange={handleChange}
                required
              />
            </div>
           
         
          </div>
          <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-black">Announcement </span>
              </label>
              <textarea
                
                placeholder="Write announcement"
                className="input border-black w-[15rem] md:w-96"
                name="Announcement"
                value={formData.Announcement}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-black">Date </span>
              </label>
              <input
                
                placeholder={currentDate}
                className="input border-black w-[15rem] md:w-96"
                readOnly
              />
            </div>
          </div>
    
          <div className="form-control mt-6 p-0">
            <hr className="h-[1px] bg-black my-14" />
            <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row gap-x-4 gap-y-4">
              <button className="bg-green-500 rounded hover:bg-black transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full " onClick={handleSubmit}>
               Submit
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>

        </div>
      
      )
}