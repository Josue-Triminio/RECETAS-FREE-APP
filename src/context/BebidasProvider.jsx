import { useState,useEffect,createContext } from "react";
import axios from "axios";

const BebidasContext=createContext()

const BebidasProvider=({children})=>{
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(true)
    const consultarBebidas =async(datos)=>{
        try {
            const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria} `
            const {data}=await axios(url)
            setBebidas(data.drinks);
        } catch (error) {
            
        }
    }
    useEffect(() => {
     const obtenerReceta= async()=>{
        if (!bebidaId) return
        try {
            const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
            const {data}= await axios(url)
            setReceta(data.drinks[0])
        } catch (error) {
            
        }finally{
            setCargando(false)
        }
     }
     obtenerReceta()
    }, [bebidaId])
    

    const handleModalClick=()=>{
        setModal(!modal)
    }
    const handleBebidaId=(id)=>{
         setBebidaId(id)
    }
    const cerraModal=()=>{
        setModal(false)
    }

    
    return(
        <BebidasContext.Provider
            value={{
                consultarBebidas,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaId,
                receta,
                cargando,
                cerraModal


            }}
        
        >
            {children}
        </BebidasContext.Provider>
    )
}


export {
    BebidasProvider
}

export default BebidasContext;