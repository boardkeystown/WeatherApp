import { useState} from "react";


const InputBox = () => {
    const [inputVal, setInputVal] = useState('');

    const handleInputChange = (event) => {
        event.persist()
        setInputVal(event.target.value);
        
    }
    //console.log(inputVal);

    return(
        <div>
            <input type="text" value={inputVal} onChange={handleInputChange} />
        </div>
    )
}
export default InputBox;
