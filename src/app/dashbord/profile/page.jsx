"use client";

import React, { useEffect,useState  } from "react";
import { Avatar, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { authClient } from "../../../../lib/auth-client";

export default function UserProfileUI() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const stats = [
    { label: "Total Prompts", count: "12", icon: "gravity-ui:folder", color: "text-blue-500 bg-blue-500/10" },
    { label: "Saved Prompts", count: "48", icon: "gravity-ui:bookmark", color: "text-purple-500 bg-purple-500/10" },
    { label: "My Reviews", count: "7", icon: "gravity-ui:star", color: "text-amber-500 bg-amber-500/10" },
  ];
//  useEffect(() => {
//    const fetchUserData = async () => {
//       const {data: tokenData} = await authClient.token()
//           const token = tokenData?.token
//       try {
//         setLoading(true);
        
      
//         const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL; 
        
//         const response = await fetch(`${serverUrl}/me`, {
//           method: "GET",
//           headers: {
//             "Authorization": `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });

//         const data = await response.json();

//         if (response.ok && data.success) {
//           setUserInfo(data.data); 
//         } else {
//           setError(data.message || "Failed to fetch user data");
//         }
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

   
   
//       fetchUserData();
//       console.log('userInfo', userInfo)
//   }, []);
 const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log('user', user)
  // if (loading) return <p>Loading user profile...</p>;
  // if (error) return <p className="text-rose-500">Error: {error}</p>;
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      

      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Icon icon="gravity-ui:person" className="text-blue-600" />
          My Profile
        </h2>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage your account details, bio, and platform settings.
        </p>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        

        <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center h-fit">
          <div className="relative group">
            <Avatar 
              className="w-24 h-24 rounded-2xl text-large border-2 border-blue-500/20" 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
            />

            <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
              <Icon icon="gravity-ui:camera" className="text-white text-xl" />
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mt-4">{user?.name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">{user?.email}</p>
          
          <div className="flex gap-2 mt-3">
            <Chip size="sm" className="bg-amber-500/10 text-amber-500 font-bold">{user?.plan}</Chip>
            <Chip size="sm" variant="flat" color="primary" className="text-[10px]">Prompt Engineer</Chip>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 line-clamp-3 leading-relaxed border-t border-gray-50 dark:border-white/5 pt-4">
            "Passionate AI Prompt Engineer specializing in Midjourney art architectures and GPT-4 automated SaaS workflows."
          </p>
        </div>


        <div className="lg:col-span-2 space-y-6">
          

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-3 md:p-4 shadow-sm flex items-center gap-3"
              >
                <div className={`p-2 rounded-xl hidden md:block ${stat.color}`}>
                  <Icon icon={stat.icon} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-400 font-medium truncate">{stat.label}</p>
                  <p className="text-base md:text-xl font-bold text-gray-800 dark:text-gray-100 mt-0.5">{stat.count}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="bg-white dark:bg-[#0f172a] border border-gray-100 dark:border-white/10 rounded-2xl p-5 md:p-6 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 mb-4 pb-2 border-b border-gray-50 dark:border-white/5">
              Personal Information
            </h4>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <label className="text-xs font-semibold mb-1.5 block text-gray-600 dark:text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue={user?.name}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1.5 block text-gray-600 dark:text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    disabled
                    defaultValue={user?.email}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-900/50 text-sm text-gray-400 cursor-not-allowed outline-none"
                  />
                </div>
              </div>


              <div>
                <label className="text-xs font-semibold mb-1.5 block text-gray-600 dark:text-gray-400">Biography</label>
                <textarea 
                  rows={3}
                  defaultValue="Passionate AI Prompt Engineer specializing in Midjourney art architectures and GPT-4 automated SaaS workflows."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none focus:border-blue-500 transition resize-none"
                />
              </div>


              <div className="flex justify-end gap-3 pt-4 border-t border-gray-50 dark:border-white/5">
                <Button 
                  type="button" 
                  variant="light"
                  className="text-xs font-semibold rounded-xl text-gray-500 h-9"
                >
                  Discard Changes
                </Button>
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 h-9 rounded-xl shadow-sm"
                >
                  Save Profile
                </Button>
              </div>

            </form>
          </div>

        </div>

      </div>

    </div>
  );
}