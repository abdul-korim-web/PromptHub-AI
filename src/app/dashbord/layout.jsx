import { UserSilder } from '@/components/dashbordComponents/userDashbordComponents/userSlideBar';
import React from 'react';

const DashbordLayout = ({children}) => {
    return (
        <div className='flex min-h-screen lg:space-x-[50px]'>
            <UserSilder/>
        <div className='flex-1'>
              {children}
        </div>
        </div>
    );
}

export default DashbordLayout;
