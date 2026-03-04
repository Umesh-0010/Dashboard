import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Products', path: '/Product' },
  { id: 3, name: 'Add Product', path: '/addProduct' },
  { id: 4, name: 'Update', path: '/update' },
  { id: 5, name: 'SingIn', path: '/SingIn' },
  
  
  
];

function Navbar() {
  return (
    
    <div className="w-52 flex flex-col mt-4 items-start gap-4 text-base font-medium p-2">
      {links.map(({ id, name, path }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            `h-10 w-full rounded-lg transition active:scale-95 text-gray-100 outline-none flex items-center p-2 ${
              isActive ? 'bg-blue-900' : ''
            }`
          }
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;