import React from "react";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import SideBar from "./Component/SideBar";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const App = () => {
  const NASA_KEY = import.meta.env.VITE_NASA_API;

  const [showModal, setModal] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const handleModal = () => {
    setModal(!showModal);
  };
  console.log(NASA_KEY);
  useEffect(() => {
    async function fetchAPIDATA() {
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const key = new Date().getDate().toString();

      const item = localStorage.getItem(`NASA-${key}`);
      if (item) {
        setData(JSON.parse(item));
        return;
      }
      try {
        const res = await fetch(url).then((data) => data.json());
        setData(res);
        localStorage.setItem(`NASA-${key}`, JSON.stringify(res));
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIDATA();
  }, []);
  return (
    <>
      {data ? (
        <Main data={data}></Main>
      ) : (
        <div className="loading">
          <AiOutlineLoading3Quarters />
        </div>
      )}

      {showModal && <SideBar data={data} handleModal={handleModal}></SideBar>}

      {data && <Footer data={data} handleModal={handleModal}></Footer>}
    </>
  );
};

export default App;
