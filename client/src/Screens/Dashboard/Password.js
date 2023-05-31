import React from 'react'
import SideBar from './SideBar';
import {Input} from'../../Components/UserInputs';

function Password() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold'>Change Password</h2>
        <Input label="Prev Password " placeholder="*****" type="Password" bg={true} />
        <Input label="New Password " placeholder="*****" type="Password" bg={true} />
        <Input label="Conf. Password" placeholder="*****" type="Password" bg={true} />
       <div className='flex justigy-end items-center my-4'>
        
        <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
          Update Passsword
        </button>
       </div>
      </div>
    </SideBar>
  )
}

export default Password
