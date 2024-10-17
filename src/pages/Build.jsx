import { useParams } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import React, { useState, useEffect } from "react";

const Build = () => {
  const { bID } = useParams();
  
  const { auth } = useContext(AuthContext);
  //return <h1>Build / {bID} / jaja</h1>;

  switch (bID) {
      case "auth":      
      return <Search_viv auth={auth} bID={bID} />;    
      break;
      case "settings":        
        return <Search_hogares auth={auth} bID={bID} />;      
        break;
        case "stroage":        
        return <Search_visitas auth={auth} bID={bID} />;      
        break;             
      case "hosting":        
        return <Search_personas auth={auth} bID={bID} />;      
        break;   
      case "pobla":        
        return <Search_poblacion auth={auth} bID={bID} />;      
        break;  
      case "sec23":        
        return <Search_sec23 auth={auth} bID={bID} />;      
        break;  
      case "sec301":        
        return <Search_sec301 auth={auth} bID={bID} />;      
        break;  
      case "sec4":        
        return <Search_sec4 auth={auth} bID={bID} />;      
        break;
        
    default:
      return <h1>Build / {bID} / jaja</h1>;
  }

};

///
const Search_viv = ({ auth, bID }) => {

  const [allcpvdata0103, setAllcpvdata0103] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachdata0103, setSearchcpvdata0103] = useState("");

  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcpvdata0103(search);

    if (search !== "") {
      const filterdata = allcpvdata0103.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcpvdata0103);
    }
  };

  useEffect(() => {
    const getsurvey = async () => {
      try {
        const getres = await fetch('https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev/list0103viv', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth?.accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        const setdatasurvey = await getres.json();
        setAllcpvdata0103(setdatasurvey);
        setFilterresult(setdatasurvey);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getsurvey();
  }, [bID]); // El useEffect ahora depende de bID

  return ( 
    <>
        <div className="flex flex-col">
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />   
        <button className="bg-neutral-700 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded-full">Viviendas</button>
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
               
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" onChange={(e) => {handlesearch(e);}} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Texto a Buscar..." />
        
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 

            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white " >
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                <th scope="col" className="px-6 py-4">id</th>
                <th scope="col" className="px-6 py-4">latitud</th>
                <th scope="col" className="px-6 py-4">longitud</th>
                <th scope="col" className="px-6 py-4">altitud</th>
                <th scope="col" className="px-6 py-4">latitud_1</th>
                <th scope="col" className="px-6 py-4">longitud_2</th>
                <th scope="col" className="px-6 py-4">altitud_3</th>
                <th scope="col" className="px-6 py-4">catvia</th>
                <th scope="col" className="px-6 py-4">nomvia</th>
                <th scope="col" className="px-6 py-4">puerta</th>
                <th scope="col" className="px-6 py-4">puerta_a</th>
                <th scope="col" className="px-6 py-4">block</th>
                <th scope="col" className="px-6 py-4">piso</th>
                <th scope="col" className="px-6 py-4">interior</th>
                <th scope="col" className="px-6 py-4">interior_a</th>
                <th scope="col" className="px-6 py-4">manzana</th>
                <th scope="col" className="px-6 py-4">lote</th>
                <th scope="col" className="px-6 py-4">kilometro</th>
                <th scope="col" className="px-6 py-4">resfin</th>
                <th scope="col" className="px-6 py-4">resfin_o</th>
                <th scope="col" className="px-6 py-4">observaciones</th>
                <th scope="col" className="px-6 py-4">s1_p14</th>
                <th scope="col" className="px-6 py-4">s1_p14_o</th>
                <th scope="col" className="px-6 py-4">s1_p15</th>
                <th scope="col" className="px-6 py-4">s1_p15_o</th>
                <th scope="col" className="px-6 py-4">s1_p16</th>
                <th scope="col" className="px-6 py-4">s1_p16_o</th>
                <th scope="col" className="px-6 py-4">s1_p16_fc</th>
                <th scope="col" className="px-6 py-4">s1_p17</th>
                <th scope="col" className="px-6 py-4">s1_p17_o</th>
                <th scope="col" className="px-6 py-4">t_hogar</th>
                <th scope="col" className="px-6 py-4">estado_envio</th>
                <th scope="col" className="px-6 py-4">obs_vivienda</th>
                <th scope="col" className="px-6 py-4">home_state</th>
                <th scope="col" className="px-6 py-4">feccre_srv</th>
                <th scope="col" className="px-6 py-4">fecup_srv</th>
                <th scope="col" className="px-6 py-4">usucre</th>
                <th scope="col" className="px-6 py-4">feccre</th>
                <th scope="col" className="px-6 py-4">usureg</th>
                <th scope="col" className="px-6 py-4">fecreg</th>
                <th scope="col" className="px-6 py-4">fecenv</th>
                </tr>
              </thead>
              <tbody>
                {serachdata0103.length > 1
                  ? filterresult.map((datasurvey0103, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.latitud} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.longitud} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.altitud} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.latitud_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.longitud_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.altitud_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.catvia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.nomvia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.puerta} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.puerta_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.block} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.piso} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.interior} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.interior_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.manzana} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.lote} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.kilometro} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.resfin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.resfin_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.observaciones} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p14} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p14_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p15} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p15_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p16} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p16_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p16_fc} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p17} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s1_p17_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.t_hogar} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.estado_envio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.obs_vivienda} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecenv} </td>
                      </tr>
                    ))
                  : allcpvdata0103.map((getcon, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.latitud} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.longitud} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.altitud} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.latitud_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.longitud_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.altitud_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.catvia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.nomvia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.puerta} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.puerta_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.block} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.piso} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.interior} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.interior_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.manzana} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.lote} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.kilometro} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.resfin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.resfin_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.observaciones} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p14} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p14_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p15} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p15_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p16} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p16_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p16_fc} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p17} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s1_p17_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.t_hogar} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.estado_envio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.obs_vivienda} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecenv} </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
  
  );
}

