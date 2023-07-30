import { useState } from "react"
import MotorImages from "../components/MotorImages.json"
import MotorCard from "../components/MotorCard"

export default function Select() {


    const [motorcycleName, setMotorcycleName] = useState([])

    const [selectValue, setSelectValue] = useState(["All Motorcycles"])

    const [motorImg, setMotorImg] = useState([])


    function handleChange(e) {
        setMotorcycleName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSelectValue(motorcycleName)
        setMotorImg(MotorImages)
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="selectForm">
                <select onChange={handleChange} className="select">
                    <option value="All Motorcycles">All Motorcycles</option>
                    <option value="Mondial Drift">Mondial Drift</option>
                    <option value="Yamaha R1">Yamaha R1</option>
                    <option value="Honda CBR">Honda CBR</option>
                    <option value="Kawasaki Ninja">Kawasaki Ninja</option>
                </select>
                <button className="submitButton">Submit</button>
            </form>
            <div className="selectItem">


                {

                    motorImg.map((item, index) => {
                        if (item.name === selectValue)
                            return <MotorCard key={index} item={item}
                            />
                    })
                }

            </div>
        </>
    )
}