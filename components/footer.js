import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import Link from "next/link";
import VercelLogo from "../public/img/vercel.svg";
import { FiMapPin, FiArrowUpCircle } from 'react-icons/fi';

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

export default function Footer({ props, settings }) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">

<nav className="flex flex-wrap justify-center mt-8">
          <Link href="/whatcollect"
                className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>
  <span className="my-4 font-oswald text-xl text-gray-500 dark:text-gray-600 px-4 transition-all duration-300 transform hover:scale-105 hover:text-green-500 cursor-pointer">
    Какво събираме?
  </span>
</Link>
<Link href="/druzet"
        className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>
  <span className="my-4 font-oswald text-xl text-gray-600 px-4 transition-all duration-300 transform hover:text-green-500 cursor-pointer">
    ДРУЗЕТ
  </span>
</Link>
<Link href="/"
        className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>
  <span className="my-4 font-oswald text-xl text-gray-600 px-4 transition-all duration-300 transform hover:scale-105 hover:text-green-500 cursor-pointer">
    Любопитни Факти
  </span>
</Link>
<Link href="/"
        className='transition-all duration-300 transform hover:scale-105 cursor-pointer'>
  <span className="my-4 font-oswald text-xl text-gray-600 px-4 transition-all duration-300 transform hover:scale-105 hover:text-green-500 cursor-pointer">
    Бисквитки
  </span>
</Link>

          </nav>

          <div className="w-full mb-4">
          <nav className="flex flex-wrap justify-center">
            <Link href="/"
                    className='mx-4'>
              <span className="text-gray-600 hover:text-green-500 hover:underline px-4 transition-all duration-300 transform hover:scale-125">
                <FaFacebook size={50} />
              </span>
            </Link>
            <Link href="/"
            className='mx-4'>
              <span className="text-gray-600 hover:text-green-500 hover:underline px-4 transition-all duration-300 transform hover:scale-125">
                <FaInstagram size={50} />
              </span>
            </Link>
            <Link href="/"
            className='mx-4'>
              <span className="text-gray-600 hover:text-green-500 hover:underline px-4 transition-all duration-300 transform hover:scale-125">
                <FaTiktok size={50} />
              </span>
            </Link>
            <Link href="/"
            className='mx-4'>
              <span className="text-gray-600 hover:text-green-500 hover:underline px-4 transition-all duration-300 transform hover:scale-125">
                <FaYoutube size={50} />
              </span>
            </Link>
          </nav>
        </div>

        <div className="mt-5 ml-10">
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <MapPinIcon className="w-4 h-4" />
              <span>Индустриална 44, Габрово 5302, България</span>
            </div>
            {settings?.email && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                <a href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>
            )}
            {settings?.phone && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
          </div>

      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        
        <span>
          {" "}
          Made by{" "}
          {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR Purchase PRO version for commercial license.  */}
          <a
            href="https://web3templates.com/?ref=stablo-template"
            rel="noopener"
            target="_blank">
            BTC Industries
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/web3templates/stablo"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          <a
            href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <Image
              src={VercelLogo}
              alt="Powered by Vercel"
              unoptimized={true}
              width="150"
              height="25"
            />
          </a>
        </div>
      </div>
      {/* <Backlink /> */}
    </Container>
  );
}

// const Backlink = ({ page }) => {
//   const linkProps = {
//     home: {
//       href: "/home", // Change this to the appropriate home page link
//       icon: <FiArrowUpCircle size={20} />,
//       text: "Back to Top",
//     },
//     locations: {
//       href: "/locations", // Change this to the appropriate locations page link
//       icon: <FiMapPin size={20} />,
//       text: "View Locations",
//     },
//   };

//   const { href, icon, text } = linkProps[page] || linkProps.home;

//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener"
//       className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
//     >
//       {icon}
//       <span>{text}</span>
//     </a>
//   );
// };

