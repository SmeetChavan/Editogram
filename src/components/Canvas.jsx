import { useEffect, useState } from "react"
import Draggable from 'react-draggable'
import { v4 } from 'uuid';

import {fonts , colors , sizes} from '../constants/'

const Canvas = () => {

    const [elements , setElements] = useState([]);
    const [selectedEle , setSelectedEle] = useState(null);

    const [text , setText] = useState("");

    useEffect(() => {

        const updateValues = () => {

            if(!selectedEle){
                return;
            }

            const newElements = [...elements];
            const index = newElements.findIndex((ele) => ele.id === selectedEle.id);

            if(index === -1){
                return;
            }

            newElements[index] = selectedEle;

            setElements(newElements);
        }

        updateValues();

    }, [selectedEle])

    const addEle = () => {

        const element = {
            id: v4(),
            text: "Sample text",
            font: "sans-serif",
            color: "black",
            size: 16
        }

        setElements([...elements , element]);
    }

    const handleSelect = (id) => {

        if(selectedEle){
            setSelectedEle(null);
            setText("");
            return;
        }

        const index = elements.findIndex((ele) => ele.id === id);
        if(index === -1){
            return;
        }

        setSelectedEle(elements[index]);
    }

    const handleFontChange = (e) => {
        setSelectedEle({...selectedEle , font: e.target.value});
    }

    const handleColorChange = (e) => {
        setSelectedEle({...selectedEle , color: e.target.value});
    }

    const handleSizeChange = (e) => {
        setSelectedEle({...selectedEle , size: e.target.value});
    }

    const handleEditText = () => {
        setSelectedEle({...selectedEle , text: text});
    }

    return (

        <section className='flex max-lg:flex-col justify-between gap-10'>

            <div className='relative w-3/5 max-lg:w-full min-h-screen bg-slate-300 sm:p-10 p-4 rounded-3xl shadow-xl'>

                {
                    elements && elements.map((ele) => (
                        <Draggable bounds="parent" key={ele.id} onMouseDown={() => handleSelect(ele.id)}>

                            <div
                                className={`inline-block p-3 m-2 rounded-xl cursor-pointer ${selectedEle && selectedEle == ele ? 'bg-blue-300' : 'bg-gray-400'}`}

                                style={{ fontSize: `${ele.size}px` , fontFamily: ele.font , color: ele.color}}
                            >

                                {ele.text}

                            </div>
                        </Draggable>
                    ))
                }


            </div>

            <div className='w-2/5 max-lg:w-full max-lg:gap-10 p-10 rounded-2xl bg-slate-100 shadow-xl flex flex-col justify-around'>

                <div className='flex justify-between items-center gap-10'>

                    <label
                        htmlFor="font"
                        className='sm:text-xl text-lg font-ubuntu font-semibold'
                    >
                        Font :
                    </label>

                    <select
                        name="Font"
                        id="font"
                        value={selectedEle ? selectedEle.font : ''}
                        onChange={(e) => handleFontChange(e)}
                        disabled={!selectedEle}
                        className={`${selectedEle ? 'bg-white' : 'bg-slate-100 cursor-not-allowed'} sm:w-3/5 w-1/2 p-2 rounded-xl focus:outline-none`}
                    >
                        <option value="">Select Font</option>

                        {
                            fonts.map((font) => (
                                <option 
                                    key={font}
                                    value={font}
                                >
                                    {font}
                                </option>
                            ))
                        }

                    </select>
                </div>

                <div className='flex justify-between items-center gap-10'>

                    <label
                        htmlFor="color"
                        className='sm:text-xl text-lg font-ubuntu font-semibold'
                    >
                        Color :
                    </label>

                    <select
                        name="Color"
                        id="color"
                        value={selectedEle ? selectedEle.color : ''}
                        onChange={(e) => handleColorChange(e)}
                        disabled={!selectedEle}
                        className={`${selectedEle ? 'bg-white' : 'bg-slate-100 cursor-not-allowed'} sm:w-3/5 w-1/2 p-2 rounded-xl focus:outline-none`}
                    >

                        <option value="">Select Color</option>

                        {
                            colors.map((color) => (
                                <option
                                    key={color}
                                    value={color}
                                >
                                    {color}
                                </option>
                            ))
                        }

                    </select>

                </div>

                <div className='flex justify-between items-center gap-10'>

                    <label
                        htmlFor="size"
                        className='sm:text-xl text-lg font-ubuntu font-semibold'
                    >
                        Size :
                    </label>

                    <select
                        name="Size"
                        id="size"
                        value={selectedEle ? selectedEle.size : ''}
                        onChange={(e) => handleSizeChange(e)}
                        disabled={!selectedEle}
                        className={`${selectedEle ? 'bg-white' : 'bg-slate-100 cursor-not-allowed'} sm:w-3/5 w-1/2 p-2 rounded-xl focus:outline-none`}
                    >

                        <option value="">Select Size</option>

                        {
                            sizes.map((size) => (
                                <option
                                    key={size}
                                    value={size}
                                    className=''
                                >
                                    {size}
                                </option>
                            ))
                        }

                    </select>

                </div>

                <div className={`flex max-sm:flex-col gap-2 sm:border-2 sm:border-slate-400 sm:p-4 p-2 sm:rounded-full ${selectedEle ? 'sm:bg-white' : 'bg-slate-100'}`}>

                    <input
                        type="text"
                        placeholder="Write new text"
                        disabled={!selectedEle}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className='flex-1 focus:outline-none font-ubuntu disabled:bg-slate-100 max-sm:border-2 max-sm:border-slate-400 max-sm:rounded-full max-sm:p-2'
                    />

                    <button
                        disabled={!selectedEle}
                        onClick={handleEditText}
                        className={`p-2 rounded-xl bg-slate-200 font-ubuntu shadow-lg ${selectedEle ? 'font-semibold' : 'text-slate-400 cursor-not-allowed'}`}
                    >

                        Edit Text
                    </button>

                </div>

                <button className='font-bold px-4 py-2 rounded-xl bg-blue-200 shadow-xl' onClick={addEle}>
                    Add text
                </button>
            </div>

        </section>
    )
}

export default Canvas