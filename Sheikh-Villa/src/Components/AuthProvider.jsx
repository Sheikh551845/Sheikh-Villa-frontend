import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/firebase.config';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Hooks/useAxiosPublic';


export const AuthContext = createContext(null);
const auth = getAuth(app);



const googleProvider= new GoogleAuthProvider();





export default function AuthProvider({children}) {


  const [theme, setTheme] =useState("light")
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [DataLoading, setDataLoading] = useState(true)
  const [data, setData] = useState([])
  const [TakenAssignment, setTakenAssignment] = useState([])
 const [currentUser,setCurrenUser]=useState('')
  const [AllSubmittedAssignment,setAllSubmittedAssignment]=useState([])
  
  const axiosPublic = useAxiosPublic();


  //Google
  const googleSignIn = () => {
    // setLoading(true);
    return signInWithPopup(auth, googleProvider);
}
//Email

const crateEmailUser = (email, password)=>
{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

//Email login

const login=(email,password)=>
{
  setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
}

//Log Out

const logout=()=>
{
  return signOut(auth)
}


    
//Observer
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
   
      setUser(user);
      setLoading(false)
      setCurrenUser(user?.email)
     
  });
}, [])
   
  

const update=(photo,name)=>
{
  return updateProfile(auth.currentUser,{photoURL: photo, displayName: name})
}







const {data: AllAgreement = [], isPending: AgreementLoading, refetch:AgreementRefetch} = useQuery({
  queryKey: ['AllAgreement'], 
  queryFn: async() =>{
      const res = await axiosPublic.get('/Agreement');
      return res.data;
  }
})

const {data: AllApartment = [], isPending: AllApartmentLoading, refetch:AllApartmentRefetch} = useQuery({
  queryKey: ['AllApartment'], 
  queryFn: async() =>{
      const res = await axiosPublic.get('/AllApartment');
      return res.data;
  }
})

const {data: AllUser = [], isPending: AllUserLoading, refetch:AllUserRefetch }= useQuery({
  queryKey: ['AllUser'], 
  queryFn: async() =>{
      const res = await axiosPublic.get('/AllUser');
      return res.data;
  }
})

    

    


 

  const authInformation ={
    data,
    googleSignIn,
    crateEmailUser,
    login,
    user,
    logout,
    loading,
    update,
    setTheme,
    theme,
    setData,
    AllAgreement,
    AgreementLoading,
    AgreementRefetch,
    AllApartment,
    AllApartmentLoading,
    AllApartmentRefetch,
    AllUser,
    AllUserRefetch,
    AllUserLoading,
    currentUser
   
  }
 
    
   

   
  return (
   <AuthContext.Provider value={authInformation}>
    {children}
   </AuthContext.Provider>
  )
}