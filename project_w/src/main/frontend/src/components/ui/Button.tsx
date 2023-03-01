import styled from './Button.module.css'

interface buttonProps{
 buttontext: string;
 buttonColor :'main'| 'second';
 onClick?:()=>void;
 onSubmit?: (e:React.FormEvent)=>void | null;
}

const Button:React.FC<buttonProps>=(props)=>{
    return <button className={props.buttonColor==='main'? styled.main : styled.second} 
    onClick={props.onClick?props.onClick:undefined}
    onSubmit={props.onSubmit? props.onSubmit:undefined}
    >{props.buttontext}</button>
}
export default Button;