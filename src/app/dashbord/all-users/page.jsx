import React from 'react';
import { Avatar, Chip, Button, Tooltip } from "@heroui/react";
import { Trash2, Edit2, ShieldAlert } from "lucide-react";

const users = [
  {
    id: "1",
    name: "Abdul Korim",
    email: "abdul@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    role: "Admin",
    status: "Active",
    plan: "Premium",
  },
  {
    id: "2",
    name: "Rahat Islam",
    email: "rahat@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    role: "User",
    status: "Active",
    plan: "Free",
  },
  {
    id: "3",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "Moderator",
    status: "Suspended",
    plan: "Pro",
  },
];

const GetAllUser = () => {
  return (
    <div className="w-full p-4 lg:p-6 bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
      
      {/* হেডার সেকশন */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">All Users</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage and view all registered platform users</p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold px-4 py-2 rounded-xl text-sm w-fit">
          Total Users: {users.length}
        </div>
      </div>

      {/* পিউর রেসপনসিভ HTML/Tailwind টেবিল (কোনো কালেকশন এরর আসবে না) */}
      <div className="overflow-x-auto w-full rounded-xl border border-gray-100 dark:border-white/5">
        <table className="w-full min-w-[800px] text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-100 dark:border-white/5">
              <th className="p-4 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">User</th>
              <th className="p-4 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th className="p-4 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Plan</th>
              <th className="p-4 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider text-center">Actions</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-100 dark:divide-white/5">
            {users.map((user) => (
              <tr 
                key={user.id} 
                className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors"
              >
                {/* यूজার ইনফো */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar 
                      radius="lg" 
                      src={user.avatar} 
                      name={user.name[0]} 
                      className="w-10 h-10 font-bold" 
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white leading-none">
                        {user.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </td>
                
                {/* রোল */}
                <td className="p-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {user.role}
                  </span>
                </td>
                
                {/* প্ল্যান */}
                <td className="p-4">
                  <Chip
                    size="sm"
                    variant="flat"
                    color={user.plan === "Premium" ? "warning" : user.plan === "Pro" ? "secondary" : "default"}
                    className="font-bold text-[11px]"
                  >
                    {user.plan}
                  </Chip>
                </td>
                
                {/* স্ট্যাটাস */}
                <td className="p-4">
                  <Chip
                    size="sm"
                    variant="dot"
                    color={user.status === "Active" ? "success" : "danger"}
                    className="font-semibold text-xs"
                  >
                    {user.status}
                  </Chip>
                </td>
                
                {/* অ্যাকশন বাটন */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    <Tooltip content="Edit User" closeDelay={0}>
                      <Button isIconOnly size="sm" variant="light" className="text-gray-500 hover:text-blue-600">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </Tooltip>
                    
                    <Tooltip content="Change Role" closeDelay={0}>
                      <Button isIconOnly size="sm" variant="light" className="text-gray-500 hover:text-amber-500">
                        <ShieldAlert className="w-4 h-4" />
                      </Button>
                    </Tooltip>
                    
                    <Tooltip content="Delete User" color="danger" closeDelay={0}>
                      <Button isIconOnly size="sm" variant="light" className="text-gray-400 hover:text-rose-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default GetAllUser;