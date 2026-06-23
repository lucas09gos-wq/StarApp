import { useState, useEffect } from "react";
import { getData } from "../services/storage";

export default function useStorage(key) {
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const result = await getData(key);
    setData(result);
  };

  return { data, load };
}