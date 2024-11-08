import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close (1).png";
import appLogo from "../assets/Helpfurrlogo.png";
import { motion } from "framer-motion";
import { handleError, handleSuccess } from "../Utils/utils";
import { ToastContainer } from "react-toastify";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useAuthStore } from "../store/authStore";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { TbDog } from "react-icons/tb";
import { IoMdHeartHalf } from "react-icons/io";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import "../index.css";


function Navbar() {
  const { user, logout } = useAuthStore();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const logoutHandler = () => {
    try {
      logout();
      handleSuccess("Logged Out Succesfull");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      handleError("Logout Unsuccessful");
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between max-w-screen-2xl mx-auto items-center">
        <Link
          to=""
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img className="sm:w-14 w-12" src={appLogo} alt="" />
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="hover:text-[#F69946] quicksand-semi-bold text-main-brown transition-colors duration-200 text-[16px] font-[400] cursor-pointer flex gap-1 items-center"
            >
              Adoption
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="flex dropdown-content bg-base-100 rounded-[4px] z-[1] mt-8 gap-4  px-4 py-4 shadow"
            >
              <div className="flex flex-col gap-4 ">
                <div className="hover:bg-light-orange hover:text-main-orange p-4 rounded-lg w-[300px]">
                  <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont  text-[16px] font-[400] cursor-pointer transition duration-200">
                    <Link
                      to="/adoption"
                      onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                      }}
                      className=""
                    >
                      <div className="flex gap-2 items-center">
                        <TbDog className="text-[24px] text-main-brow" />
                        <h1 className="flex fredoka-medium text-pretty h-full w-full text-[18px] font-bold tracking-wider">
                          Dogs
                        </h1>
                      </div>
                      <p className="text-secondary-brown quicksand-regular">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </Link>
                  </li>
                </div>
                <div className="hover:bg-light-orange hover:text-main-orange p-4 rounded-lg w-[300px]">
                  <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont  text-[16px] font-[400] cursor-pointer transition duration-200">
                    <Link
                      to="/postadoption"
                      onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                      }}
                      className=""
                    >
                      <div className="flex gap-2 items-center">
                        <TbDog className="text-[24px] text-main-brow" />
                        <h1 className="flex h-full w-full text-[18px] font-bold fredoka-medium tracking-wider">
                          Post for adoption
                        </h1>
                      </div>
                      <p className="text-secondary-brown quicksand-regular">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </Link>
                  </li>
                </div>
              </div>
              <div>
                <div className="hover:bg-light-orange hover:text-main-orange p-4 rounded-lg w-[300px]">
                  <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont  text-[16px] font-[400] cursor-pointer transition duration-200">
                    <Link
                      to="/matchmaking"
                      onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                      }}
                      className=""
                    >
                      <div className="flex gap-2 items-center">
                        <IoMdHeartHalf className="text-[24px] text-main-brow" />
                        <h1 className="flex h-full w-full text-[18px] font-bold fredoka-medium tracking-wider">
                          Matchmaking
                        </h1>
                      </div>
                      <p className="text-secondary-brown quicksand-regular">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <li className="hover:text-[#F69946]  quicksand-semi-bold text-main-brown transition-colors paragraphFont duration-300 text-[16px] font-[400] cursor-pointer">
            <Link
              to="/donation"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Donation
            </Link>
          </li>
          <li className="hover:text-[#F69946]  quicksand-semi-bold text-main-brown transition-colors paragraphFont duration-300 text-[16px] font-[400] cursor-pointer">
            <Link
              to="/location"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Location
            </Link>
          </li>
          <li className="hover:text-[#F69946]  quicksand-semi-bold text-main-brown transition-colors paragraphFont duration-300 text-[16px] font-[400] cursor-pointer">
            <Link
              to="/educresources"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Educational
            </Link>
          </li>

          <div>
            <Link to="/notification">
              <IoIosNotifications />
            </Link>
          </div>

          <div className="">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a className="justify-between ">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={logoutHandler}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                  className=" text-main-orange rounded-full py-3 px-8 bg-light-orange border-main-orange border	 quicksand-semi-bold uppercase sm:text-[18px] text-[16px] hover:bg-main-orange hover:text-light-orange duration-200 transition "
                >
                  Sign-up
                </Link>
              </>
            )}
          </div>
        </ul>
        <div className="md:hidden flex items-center gap-3">
          <div className="">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a className="justify-between ">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={logoutHandler}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                  className=" text-light-orange rounded-full py-3 px-5 bg-main-orange uppercase sm:text-[18px] text-[16px] hover:bg-main-brown duration-200 transition "
                >
                  Sign-up
                </Link>
              </>
            )}
          </div>
          <img
            src={toggle ? closeIcon : menuIcon}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            styles.paddingX
          } absolute top-0 right-0 bg-white md:hidden py-3 min-w-[100%] z-10 transition duration-200 ${
            !toggle ? "hidden" : "block"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className="flex items-center gap-2 "
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img className="sm:w-14 w-12" src={appLogo} alt="" />
            </Link>
            <img
              src={closeIcon}
              alt=""
              onClick={() => setToggle(!toggle)}
              className=" w-6 h-6 "
            />
          </div>

          <ul className="list-none h-[100vh] flex items-center justify-center flex-1  flex-col gap-4">
            {/* <div className="dropdown  dropdown-end dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="hover:text-[#F69946] text-main-brown transition-colors duration-200 text-[16px] font-[400] cursor-pointer flex gap-1 items-center"
              >
                Adoption
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="flex flex-col dropdown-content bg-base-100 rounded-[4px] z-[1] mt-8 gap-4  px-4 py-4 shadow"
              >
                <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont hover:bg-light-orange pl-2 pr-4 py-2 border-l-2 hover:border-l-main-orange text-[16px] font-[400] cursor-pointer transition duration-200">
                  <Link
                    to="/adoption"
                    onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                    className="flex h-full w-full"
                  >
                    Dogs
                  </Link>
                </li>
                <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont hover:bg-light-orange pl-2 pr-4 py-2 border-l-2 hover:border-l-main-orange text-[16px] font-[400] cursor-pointer transition duration-200">
                  <Link
                    to="/postadoption"
                    onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                    className="whitespace-nowrap"
                  >
                    Post a dog for adoption
                  </Link>
                </li>
                <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont hover:bg-light-orange pl-2 pr-4 py-2 border-l-2 hover:border-l-main-orange text-[16px] font-[400] cursor-pointer transition duration-200">
                  <Link
                    to="/matchmaking"
                    onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                    className="whitespace-nowrap"
                  >
                    Matchmaking
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="h-screen w-full pt-32 px-4">
              <div className="mx-auto w-full max-w-lg divide-y divide-white/5">
                <Disclosure as="div" className="" defaultOpen={false}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-base/6 text-main-orange group-data-[hover]:text-white/80">
                      Adoption
                    </span>
                    <IoIosArrowDown className="size-5 text-main-brown group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                    <ul>
                      <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont hover:bg-light-orange pl-2 pr-4 py-2 border-l-2 hover:border-l-main-orange text-[16px] font-[400] cursor-pointer transition duration-200">
                        <Link
                          to="/adoption"
                          onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                          }}
                          className="flex h-full w-full"
                        >
                          Dogs
                        </Link>
                      </li>
                      <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont hover:bg-light-orange pl-2 pr-4 py-2 border-l-2 hover:border-l-main-orange text-[16px] font-[400] cursor-pointer transition duration-200">
                        <Link
                          to="/postadoption"
                          onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                          }}
                          className="whitespace-nowrap"
                        >
                          Post for adoption
                        </Link>
                      </li>
                      <li className="hover:text-[#F69946] text-main-brown bg-b hover:rounded-tr-btn hover:rounded-br-btn paragraphFont hover:bg-light-orange pl-2 pr-4 py-2 border-l-2 hover:border-l-main-orange text-[16px] font-[400] cursor-pointer transition duration-200">
                        <Link
                          to="/matchmaking"
                          onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                          }}
                          className="whitespace-nowrap"
                        >
                          Matchmaking
                        </Link>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
                <ul className="flex flex-col gap-3 mt-3">
                  <li className="text-[#F69946]  transition-colors paragraphFont duration-300 text-[16px] font-[400] cursor-pointer">
                    <Link
                      to="/donation"
                      onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                      }}
                    >
                      Donation
                    </Link>
                  </li>
                  <li className="text-[#F69946] nransition-colors paragraphFont duration-300 text-[16px] font-[400] cursor-pointer">
                    <Link
                      to="/location"
                      onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                      }}
                    >
                      Location
                    </Link>
                  </li>
                  <li className="text-[#F69946] transition-colors paragraphFont duration-300 text-[16px] font-[400] cursor-pointer">
                    <Link
                      to="/educresources"
                      onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                      }}
                    >
                      Educational Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </motion.div>
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Navbar;
