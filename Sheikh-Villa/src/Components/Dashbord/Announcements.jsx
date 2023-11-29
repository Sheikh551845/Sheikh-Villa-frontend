import React, { useContext } from 'react'
import AnnouncementsCard from './AnnouncementsCard'
import { AuthContext } from '../AuthProvider'
import DashContentFormat from './DashContentFormat'

export default function Announcements() {

  const{AllAnnouncement}=useContext(AuthContext)

  console.log(AllAnnouncement?.length)
  return (
   
      
       <div>
      {
  AllAnnouncement?.map((Announcement, index) => (
  <AnnouncementsCard key={index} Announcement={Announcement}></AnnouncementsCard>
  ))
  }
      
    </div>
 
   
  )
}