///
const Search_hogares = ({ auth, bID }) => {

  const [allcpvdata0103, setAllcpvdata0103] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachdata0103, setSearchcpvdata0103] = useState("");

  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcpvdata0103(search);

    if (search !== "") {
      const filterdata = allcpvdata0103.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcpvdata0103);
    }
  };

  useEffect(() => {
    const getsurvey = async () => {
      try {
        const getres = await fetch('https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev/list0103hog', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth?.accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        const setdatasurvey = await getres.json();
        setAllcpvdata0103(setdatasurvey);
        setFilterresult(setdatasurvey);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getsurvey();
  }, [bID]); // El useEffect ahora depende de bID

  return ( 
    <>
        <div className="flex flex-col">
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />   
        <button className="bg-neutral-700 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded-full">Hogares</button>
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
               
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" onChange={(e) => {handlesearch(e);}} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Texto a Buscar..." />
        
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 

            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white " >
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                <th scope="col" className="px-6 py-4">id</th>
                <th scope="col" className="px-6 py-4">hogar_id</th>
                <th scope="col" className="px-6 py-4">hogar_n</th>
                <th scope="col" className="px-6 py-4">idkey_hogar</th>
                <th scope="col" className="px-6 py-4">idkey_hogar1</th>
                <th scope="col" className="px-6 py-4">cen_nomap</th>
                <th scope="col" className="px-6 py-4">cen_dni</th>
                <th scope="col" className="px-6 py-4">jefb_nomap</th>
                <th scope="col" className="px-6 py-4">jefb_dni</th>
                <th scope="col" className="px-6 py-4">resvis_dia</th>
                <th scope="col" className="px-6 py-4">resvis_mes</th>
                <th scope="col" className="px-6 py-4">resvis_anio</th>
                <th scope="col" className="px-6 py-4">resvis</th>
                <th scope="col" className="px-6 py-4">resvis_o</th>
                <th scope="col" className="px-6 py-4">auto</th>
                <th scope="col" className="px-6 py-4">obs_hogar</th>
                <th scope="col" className="px-6 py-4">home_state</th>
                <th scope="col" className="px-6 py-4">feccre_srv</th>
                <th scope="col" className="px-6 py-4">fecup_srv</th>
                <th scope="col" className="px-6 py-4">usucre</th>
                <th scope="col" className="px-6 py-4">feccre</th>
                <th scope="col" className="px-6 py-4">usureg</th>
                <th scope="col" className="px-6 py-4">fecreg</th>
                <th scope="col" className="px-6 py-4">fecenv</th>
          
                </tr>
              </thead>
              <tbody>
                {serachdata0103.length > 1
                  ? filterresult.map((datasurvey0103, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.hogar_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_hogar} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_hogar1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_nomap} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_dni} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_nomap} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_dni} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.resvis_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.resvis_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.resvis_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.resvis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.resvis_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.auto} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.obs_hogar} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecenv} </td>
                   
                      </tr>
                    ))
                  : allcpvdata0103.map((getcon, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.hogar_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_hogar} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_hogar1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_nomap} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_dni} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_nomap} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_dni} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.resvis_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.resvis_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.resvis_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.resvis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.resvis_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.auto} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.obs_hogar} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecenv} </td>
                       
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
  
  );
}

