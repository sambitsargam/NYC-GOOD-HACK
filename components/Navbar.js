import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Menu, Clear } from '@mui/icons-material';

const Navbar = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const account = useSelector((state) => state.web3Reducer.account);

  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <nav>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray bg-ccdaColor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ccdaColor"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <Clear /> : <Menu />}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <h4 className="font-mono text-xl text-gray font-bold hidden lg:block">
                  Celo
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block m-2">
                    <span className="relative text-white">CROWD</span>
                  </span>
                  FUNDING
                </h4>
              </div>
              <div className="hidden font-sans sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link href="/dashboard" passHref>
                    <span
                      className={`${
                        router.pathname === '/dashboard' ? 'bg-ccdacColor' : ''
                      } text-gray px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer hover:bg-ccdacColor hover:text-gray`}>
                      Dashboard
                    </span>
                  </Link>
                  <Link href="/my-contributions" passHref>
                    <span
                      className={`${
                        router.pathname === '/my-contributions'
                          ? 'bg-ccdacColor'
                          : ''
                      } text-gray px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer hover:bg-ccdacColor hover:text-gray`}>
                      My contribution
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute font-sans inset-y-0 right-0 flex items-center pr-2 lg:h-8 lg:p-4 bg-ccdacColor mt-3 rounded-md sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className=" pl-2 w-40 truncate rounded-full text-gray hover:text-gray ">
                <span>{account}</span>
              </button>

              {/* <!-- Profile  --> */}
              {/* <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-ccdacColor flex text-sm rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full"></div>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className={`sm:hidden ${!openMenu ? 'hidden' : ''}`}
          id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/dashboard" passHref>
              <span
                className={`${
                  router.pathname === '/dashboard' ? 'bg-ccdacColor' : ''
                } text-gray block px-3 py-2 rounded-md text-base font-medium`}>
                Dashboard
              </span>
            </Link>

            <Link href="/my-contributions" passHref>
              <span
                className={`${
                  router.pathname === '/my-contributions' ? 'bg-ccdacColor' : ''
                } text-gray block px-3 py-2 rounded-md text-base font-medium`}>
                My contribution
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
