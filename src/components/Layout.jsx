import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

function Layout() {
  return (
    <div className="h-screen bg-slate-100">
      <header className="flex items-center px-[6.25rem] py-7 gap-8 bg-white shadow">
        <h1 className="text-primary text-3xl font-bold whitespace-nowrap">
          Bookstore CMS
        </h1>
        <div className="flex justify-between w-full">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to="books"
                className={({ isActive }) => `text-dark ${
                  !isActive && 'opacity-50'
                } text-xs tracking-widest uppercase`}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="categories"
                className={({ isActive }) => `text-dark ${
                  !isActive && 'opacity-50'
                } text-xs tracking-widest uppercase`}
              >
                Categories
              </NavLink>
            </li>
          </ul>
          <div className="h-11 w-11 flex justify-center items-center border border-gray-100 rounded-full self-end">
            <ImUser className="text-primary" />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
