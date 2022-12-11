import React from "react";

import useFetchCustom from "../../customHook/useFetchCustom";
const url = "https://restcountries.com/v3.1/name/peru";
export default function Country() {
  let { data, loading } = useFetchCustom(url);
  let result = data;
  let status = loading;
  // const id = uuid();
  // console.log(data, "country");

  // const apiData =
  //   Object.keys(result).length > 0 &&
  //   result.map((item) => (
  //     <div>
  //       {
  //         <>
  //           <div>{item.name.common}</div>
  //           <a href={item.maps.googleMaps}>link here</a>
  //           <div>{item.capital}</div>
  //         </>
  //       }
  //     </div>
  //   ));
  if (status) return <div>Loading</div>;
  return (
    <div>
      <h1>Country</h1>
      {result.map((item) => {
        return (
          <div>
            <div>{item.name.common}</div>
            <a href={item.maps.googleMaps}>link here</a>
            <div>{item.capital}</div>
          </div>
        );
      })}
      {/* <div>{apiData} </div> */}
    </div>
  );
}