///
const Search_visitas = ({ auth, bID }) => {

  const [allcpvdata0103, setAllcpvdata0103] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachdata0103, setSearchcpvdata0103] = useState("");

  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcpvdata0103(search);

    if (search !== "") {
      const filterdata = allcpvdata0103.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcpvdata0103);
    }
  };

  useEffect(() => {
    const getsurvey = async () => {
      try {
        const getres = await fetch('https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev/list0103visit', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth?.accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        const setdatasurvey = await getres.json();
        setAllcpvdata0103(setdatasurvey);
        setFilterresult(setdatasurvey);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getsurvey();
  }, [bID]); // El useEffect ahora depende de bID

  return ( 
    <>
        <div className="flex flex-col">
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />   
        <button className="bg-neutral-700 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded-full">Visitas</button>
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
               
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" onChange={(e) => {handlesearch(e);}} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Texto a Buscar..." />
        
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 

            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white " >
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                <th scope="col" className="px-6 py-4">id</th>
                <th scope="col" className="px-6 py-4">hogar_id</th>
                <th scope="col" className="px-6 py-4">visit_n</th>
                <th scope="col" className="px-6 py-4">idkey_visit</th>
                <th scope="col" className="px-6 py-4">idkey_visit_1</th>
                <th scope="col" className="px-6 py-4">idkey_visit_2</th>
                <th scope="col" className="px-6 py-4">cen_fec_dia</th>
                <th scope="col" className="px-6 py-4">cen_fec_mes</th>
                <th scope="col" className="px-6 py-4">cen_fec_anio</th>
                <th scope="col" className="px-6 py-4">cen_fec_dia_ter</th>
                <th scope="col" className="px-6 py-4">cen_fec_mes_ter</th>
                <th scope="col" className="px-6 py-4">cen_fec_anio_ter</th>
                <th scope="col" className="px-6 py-4">cen_hor_ini</th>
                <th scope="col" className="px-6 py-4">cen_min_ini</th>
                <th scope="col" className="px-6 py-4">cen_hor_fin</th>
                <th scope="col" className="px-6 py-4">cen_min_fin</th>
                <th scope="col" className="px-6 py-4">cen_prox_dia</th>
                <th scope="col" className="px-6 py-4">cen_prox_mes</th>
                <th scope="col" className="px-6 py-4">cen_prox_anio</th>
                <th scope="col" className="px-6 py-4">cen_prox_hor</th>
                <th scope="col" className="px-6 py-4">cen_prox_min</th>
                <th scope="col" className="px-6 py-4">cen_resvis</th>
                <th scope="col" className="px-6 py-4">cen_resvis_o</th>
                <th scope="col" className="px-6 py-4">cen_resvis_a</th>
                <th scope="col" className="px-6 py-4">cen_resvis_a_o</th>
                <th scope="col" className="px-6 py-4">cen_resvis_b</th>
                <th scope="col" className="px-6 py-4">cen_resvis_b_o</th>
                <th scope="col" className="px-6 py-4">cen_resvis_c</th>
                <th scope="col" className="px-6 py-4">cen_resvis_c_o</th>
                <th scope="col" className="px-6 py-4">nro_total_per</th>
                <th scope="col" className="px-6 py-4">datos_per_nom</th>
                <th scope="col" className="px-6 py-4">datos_per_ap</th>
                <th scope="col" className="px-6 py-4">datos_per_am</th>
                <th scope="col" className="px-6 py-4">celular</th>
                <th scope="col" className="px-6 py-4">no_brindo</th>
                <th scope="col" className="px-6 py-4">gps_lat</th>
                <th scope="col" className="px-6 py-4">gps_lon</th>
                <th scope="col" className="px-6 py-4">gps_alt</th>
                <th scope="col" className="px-6 py-4">jefb_fec_dia</th>
                <th scope="col" className="px-6 py-4">jefb_fec_mes</th>
                <th scope="col" className="px-6 py-4">jefb_fec_anio</th>
                <th scope="col" className="px-6 py-4">jefb_fec_dia_ter</th>
                <th scope="col" className="px-6 py-4">jefb_fec_mes_ter</th>
                <th scope="col" className="px-6 py-4">jefb_fec_anio_ter</th>
                <th scope="col" className="px-6 py-4">jefb_hor_ini</th>
                <th scope="col" className="px-6 py-4">jefb_min_ini</th>
                <th scope="col" className="px-6 py-4">jefb_hor_fin</th>
                <th scope="col" className="px-6 py-4">jefb_min_fin</th>
                <th scope="col" className="px-6 py-4">jefb_prox_dia</th>
                <th scope="col" className="px-6 py-4">jefb_prox_mes</th>
                <th scope="col" className="px-6 py-4">jefb_prox_anio</th>
                <th scope="col" className="px-6 py-4">jefb_prox_hor</th>
                <th scope="col" className="px-6 py-4">jefb_prox_min</th>
                <th scope="col" className="px-6 py-4">jefb_resvis</th>
                <th scope="col" className="px-6 py-4">jefb_resvis_o</th>
                <th scope="col" className="px-6 py-4">jefb_resvis_a</th>
                <th scope="col" className="px-6 py-4">jefb_resvis_a_o</th>
                <th scope="col" className="px-6 py-4">jefb_resvis_b</th>
                <th scope="col" className="px-6 py-4">jefb_resvis_b_o</th>
                <th scope="col" className="px-6 py-4">jefb_resvis_c</th>
                <th scope="col" className="px-6 py-4">jefb_resvis_c_o</th>
                <th scope="col" className="px-6 py-4">auto</th>
                <th scope="col" className="px-6 py-4">home_state</th>
                <th scope="col" className="px-6 py-4">feccre_srv</th>
                <th scope="col" className="px-6 py-4">fecup_srv</th>
                <th scope="col" className="px-6 py-4">usucre</th>
                <th scope="col" className="px-6 py-4">feccre</th>
                <th scope="col" className="px-6 py-4">usureg</th>
                <th scope="col" className="px-6 py-4">fecreg</th>
                <th scope="col" className="px-6 py-4">fecenv</th>
          
                </tr>
              </thead>
              <tbody>
                {serachdata0103.length > 1
                  ? filterresult.map((datasurvey0103, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.visit_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_visit} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_visit_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_visit_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_fec_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_fec_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_fec_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_fec_dia_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_fec_mes_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_fec_anio_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_hor_ini} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_min_ini} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_hor_fin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_min_fin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_prox_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_prox_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_prox_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_prox_hor} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_prox_min} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_resvis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_resvis_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_resvis_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_resvis_a_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_resvis_b} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_resvis_b_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_resvis_c} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.cen_resvis_c_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.nro_total_per} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.datos_per_nom} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.datos_per_ap} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.datos_per_am} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.celular} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.no_brindo} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.gps_lat} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.gps_lon} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.gps_alt} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_fec_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_fec_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_fec_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_fec_dia_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_fec_mes_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_fec_anio_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_hor_ini} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_min_ini} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_hor_fin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_min_fin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_prox_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_prox_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_prox_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_prox_hor} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_prox_min} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_resvis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_resvis_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_resvis_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_resvis_a_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_resvis_b} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_resvis_b_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_resvis_c} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.jefb_resvis_c_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.auto} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecenv} </td>
                   
                      </tr>
                    ))
                  : allcpvdata0103.map((getcon, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.visit_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_visit} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_visit_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_visit_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_fec_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_fec_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_fec_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_fec_dia_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_fec_mes_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_fec_anio_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_hor_ini} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_min_ini} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_hor_fin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_min_fin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_prox_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_prox_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_prox_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_prox_hor} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_prox_min} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_resvis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_resvis_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_resvis_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_resvis_a_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_resvis_b} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_resvis_b_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_resvis_c} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.cen_resvis_c_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.nro_total_per} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.datos_per_nom} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.datos_per_ap} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.datos_per_am} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.celular} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.no_brindo} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.gps_lat} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.gps_lon} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.gps_alt} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_fec_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_fec_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_fec_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_fec_dia_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_fec_mes_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_fec_anio_ter} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_hor_ini} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_min_ini} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_hor_fin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_min_fin} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_prox_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_prox_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_prox_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_prox_hor} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_prox_min} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_resvis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_resvis_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_resvis_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_resvis_a_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_resvis_b} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_resvis_b_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_resvis_c} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.jefb_resvis_c_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.auto} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecenv} </td>
                       
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
  
  );
}


///

