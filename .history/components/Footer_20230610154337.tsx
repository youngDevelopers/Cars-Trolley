import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-300">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
          {/**Footer Intro */}
        <div className="flex flex-col justify-start items-center gap-6">
            <Image src='/logo.svg' alt="logo" width={118} height={18} className="object-contain"/>
            <p className="text-base texte-gray-700">
                Car Trolley 2023 <br/>
                All Rights Reserved &copy;
            </p>
        </div>

        {/**Footer Links */}
      </div>
  </footer>;
};

export default Footer;
