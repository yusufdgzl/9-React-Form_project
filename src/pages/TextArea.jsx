import { useState } from "react"

export default function TextArea() {


    const [textarea, setTextarea] = useState("Hello my name is Yusuf, I'm learning React Forms")


    function handleChange(e) {
        setTextarea(e.target.value)
    }

    function handleDelete(){
        setTextarea([])
    }


    return (
        <>
            <div className="container">
                <h1>Textarea</h1>
                <div className="siteTextarea">
                    <div>
                        <textarea
                            className="textarea"
                            value={textarea}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <div >
                      
                        <button 
                        onClick={()=>handleDelete()}
                        className="allClearButton">Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}