const Search_personas = ({ auth, bID }) => {

  const [allcpvdata0103, setAllcpvdata0103] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachdata0103, setSearchcpvdata0103] = useState("");

  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcpvdata0103(search);

    if (search !== "") {
      const filterdata = allcpvdata0103.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcpvdata0103);
    }
  };

  useEffect(() => {
    const getsurvey = async () => {
      try {
        const getres = await fetch('https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev/list0103pers', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth?.accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        const setdatasurvey = await getres.json();
        setAllcpvdata0103(setdatasurvey);
        setFilterresult(setdatasurvey);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getsurvey();
  }, [bID]); // El useEffect ahora depende de bID

  return ( 
    <>
        <div className="flex flex-col">
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />   
        <button className="bg-neutral-700 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded-full">Personas</button>
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" onChange={(e) => {handlesearch(e);}} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Texto a Buscar..." />
        
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 

            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white " >
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                <th scope="col" className="px-6 py-4">id</th>
                <th scope="col" className="px-6 py-4">hogar_id</th>
                <th scope="col" className="px-6 py-4">seccion</th>
                <th scope="col" className="px-6 py-4">per_nro</th>
                <th scope="col" className="px-6 py-4">per_ord</th>
                <th scope="col" className="px-6 py-4">idkey_pers</th>
                <th scope="col" className="px-6 py-4">idkey_pers1</th>
                <th scope="col" className="px-6 py-4">idkey_pers2</th>
                <th scope="col" className="px-6 py-4">idkey_pers3</th>
                <th scope="col" className="px-6 py-4">s4_p2_a</th>
                <th scope="col" className="px-6 py-4">s4_p2_b1</th>
                <th scope="col" className="px-6 py-4">s4_p2_b2</th>
                <th scope="col" className="px-6 py-4">s4_p2_c</th>
                <th scope="col" className="px-6 py-4">s4_p2_d</th>
                <th scope="col" className="px-6 py-4">s4_p2_e</th>
                <th scope="col" className="px-6 py-4">result_pers</th>
                <th scope="col" className="px-6 py-4">home_state</th>
                <th scope="col" className="px-6 py-4">feccre_srv</th>
                <th scope="col" className="px-6 py-4">fecup_srv</th>
                <th scope="col" className="px-6 py-4">usucre</th>
                <th scope="col" className="px-6 py-4">feccre</th>
                <th scope="col" className="px-6 py-4">usureg</th>
                <th scope="col" className="px-6 py-4">fecreg</th>
                <th scope="col" className="px-6 py-4">fecenv</th>
                </tr>
              </thead>
              <tbody>
                {serachdata0103.length > 1
                  ? filterresult.map((datasurvey0103, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.seccion} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.per_nro} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.per_ord} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_pers} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_pers1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_pers2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_pers3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p2_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p2_b1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p2_b2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p2_c} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p2_d} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p2_e} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.result_pers} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecenv} </td>
                     
                      </tr>
                    ))
                  : allcpvdata0103.map((getcon, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.seccion} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.per_nro} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.per_ord} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_pers} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_pers1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_pers2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_pers3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p2_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p2_b1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p2_b2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p2_c} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p2_d} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p2_e} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.result_pers} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecenv} </td>                   
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
  
  );
}

///

