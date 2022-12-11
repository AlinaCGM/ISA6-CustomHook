import React from "react";
import useFetchCustom from "../../customHook/useFetchCustom";

const url = "https://restcountries.com/v3.1/all";
export default function Countries() {
  let { data, loading } = useFetchCustom(url);
  let result = data;
  let status = loading;
  // console.log(data, "countryData");
  // console.log(typeof result);
  // const apiData =
  //   Object.keys(result).length > 0 &&
  //   result.slice(1, 6).map((item) => (
  //     <div>
  //       {
  //         <>
  //           <div>{item.name.common}</div>
  //         </>
  //       }
  //     </div>
  //   ));
  if (status) return <div>Loading</div>;
  return (
    <div>
      <h1>Countries</h1>
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
