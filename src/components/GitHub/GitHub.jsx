import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const GitHub = () => {
  
    const data=useLoaderData() // this is the react dom feature hooks


    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //   fetch("https://api.github.com/users/hiteshchoudhary")
    //   .then(response=>response.json())
    //   .then(data=>{
    //     setdata(data);
    //     console.log("khgkkjg====>",data)}
        
    //     )
    // },[])

  return (
    <div>
      <h1>
        flowers:-{data.followers}
      </h1>
    </div>
  )
}

export default GitHub


export const githubLoader=async()=>{
    const response=await fetch("https://api.github.com/users/hiteshchoudhary")

    return response.json()

}