const Search_poblacion = ({ auth, bID }) => {

  const [allcpvdata0103, setAllcpvdata0103] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachdata0103, setSearchcpvdata0103] = useState("");

  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcpvdata0103(search);

    if (search !== "") {
      const filterdata = allcpvdata0103.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcpvdata0103);
    }
  };

  useEffect(() => {
    const getsurvey = async () => {
      try {
        const getres = await fetch('https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev/list0103pob', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth?.accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        const setdatasurvey = await getres.json();
        setAllcpvdata0103(setdatasurvey);
        setFilterresult(setdatasurvey);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getsurvey();
  }, [bID]); // El useEffect ahora depende de bID

  return ( 
    <>
        <div className="flex flex-col">
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />   
        <button className="bg-neutral-700 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded-full">Poblacion</button>
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" onChange={(e) => {handlesearch(e);}} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Texto a Buscar..." />
        
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 

            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white " >
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                <th scope="col" className="px-6 py-4">id</th>
                <th scope="col" className="px-6 py-4">hogar_id</th>
                <th scope="col" className="px-6 py-4">seccion</th>
                <th scope="col" className="px-6 py-4">s5_per_nro</th>
                <th scope="col" className="px-6 py-4">idkey_pobla</th>
                <th scope="col" className="px-6 py-4">idkey_pobla1</th>
                <th scope="col" className="px-6 py-4">idkey_pobla2</th>
                <th scope="col" className="px-6 py-4">idkey_pobla3</th>
                <th scope="col" className="px-6 py-4">s5_nom</th>
                <th scope="col" className="px-6 py-4">s5_ap</th>
                <th scope="col" className="px-6 py-4">s5_am</th>
                <th scope="col" className="px-6 py-4">s5_informante</th>
                <th scope="col" className="px-6 py-4">s5_p1</th>
                <th scope="col" className="px-6 py-4">s5_p2</th>
                <th scope="col" className="px-6 py-4">s5_p3</th>
                <th scope="col" className="px-6 py-4">s5_p4_dia</th>
                <th scope="col" className="px-6 py-4">s5_p4_mes</th>
                <th scope="col" className="px-6 py-4">s5_p4_anio</th>
                <th scope="col" className="px-6 py-4">s5_p5</th>
                <th scope="col" className="px-6 py-4">s5_p5_dis</th>
                <th scope="col" className="px-6 py-4">s5_p5_dis_cod</th>
                <th scope="col" className="px-6 py-4">s5_p5_prov</th>
                <th scope="col" className="px-6 py-4">s5_p5_prov_cod</th>
                <th scope="col" className="px-6 py-4">s5_p5_dep</th>
                <th scope="col" className="px-6 py-4">s5_p5_dep_cod</th>
                <th scope="col" className="px-6 py-4">s5_p5_pais</th>
                <th scope="col" className="px-6 py-4">s5_p5_pais_cod</th>
                <th scope="col" className="px-6 py-4">s5_p5_anio</th>
                <th scope="col" className="px-6 py-4">s5_p6</th>
                <th scope="col" className="px-6 py-4">s5_p6_dis</th>
                <th scope="col" className="px-6 py-4">s5_p6_dis_cod</th>
                <th scope="col" className="px-6 py-4">s5_p6_prov</th>
                <th scope="col" className="px-6 py-4">s5_p6_prov_cod</th>
                <th scope="col" className="px-6 py-4">s5_p6_dep</th>
                <th scope="col" className="px-6 py-4">s5_p6_dep_cod</th>
                <th scope="col" className="px-6 py-4">s5_p6_pais</th>
                <th scope="col" className="px-6 py-4">s5_p6_pais_cod</th>
                <th scope="col" className="px-6 py-4">s5_p6_anio</th>
                <th scope="col" className="px-6 py-4">s5_p7_1</th>
                <th scope="col" className="px-6 py-4">s5_p7_2</th>
                <th scope="col" className="px-6 py-4">s5_p7_3</th>
                <th scope="col" className="px-6 py-4">s5_p7_4</th>
                <th scope="col" className="px-6 py-4">s5_p7_5</th>
                <th scope="col" className="px-6 py-4">s5_p7_6</th>
                <th scope="col" className="px-6 py-4">s5_p8_1</th>
                <th scope="col" className="px-6 py-4">s5_p8_2</th>
                <th scope="col" className="px-6 py-4">s5_p8_3</th>
                <th scope="col" className="px-6 py-4">s5_p8_4</th>
                <th scope="col" className="px-6 py-4">s5_p8_5</th>
                <th scope="col" className="px-6 py-4">s5_p8_6</th>
                <th scope="col" className="px-6 py-4">s5_p8_7</th>
                <th scope="col" className="px-6 py-4">s5_p9_dni</th>
                <th scope="col" className="px-6 py-4">s5_p9</th>
                <th scope="col" className="px-6 py-4">s5_p9_2_ce</th>
                <th scope="col" className="px-6 py-4">s5_p9_2_n</th>
                <th scope="col" className="px-6 py-4">s5_p10</th>
                <th scope="col" className="px-6 py-4">s5_p10_3_o</th>
                <th scope="col" className="px-6 py-4">s5_p10_3_o_cod</th>
                <th scope="col" className="px-6 py-4">s5_p10_4_o</th>
                <th scope="col" className="px-6 py-4">s5_p10_4_o_cod</th>
                <th scope="col" className="px-6 py-4">s5_p10_8_o</th>
                <th scope="col" className="px-6 py-4">s5_p10_8_o_cod</th>
                <th scope="col" className="px-6 py-4">s5_p10_8_n</th>
                <th scope="col" className="px-6 py-4">s5_p11_1</th>
                <th scope="col" className="px-6 py-4">s5_p11_2</th>
                <th scope="col" className="px-6 py-4">s5_p11_3</th>
                <th scope="col" className="px-6 py-4">s5_p11_4</th>
                <th scope="col" className="px-6 py-4">s5_p11_5</th>
                <th scope="col" className="px-6 py-4">s5_p11_6</th>
                <th scope="col" className="px-6 py-4">s5_p11_7</th>
                <th scope="col" className="px-6 py-4">s5_p11_8</th>
                <th scope="col" className="px-6 py-4">s5_p11_9</th>
                <th scope="col" className="px-6 py-4">s5_p11_10</th>
                <th scope="col" className="px-6 py-4">s5_p11_6_1_o</th>
                <th scope="col" className="px-6 py-4">s5_p11_6_1_o_cod</th>
                <th scope="col" className="px-6 py-4">s5_p11_6_2_o</th>
                <th scope="col" className="px-6 py-4">s5_p11_6_2_o_cod</th>
                <th scope="col" className="px-6 py-4">s5_p11_6_3_o</th>
                <th scope="col" className="px-6 py-4">s5_p11_6_3_o_cod</th>
                <th scope="col" className="px-6 py-4">s5_p12</th>
                <th scope="col" className="px-6 py-4">s5_p13</th>
                <th scope="col" className="px-6 py-4">s5_p13_dis</th>
                <th scope="col" className="px-6 py-4">s5_p13_dis_cod</th>
                <th scope="col" className="px-6 py-4">s5_p13_prov</th>
                <th scope="col" className="px-6 py-4">s5_p13_prov_cod</th>
                <th scope="col" className="px-6 py-4">s5_p13_dep</th>
                <th scope="col" className="px-6 py-4">s5_p13_prov_dep</th>
                <th scope="col" className="px-6 py-4">s5_p13_pais</th>
                <th scope="col" className="px-6 py-4">s5_p13_pais_cod</th>
                <th scope="col" className="px-6 py-4">s5_p14</th>
                <th scope="col" className="px-6 py-4">s5_p14_grado</th>
                <th scope="col" className="px-6 py-4">s5_p14_anio</th>
                <th scope="col" className="px-6 py-4">s5_p15</th>
                <th scope="col" className="px-6 py-4">s5_p16_1</th>
                <th scope="col" className="px-6 py-4">s5_p16_1_1</th>
                <th scope="col" className="px-6 py-4">s5_p16_2</th>
                <th scope="col" className="px-6 py-4">s5_p16_2_1</th>
                <th scope="col" className="px-6 py-4">s5_p16_3</th>
                <th scope="col" className="px-6 py-4">s5_p16_3_1</th>
                <th scope="col" className="px-6 py-4">s5_p16_4</th>
                <th scope="col" className="px-6 py-4">s5_p16_4_1</th>
                <th scope="col" className="px-6 py-4">s5_p17</th>
                <th scope="col" className="px-6 py-4">s5_p18</th>
                <th scope="col" className="px-6 py-4">s5_p19</th>
                <th scope="col" className="px-6 py-4">s5_p19_o</th>
                <th scope="col" className="px-6 py-4">s5_p20</th>
                <th scope="col" className="px-6 py-4">s5_p20_cod</th>
                <th scope="col" className="px-6 py-4">s5_p21</th>
                <th scope="col" className="px-6 py-4">s5_p21_cod</th>
                <th scope="col" className="px-6 py-4">s5_p22</th>
                <th scope="col" className="px-6 py-4">s5_p22_o</th>
                <th scope="col" className="px-6 py-4">s5_p23</th>
                <th scope="col" className="px-6 py-4">s5_p24</th>
                <th scope="col" className="px-6 py-4">s5_p24_dis</th>
                <th scope="col" className="px-6 py-4">s5_p24_dis_cod</th>
                <th scope="col" className="px-6 py-4">s5_p24_prov</th>
                <th scope="col" className="px-6 py-4">s5_p24_prov_cod</th>
                <th scope="col" className="px-6 py-4">s5_p24_dep</th>
                <th scope="col" className="px-6 py-4">s5_p24_dep_cod</th>
                <th scope="col" className="px-6 py-4">s5_p24_pais</th>
                <th scope="col" className="px-6 py-4">s5_p24_pais_cod</th>
                <th scope="col" className="px-6 py-4">s5_p25_total</th>
                <th scope="col" className="px-6 py-4">s5_p25_h</th>
                <th scope="col" className="px-6 py-4">s5_p25_m</th>
                <th scope="col" className="px-6 py-4">s5_p25_n</th>
                <th scope="col" className="px-6 py-4">s5_p26_total</th>
                <th scope="col" className="px-6 py-4">s5_p26_h</th>
                <th scope="col" className="px-6 py-4">s5_p26_m</th>
                <th scope="col" className="px-6 py-4">s5_p26_n</th>
                <th scope="col" className="px-6 py-4">s5_p27</th>
                <th scope="col" className="px-6 py-4">s5_p28_mes</th>
                <th scope="col" className="px-6 py-4">s5_p28_anio</th>
                <th scope="col" className="px-6 py-4">s5_p29</th>
                <th scope="col" className="px-6 py-4">obs_sec5</th>
                <th scope="col" className="px-6 py-4">result_pers</th>
                <th scope="col" className="px-6 py-4">home_state</th>
                <th scope="col" className="px-6 py-4">feccre_srv</th>
                <th scope="col" className="px-6 py-4">fecup_srv</th>
                <th scope="col" className="px-6 py-4">usucre</th>
                <th scope="col" className="px-6 py-4">feccre</th>
                <th scope="col" className="px-6 py-4">usureg</th>
                <th scope="col" className="px-6 py-4">fecreg</th>
                <th scope="col" className="px-6 py-4">fecenv</th>

                </tr>
              </thead>
              <tbody>
                {serachdata0103.length > 1
                  ? filterresult.map((datasurvey0103, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.seccion} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_per_nro} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_pobla} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_pobla1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_pobla2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_pobla3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_nom} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_ap} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_am} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_informante} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p4_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p4_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p4_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_dis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_dis_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_prov} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_prov_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_dep_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p5_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_dis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_dis_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_prov} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_prov_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_dep_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p6_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p7_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p7_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p7_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p7_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p7_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p7_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p8_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p8_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p8_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p8_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p8_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p8_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p8_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p9_dni} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p9_2_ce} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p9_2_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p10} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p10_3_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p10_3_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p10_4_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p10_4_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p10_8_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p10_8_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p10_8_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_10} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_6_1_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_6_1_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_6_2_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_6_2_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_6_3_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p11_6_3_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p12} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13_dis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13_dis_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13_prov} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13_prov_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13_prov_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p13_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p14} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p14_grado} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p14_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p15} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p16_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p16_1_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p16_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p16_2_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p16_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p16_3_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p16_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p16_4_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p17} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p18} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p19} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p19_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p20} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p20_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p21} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p21_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p22} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p22_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p23} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24_dis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24_dis_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24_prov} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24_prov_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24_dep_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p24_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p25_total} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p25_h} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p25_m} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p25_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p26_total} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p26_h} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p26_m} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p26_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p27} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p28_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p28_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s5_p29} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.obs_sec5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.result_pers} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecenv} </td>
                     
                      </tr>
                    ))
                  : allcpvdata0103.map((getcon, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.seccion} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_per_nro} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_pobla} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_pobla1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_pobla2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_pobla3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_nom} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_ap} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_am} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_informante} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p4_dia} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p4_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p4_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_dis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_dis_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_prov} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_prov_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_dep_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p5_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_dis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_dis_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_prov} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_prov_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_dep_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p6_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p7_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p7_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p7_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p7_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p7_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p7_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p8_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p8_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p8_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p8_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p8_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p8_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p8_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p9_dni} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p9_2_ce} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p9_2_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p10} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p10_3_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p10_3_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p10_4_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p10_4_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p10_8_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p10_8_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p10_8_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_10} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_6_1_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_6_1_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_6_2_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_6_2_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_6_3_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p11_6_3_o_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p12} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13_dis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13_dis_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13_prov} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13_prov_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13_prov_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p13_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p14} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p14_grado} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p14_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p15} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p16_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p16_1_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p16_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p16_2_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p16_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p16_3_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p16_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p16_4_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p17} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p18} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p19} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p19_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p20} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p20_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p21} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p21_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p22} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p22_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p23} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24_dis} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24_dis_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24_prov} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24_prov_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24_dep} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24_dep_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p24_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p25_total} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p25_h} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p25_m} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p25_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p26_total} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p26_h} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p26_m} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p26_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p27} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p28_mes} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p28_anio} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s5_p29} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.obs_sec5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.result_pers} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecenv} </td>
                 
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
  
  );
}

