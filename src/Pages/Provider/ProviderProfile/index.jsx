import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import avatar_tmp from '../../../Assets/Images/bird_hero.png'
import { LiaSuitcaseRollingSolid } from 'react-icons/lia'

const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user')) || null;
  return user;
};

const ProviderProfile = () => {

  const dataUser = useSelector((state) => state.user);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, [dataUser]);


  return (

    <div className="flex flex-col justify-center items-start bg-white md:flex-row">
      <div className='p-4 flex h-full flex-col justify-center items-center gap-5 '>
        <img className="object-cover w-full ring-1 ring-gray-300 md:h-auto md:w-48 md:rounded-none" src={avatar_tmp} alt="" />

        <div className='flex gap-1 justify-center items-center'>
          <LiaSuitcaseRollingSolid className='text-xl text-emerald-700' />
          <p className='text-center'>
            <span className='text-emerald-700 font-bold text-center text-2xl'>45 </span>
             orders
          </p>
        </div>

      </div>

      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details about you:
            </p>
          </div>

          <div className="border-t border-gray-200">
            <dl>

              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.fullName}
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.email}
                </dd>
              </div>

              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  0123456xxx9
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Location
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  TP HCM
                </dd>
              </div>

              <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  About
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  At Bird Haven, we are dedicated to bringing the joy of avian companionship to your life. As a premier bird shop, we offer a wide range of services and products to cater to bird enthusiasts of all kinds. Whether you're an experienced avian aficionado or just starting your journey with feathered friends, we have something for everyone.                  </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProviderProfile