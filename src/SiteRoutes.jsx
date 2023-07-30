import { Route, Routes } from "react-router-dom";
import SubmitForm from "./pages/SubmitForm";
import TextArea from "./pages/TextArea";
import Select from "./pages/Select";

export default function SiteRoutes(){

    return(
        <>
        <Routes>
            <Route path="/" element={<SubmitForm/>}/>
            <Route path="/textarea" element={<TextArea/>}/>
            <Route path="/select" element={<Select/>}/>
        </Routes>
        
        </>
    )
}