///

const Search_sec23 = ({ auth, bID }) => {

  const [allcpvdata0103, setAllcpvdata0103] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachdata0103, setSearchcpvdata0103] = useState("");

  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcpvdata0103(search);

    if (search !== "") {
      const filterdata = allcpvdata0103.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcpvdata0103);
    }
  };

  useEffect(() => {
    const getsurvey = async () => {
      try {
        const getres = await fetch('https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev/list0103sec23', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth?.accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        const setdatasurvey = await getres.json();
        setAllcpvdata0103(setdatasurvey);
        setFilterresult(setdatasurvey);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getsurvey();
  }, [bID]); // El useEffect ahora depende de bID

  return ( 
    <>
        <div className="flex flex-col">
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />   
        <button className="bg-neutral-700 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded-full">Seccion II - III</button>
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" onChange={(e) => {handlesearch(e);}} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Texto a Buscar..." />
        
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 

            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white " >
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                <th scope="col" className="px-6 py-4">id</th>
                <th scope="col" className="px-6 py-4">hogar_id</th>
                <th scope="col" className="px-6 py-4">idkey_sec23</th>
                <th scope="col" className="px-6 py-4">idkey_sec23_1</th>
                <th scope="col" className="px-6 py-4">s2_p1</th>
                <th scope="col" className="px-6 py-4">s2_p1_o</th>
                <th scope="col" className="px-6 py-4">s2_p2</th>
                <th scope="col" className="px-6 py-4">s2_p2_o</th>
                <th scope="col" className="px-6 py-4">s2_p3</th>
                <th scope="col" className="px-6 py-4">s2_p3_o</th>
                <th scope="col" className="px-6 py-4">s2_p4</th>
                <th scope="col" className="px-6 py-4">s2_p5</th>
                <th scope="col" className="px-6 py-4">s2_p5_o</th>
                <th scope="col" className="px-6 py-4">s2_p5_1_1</th>
                <th scope="col" className="px-6 py-4">s2_p5_1_2</th>
                <th scope="col" className="px-6 py-4">s2_p6_hora</th>
                <th scope="col" className="px-6 py-4">s2_p6_min</th>
                <th scope="col" className="px-6 py-4">s2_p6_n</th>
                <th scope="col" className="px-6 py-4">s2_p7</th>
                <th scope="col" className="px-6 py-4">s2_p7_1</th>
                <th scope="col" className="px-6 py-4">s2_p7_2</th>
                <th scope="col" className="px-6 py-4">s2_p7_3</th>
                <th scope="col" className="px-6 py-4">s2_p8</th>
                <th scope="col" className="px-6 py-4">s2_p8_o</th>
                <th scope="col" className="px-6 py-4">s2_p9</th>
                <th scope="col" className="px-6 py-4">s2_p9_o</th>
                <th scope="col" className="px-6 py-4">s3_p1</th>
                <th scope="col" className="px-6 py-4">s3_p1_o</th>
                <th scope="col" className="px-6 py-4">s3_p2</th>
                <th scope="col" className="px-6 py-4">s3_p3_1</th>
                <th scope="col" className="px-6 py-4">s3_p3_2</th>
                <th scope="col" className="px-6 py-4">s3_p3_3</th>
                <th scope="col" className="px-6 py-4">s3_p3_4</th>
                <th scope="col" className="px-6 py-4">s3_p3_5</th>
                <th scope="col" className="px-6 py-4">s3_p3_6</th>
                <th scope="col" className="px-6 py-4">s3_p3_7</th>
                <th scope="col" className="px-6 py-4">s3_p3_8</th>
                <th scope="col" className="px-6 py-4">s3_p4_1</th>
                <th scope="col" className="px-6 py-4">s3_p4_2</th>
                <th scope="col" className="px-6 py-4">s3_p4_3</th>
                <th scope="col" className="px-6 py-4">s3_p4_4</th>
                <th scope="col" className="px-6 py-4">s3_p4_5</th>
                <th scope="col" className="px-6 py-4">s3_p4_6</th>
                <th scope="col" className="px-6 py-4">s3_p4_7</th>
                <th scope="col" className="px-6 py-4">s3_p4_8</th>
                <th scope="col" className="px-6 py-4">s3_p4_9</th>
                <th scope="col" className="px-6 py-4">s3_p4_10</th>
                <th scope="col" className="px-6 py-4">s3_p4_11</th>
                <th scope="col" className="px-6 py-4">s3_p4_12</th>
                <th scope="col" className="px-6 py-4">s3_p4_13</th>
                <th scope="col" className="px-6 py-4">s3_p4_14</th>
                <th scope="col" className="px-6 py-4">s3_p4_15</th>
                <th scope="col" className="px-6 py-4">s3_p4_16</th>
                <th scope="col" className="px-6 py-4">s3_p4_17</th>
                <th scope="col" className="px-6 py-4">s3_p4_18</th>
                <th scope="col" className="px-6 py-4">s3_p5_1</th>
                <th scope="col" className="px-6 py-4">s3_p5_2</th>
                <th scope="col" className="px-6 py-4">s3_p5_3</th>
                <th scope="col" className="px-6 py-4">s3_p5_4</th>
                <th scope="col" className="px-6 py-4">s3_p5_5</th>
                <th scope="col" className="px-6 py-4">s3_p5_6</th>
                <th scope="col" className="px-6 py-4">s3_p5_7</th>
                <th scope="col" className="px-6 py-4">s3_p5_8</th>
                <th scope="col" className="px-6 py-4">s3_p5_9</th>
                <th scope="col" className="px-6 py-4">s3_p5_9_o</th>
                <th scope="col" className="px-6 py-4">s3_p6</th>
                <th scope="col" className="px-6 py-4">s3_p6_1</th>
                <th scope="col" className="px-6 py-4">home_state</th>
                <th scope="col" className="px-6 py-4">feccre_srv</th>
                <th scope="col" className="px-6 py-4">fecup_srv</th>
                <th scope="col" className="px-6 py-4">usucre</th>
                <th scope="col" className="px-6 py-4">feccre</th>
                <th scope="col" className="px-6 py-4">usureg</th>
                <th scope="col" className="px-6 py-4">fecreg</th>
                <th scope="col" className="px-6 py-4">fecenv</th>

                </tr>
              </thead>
              <tbody>
                {serachdata0103.length > 1
                  ? filterresult.map((datasurvey0103, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_sec23} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_sec23_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p1_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p2_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p3_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p5_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p5_1_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p5_1_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p6_hora} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p6_min} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p6_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p7_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p7_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p7_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p8_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s2_p9_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p1_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p3_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p3_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p3_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p3_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p3_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p3_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p3_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p3_8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_10} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_11} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_12} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_13} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_14} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_15} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_16} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_17} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p4_18} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p5_9_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecenv} </td>
                     
                      </tr>
                    ))
                  : allcpvdata0103.map((getcon, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_sec23} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_sec23_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p1_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p2_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p3_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p5_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p5_1_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p5_1_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p6_hora} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p6_min} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p6_n} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p7_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p7_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p7_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p8_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s2_p9_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p1_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p3_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p3_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p3_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p3_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p3_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p3_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p3_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p3_8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_10} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_11} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_12} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_13} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_14} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_15} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_16} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_17} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p4_18} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_5} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_7} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_8} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_9} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p5_9_o} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecenv} </td>
                 
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
  
  );
}

