import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";
import Footer from "../components/Footer/Footer";
import "./location.css"


const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (


    <div className="fondo">



    <div className="container">

      <div className="row mb-3">
       
        <h1 className="text-center mb-3 mt-5">
          Location :
          <span className="text-primary">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row ">
        <div className="col-lg-3 col-12 mb-4 justify-content-center d-md-block">

          
          
          <button type="button" className="justify-content-center  text-center mb-4 btn btn-primary">Pick Location</button>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  

    </div>
  );
};

export default Location;