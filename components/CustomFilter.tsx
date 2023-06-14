"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter,useSearchParams } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {

    // router
    const router = useRouter();
  //state for storing the selected option
  const [selected, setSelected] = useState(options[0]);

  //update the current url search parameters and navigate to the new URL
  const handleUpdateParams = (e: { title: string; value: string }) => {
      //update pathname
      const newPathName = updateSearchParams(title, e.value.toLowerCase());

      router.push(newPathName);
  }

  return (
    <div className="w-fit">
      {/**List Container */}
      <Listbox
        value={selected}
        onChange={(e) => {
          // Update the selected option in state
          setSelected(e);
          //Update the URL search parameters and navigate to the new URL
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          {/* Button for the listbox toogling */}
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </Listbox.Button>

          {/* Transition container- for displaying the options list */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/**displaying options */}
            <Listbox.Options className="custom-filter__options">
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                //displaying each option
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
