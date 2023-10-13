import React, { useEffect, useState } from 'react';
import './style.scss'
import logo from '../../../Assets/Images/logo.png'
import DropdownUser from '../../DropdownUser';
import { useSelector } from 'react-redux';

function getUser() {
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const NavbarProviderComponent = () => {

  const [user, setUser] = useState(null);
  const dataUser = useSelector((state) => state.user);

  useEffect(() => {
    setUser(getUser());

  }, [dataUser]);

  return (
    <nav className="bg-white border ring-1 navbar-bg-color">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
        </a>

        <div className='flex gap-2 items-center justify-center'>
          <DropdownUser fullName={user?.fullName} role={user?.roleName} resetUser={setUser} />
        </div>
      </div>
    </nav>

  );
};

export default NavbarProviderComponent;
