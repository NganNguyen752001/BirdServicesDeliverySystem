import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import avatar_tmp from '../../../Assets/Images/bird_hero.png'

function getUser() {
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const ProviderProfile = () => {

  const dataUser = useSelector((state) => state.user);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, [dataUser]);

  return (

    <div class="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={avatar_tmp} alt="" />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Details about you:
            </p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.fullName}
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.email}
                </dd>
              </div>
              <div class="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Location
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  TP HCM
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  About
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
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