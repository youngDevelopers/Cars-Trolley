"use client";

import { FilterProps } from "@/types";
import React, { useEffect, useState } from "react";

interface Props {
  filters: FilterProps;
}

const useFetchCars = (filters: FilterProps) => {
  const { manufacturer, year, model, limit, fuel } = filters;
  const [result, setResult] = useState({
    result: [],
    loading: 'idle',
    error: null,
  });

  const headers: HeadersInit = {
    "X-RapidAPI-Key": "0fca8230a8mshd8aeb89a75370c9p17af47jsned3d6cbc99ad",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const fetchItems = async () => {
    try {
      setResult({
        result: [],
        loading: 'fetching',
        error: null,
      });
      const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
          headers: headers,
        }
      );
      //Parse the response as JSON
      const _result = await response.json();
      setResult({
        result: _result,
        loading: 'idle',
        error: null,
      });
    } catch (error) {
      setResult({
        result: [],
        loading: 'idle',
        error: error,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [manufacturer, year, model, limit, fuel]);

  return result;
};

export default useFetchCars;