///////

const Search_sec301 = ({ auth, bID }) => {

  const [allcpvdata0103, setAllcpvdata0103] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachdata0103, setSearchcpvdata0103] = useState("");

  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcpvdata0103(search);

    if (search !== "") {
      const filterdata = allcpvdata0103.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcpvdata0103);
    }
  };

  useEffect(() => {
    const getsurvey = async () => {
      try {
        const getres = await fetch('https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev/list0103sec301', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth?.accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        const setdatasurvey = await getres.json();
        setAllcpvdata0103(setdatasurvey);
        setFilterresult(setdatasurvey);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getsurvey();
  }, [bID]); // El useEffect ahora depende de bID

  return ( 
    <>
        <div className="flex flex-col">
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />   
        <button className="bg-neutral-700 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded-full">Seccion III-01</button>
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" onChange={(e) => {handlesearch(e);}} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Texto a Buscar..." />
        
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 

            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white " >
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                <th scope="col" className="px-6 py-4">id</th>
                <th scope="col" className="px-6 py-4">hogar_id</th>
                <th scope="col" className="px-6 py-4">s3_p6_nro</th>
                <th scope="col" className="px-6 py-4">idkey_sec31</th>
                <th scope="col" className="px-6 py-4">idkey_sec31_1</th>
                <th scope="col" className="px-6 py-4">idkey_sec31_2</th>
                <th scope="col" className="px-6 py-4">s3_p6_a</th>
                <th scope="col" className="px-6 py-4">s3_p6_b1</th>
                <th scope="col" className="px-6 py-4">s3_p6_b2</th>
                <th scope="col" className="px-6 py-4">s3_p6_c</th>
                <th scope="col" className="px-6 py-4">s3_p6_d</th>
                <th scope="col" className="px-6 py-4">s3_p6_e</th>
                <th scope="col" className="px-6 py-4">s3_p6_pais</th>
                <th scope="col" className="px-6 py-4">s3_p6_pais_cod</th>
                <th scope="col" className="px-6 py-4">home_state</th>
                <th scope="col" className="px-6 py-4">feccre_srv</th>
                <th scope="col" className="px-6 py-4">fecup_srv</th>
                <th scope="col" className="px-6 py-4">usucre</th>
                <th scope="col" className="px-6 py-4">feccre</th>
                <th scope="col" className="px-6 py-4">usureg</th>
                <th scope="col" className="px-6 py-4">fecreg</th>
                <th scope="col" className="px-6 py-4">fecenv</th>

                </tr>
              </thead>
              <tbody>
                {serachdata0103.length > 1
                  ? filterresult.map((datasurvey0103, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_nro} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_sec31} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_sec31_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_sec31_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_b1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_b2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_c} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_d} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_e} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s3_p6_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecenv} </td>
                     
                      </tr>
                    ))
                  : allcpvdata0103.map((getcon, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_nro} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_sec31} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_sec31_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_sec31_2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_a} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_b1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_b2} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_c} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_d} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_e} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_pais} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s3_p6_pais_cod} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecenv} </td>
                  
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
  
  );
}

