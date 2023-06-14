"use client";

import useFetchCars from "@/app/hooks/useFetchCars";
import { CarProps } from "@/types";
import { useSearchParams } from "next/navigation";
import React from "react";
import CarCard from "../CarCard";

interface Props {}

const ShowCars = (props: Props) => {
    
  const searchParams = useSearchParams();

  const response = useFetchCars({
    manufacturer: searchParams.get("manufacturer") || "",
    year: searchParams.get("year") || 2022,
    fuel: searchParams.get("fuel") || "",
    limit: searchParams.get("limit") || 10,
    model: searchParams.get("model") || "",
  });


  return (
    <div>
      {response.loading === "fetching" ? (
        <div>showloading ...</div>
      ) : (
        <>
          {/* @ts-ingore */}
          {response?.result?.length > 1 ? (
            <section>
              <div className="home__cars-wrapper">
                {response?.result?.map((car: CarProps) => (
                  <CarCard car={car} key={car.city_mpg} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oopd, no results</h2>
              {/* <p>{allCars?.message}</p> */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowCars;
