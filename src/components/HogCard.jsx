import { useState } from "react"

const HogCard = ({ hog }) => {

    const [specialty, setSpecialty ] = useState("")
    const [ weight, setWeight ] = useState("")
    const [ greased, setGreased ] = useState("")
    const [ highestmedalachieved, setHighestmedalachieved ] = useState("")

    const detailInfo = (
        <>
            <p style={{color:"red"}}>
                {specialty}
            </p>

            <p>
                {weight}
            </p>

            <p>
                {greased}
            </p>

            <p>
                {highestmedalachieved}
            </p>
        </>
        )

    const handleClick=() => {
        //console.log(hog["highest medal achieved"])
        setSpecialty(hog.specialty)
        setWeight(hog.weight)
        setGreased(hog.greased)
        setHighestmedalachieved(hog["highest medal achieved"])
    }

    return (
                <article className="" onClick={handleClick}>
                    <img src={hog.image} alt={hog.name}/>
                    <h3>{hog.name}</h3>
                    <h3>{detailInfo}</h3>
                </article>
    )
}

export default HogCard