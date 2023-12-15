import { useState } from "react"
import hogs from "../porkers_data";
import HogCard from "./HogCard";

const HogList = () => {

    // const [ hogsArr, setHogsArr ] = useState(hogs)
    //const [ filteredHogs, setFilteredHogs ] = useState(hogs)
    const [ greased, setGreased ] = useState(hogs)

    const eachHogCard = greased.map((eachHog, idx) => {
        return <HogCard hog = {eachHog}  key={idx}/>
    })

    // const handleChange = (e) => {
    //     const filteredInput = filteredHogs.filter(eachHog => {
    //         return eachHog.name.toLowerCase().includes(e.target.value.toLowerCase())
    //     })
    //     setFilteredHogs(filteredInput)
    // }

    const handleClick = () => {

        const greasedHogs = greased.filter((eachDog) => {
            return eachDog.greased === true 
        })
        console.log(greasedHogs)
        setGreased(greasedHogs)
    }

    console.log(greased)

    return (
        <>
            {/* <label> search hog : <input name="hogfilter" onChange={handleChange}/></label> */}

            <button onClick={handleClick}> greased </button>
           {eachHogCard}
        </>
    )
}

export default HogList