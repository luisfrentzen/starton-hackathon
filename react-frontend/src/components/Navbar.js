import { Disclosure } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white shadow relative z-50 sticky top-0">
      {({ open }) => (
        <>
          <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="flex justify-between h-16 xl:h-20">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-200">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="flex items-center">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="hidden w-auto sm:block sm:h-10"
                      src="/assets/scholarr_left.png"
                      alt="CHOLARR"
                    />
                    <img
                      className="h-8 w-auto sm:hidden"
                      src="/assets/scholarr_blank.png"
                      alt="CHOLARR"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:mr-16 md:flex md:space-x-8 w-32 h-full">
                  <Link
                    to="/majors"
                    className={`inline-flex items-center justify-center px-4 pt-1 border-b-4 text-base xl:text-lg font-medium w-full h-full ${
                      location.pathname.includes("majors")
                        ? "border-secondary-200 text-gray-700"
                        : "border-transparent text-gray-500 hover:border-secondary-200 hover:text-gray-700"
                    }`}
                  >
                    Majors
                  </Link>
                </div>
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 xl:px-6 xl:py-3 border border-transparent text-sm xl:text-lg font-medium rounded-md xl:rounded-lg text-white bg-secondary-200 shadow-sm hover:bg-secondary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-300"
                    onClick={() => history.push("/take-test")}
                  >
                    <span>Perform Test</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                to='/majors'
                className={`${location.pathname.includes('majors') ? 'bg-blue-100 border-secondary-400 text-secondary-200' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
              >
                Majors
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
