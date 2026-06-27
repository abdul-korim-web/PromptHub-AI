"use client"

import React, {useEffect, useState} from "react";
import { Avatar, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { authClient } from "../../../../lib/auth-client";


export default function SavedPrompts() {

  const [savePost,setSavePost] = useState([]);
  const [loading,setLoading] = useState(true);



  const fetchSavePost = async()=>{

    try {


      const {data:tokenData} = await authClient.token();

      const token = tokenData?.token;

console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}/prompt/savepost`);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/prompt/savepost`,
        {
          headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
          },
          cache:"no-store"
        }
      );


      const data = await res.json();


      console.log("saved data",data);


      setSavePost(data?.savepost || []);


    } catch(error){

      console.log(error);

    } finally{

      setLoading(false);

    }

  };



  useEffect(()=>{

    fetchSavePost();

  },[]);



  if(loading){
    return <div>Loading...</div>
  }



  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">


      <div className="mb-6">

        <h2 className="text-xl font-bold flex gap-2">

          <Icon icon="gravity-ui:bookmark" />

          Saved Prompts

        </h2>

      </div>



      <div className="flex flex-col gap-4">


      {
      savePost.length === 0 ?

      (
        <p>No saved prompts</p>
      )

      :

      savePost.map((prompt)=>(


        <div
        key={prompt._id}
        className="
        bg-white dark:bg-[#0f172a]
        border rounded-2xl p-5
        flex justify-between
        "
        >


        <div>


        <div className="flex gap-2">

        <Chip size="sm">
          {prompt.aiTool}
        </Chip>


        <Chip size="sm">
          {prompt.category}
        </Chip>


        </div>



        <h3 className="font-bold mt-3">

        {prompt.title}

        </h3>



        <p className="text-sm text-gray-500">

        {prompt.description}

        </p>


        </div>




        <Button size="sm">

        <Icon icon="gravity-ui:eye"/>

        View

        </Button>



        </div>


      ))

      }


      </div>


    </div>
  )
}