///////

const Search_sec4 = ({ auth, bID }) => {

  const [allcpvdata0103, setAllcpvdata0103] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachdata0103, setSearchcpvdata0103] = useState("");

  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcpvdata0103(search);

    if (search !== "") {
      const filterdata = allcpvdata0103.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcpvdata0103);
    }
  };

  useEffect(() => {
    const getsurvey = async () => {
      try {
        const getres = await fetch('https://cnegt1678c.execute-api.us-west-2.amazonaws.com/dev/list0103sec4', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth?.accessToken}`,
            'Content-Type': 'application/json',
          }
        });
        const setdatasurvey = await getres.json();
        setAllcpvdata0103(setdatasurvey);
        setFilterresult(setdatasurvey);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getsurvey();
  }, [bID]); // El useEffect ahora depende de bID

  return ( 
    <>
        <div className="flex flex-col">
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />   
        <button className="bg-neutral-700 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded-full">Seccion IV</button>
        <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" onChange={(e) => {handlesearch(e);}} class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Texto a Buscar..." />
        
    </div>
    <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" /> 

            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white " >
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                <th scope="col" className="px-6 py-4">id</th>
                <th scope="col" className="px-6 py-4">hogar_id</th>
                <th scope="col" className="px-6 py-4">idkey_sec4</th>
                <th scope="col" className="px-6 py-4">idkey_sec4_1</th>
                <th scope="col" className="px-6 py-4">s4_p1_total</th>
                <th scope="col" className="px-6 py-4">s4_p1_h</th>
                <th scope="col" className="px-6 py-4">s4_p1_m</th>
                <th scope="col" className="px-6 py-4">s4_p3</th>
                <th scope="col" className="px-6 py-4">s4_p4</th>
                <th scope="col" className="px-6 py-4">obs_sec4</th>
                <th scope="col" className="px-6 py-4">home_state</th>
                <th scope="col" className="px-6 py-4">feccre_srv</th>
                <th scope="col" className="px-6 py-4">fecup_srv</th>
                <th scope="col" className="px-6 py-4">usucre</th>
                <th scope="col" className="px-6 py-4">feccre</th>
                <th scope="col" className="px-6 py-4">usureg</th>
                <th scope="col" className="px-6 py-4">fecreg</th>
                <th scope="col" className="px-6 py-4">fecenv</th>

                </tr>
              </thead>
              <tbody>
                {serachdata0103.length > 1
                  ? filterresult.map((datasurvey0103, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_sec4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.idkey_sec4_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p1_total} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p1_h} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p1_m} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.s4_p4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.obs_sec4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {datasurvey0103.fecenv} </td>
                     
                      </tr>
                    ))
                  : allcpvdata0103.map((getcon, index) => (
                      <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800" key={index}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.hogar_id} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_sec4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.idkey_sec4_1} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p1_total} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p1_h} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p1_m} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p3} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.s4_p4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.obs_sec4} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.home_state} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecup_srv} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usucre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.feccre} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.usureg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecreg} </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {getcon.fecenv} </td>

                  
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
  
  );
}

///



export default Build;
