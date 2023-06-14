"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  //defining states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  //const [queries, setQueries] = useState({});

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() == "") {
      return alert("Please put some input in the search bar");
    }

    //run the updated search Params
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    //Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    //Update or delete the "model search parameter based on the model value
    if (model) {
      searchParams.set("model", model);
      // setQueries({
      //   ...queries,
      //   model,
      // });
    } else {
      // setQueries({
      //   ...queries,
      //   model: "",
      // });
      searchParams.delete("model");
    }

    //Update or delete the 'manufacturer' search paremeter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
      
    }

    //generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    
    //updating the route
    router.push(newPathname);
    
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      {/**Search by Manufacture */}
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      {/**Search By Model */}
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      {/**Search Button */}
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
