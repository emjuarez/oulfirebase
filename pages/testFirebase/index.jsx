import React, {useState, useEffect} from "react"
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function Test(){

    const [name, setName] = useState("")
    const [last_name, setLast_name] = useState("")
    const dbInstance = collection(db, "people");

    const handleChange = (e, name) => {
        switch(name){
            case "name":
                setName(e.target.value)
                break;
            case "last_name":
                setLast_name(e.target.value);
        }
    }

    const saveProfile = () => {
        addDoc(dbInstance,{
            name: name,
            lasName: last_name,
        })
    }

    useEffect(()=> {
        console.log("name", name)
        console.log("last_name", last_name)
    }, [name, last_name])

    return (
        <div>
            <input type="text" onChange={(e) => handleChange(e, "name")}/>
            <input type="text" onChange={(e) => handleChange(e, "last_name")}/>
            <button onClick={() => saveProfile()}>Añadir</button>
        </div>
    )
}

export default Test