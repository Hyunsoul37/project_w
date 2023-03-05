import { Dispatch, SetStateAction, useState } from "react";

interface inputState{
    name:string;
    value:valuetype;
    list:valuetype[];
    setFilterState:Dispatch<SetStateAction<any>>;
}
type valuetype = string | number;

const FilterInput:React.FC<inputState>=(props)=>{
    const ChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.checked){
            props.setFilterState([...props.list,e.target.value]);
        }else{
          const removetype = props.list.filter((data)=> data !== e.target.value);
          props.setFilterState(removetype);
        }
      }
      return <input type="checkbox" checked={props.list.includes(props.value.toString())} name={props.name} value={props.value} onChange={(e)=>ChangeHandler(e)}/>
}
export default FilterInput;