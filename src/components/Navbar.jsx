"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// আপনার প্রপার পাথটি নিশ্চিত করুন
import {
  Menu,
  X,
  LogOut,
  LogIn,
  UserPlus,
  LayoutDashboard,
  Sun,
  Moon,
  Shield, 
} from "lucide-react";
import { authClient } from "../../lib/auth-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const pathname = usePathname();
  const router = useRouter();


  const { data: session, isPending } = authClient.useSession();
  const user = session?.user; 

  const toggleMenu = () => setIsOpen(!isOpen);

 
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || !saved) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;
  };


  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); 
        },
      },
    });
    console.log("Logged out successfully");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-1 group">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                PromptHub{" "}
                <span className="text-blue-500 font-extrabold">AI</span>
              </span>
            </Link>
          </div>


          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/all-prompts" className={getLinkClass("/all-prompts")}>
              All Prompts
            </Link>


            {user && (
              <Link href="/dashboard" className={getLinkClass("/dashboard")}>
                <span className="flex items-center gap-1">
                  <LayoutDashboard className="w-4 h-4" /> 
                  {user.role === "creator" ? "Creator Hub" : "Dashboard"}
                </span>
              </Link>
            )}
          </div>


          <div className="hidden md:flex items-center space-x-4">
            
 
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-yellow-400 transition-all duration-300 focus:outline-none cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

          
            {!isPending && (
              <>
                {user ? (
                  <div className="flex items-center gap-3">
       
                    <div className="text-right hidden xl:block">
                      <p className="text-xs font-semibold">{user.name}</p>
                      <span className="text-[10px] px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-md uppercase font-bold">
                        {user.plan || "Free"}
                      </span>
                    </div>

                    <button
                      onClick={handleLogout}
                      type="button"
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-red-400 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl transition-all duration-300"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <Link href="/login" className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </Link>
                    <Link href="/register" className="flex items-center space-x-1 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-300 transform hover:-translate-y-0.5">
                      <UserPlus className="w-4 h-4" />
                      <span>Register</span>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>


          <div className="flex items-center space-x-2 md:hidden">
            <button onClick={toggleTheme} type="button" className="p-2 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-300">
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
            </button>

            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors duration-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 px-4 pt-2 pb-4 space-y-1">
          <Link href="/" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
            Home
          </Link>
          <Link href="/all-prompts" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
            All Prompts
          </Link>

          {user && (
            <Link href="/dashboard" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
              Dashboard ({user.role})
            </Link>
          )}

          <div className="pt-4 border-t border-gray-800">
            {user ? (
              <button
                onClick={() => { handleLogout(); toggleMenu(); }}
                type="button"
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-red-950/30 hover:bg-red-900/40 text-red-400 border border-red-900/50 text-sm font-medium transition-all duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout ({user.name})</span>
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={toggleMenu} className="flex items-center justify-center space-x-1 px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                <Link href="/register" onClick={toggleMenu} className="flex items-center justify-center space-x-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-300">
                  <UserPlus className="w-4 h-4" />
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}