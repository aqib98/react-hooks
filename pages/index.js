import React, {useState} from 'react';



const InputElement = () => {

    const [inputText, setInputText] = useState('');
    const [historyList,setHistoryList] = useState([]);

    return <>
    <input 
    placeholder="Enter some text" 
    onChange = {(e) => {
        setInputText(e.target.value)
        setHistoryList([...historyList,e.target.value])
    }}
    />
    <br/>
    {inputText}
    <hr></hr>
    <br></br>
    <ul>
        {historyList.map(each=><div>{each}</div>)}
    </ul>
    </>
}

export default InputElement;