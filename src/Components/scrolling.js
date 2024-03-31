import { useState } from "react"
const Scrolling=(props)=>{

    const dropdownChangeHandler=(event)=>{

        props.onChangeFilter(event.target.value)
        console.log(event.target.value)
    }
    return(
        <div >
            <div >
                <label>Choose Category</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='1'>ELECTRONICS</option>
                    <option value='2'>fOOD</option>
                    <option value='3'>cLOTHES</option>
                    <option value='4'>luxury</option>
                </select>
            </div>
        </div>
    )    
}
export default Scrolling

