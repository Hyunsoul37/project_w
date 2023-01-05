import React, {useEffect, useState} from 'react';
import Signupform from './components/Signupform';
import styled from'./App.module.css';


function App() {
//    const [time, setTime] = useState('');
//    const [data, setData] = useState('');
//    const [responsePostData, setResponsePostData] = useState('');

//      const gettime = async()=>{
//         try{
//             const res = await fetch("/api/time");
//             //const res = await fetch("/api/test");
//             if(!res.ok){
//                 throw new Error("Request failed!");
//             }
//             const resData = await res.json();
//             setTime(resData.time);
//             //setData(data.data);
//         }
//         catch(err){
//             console.log(err);
//         } 
//      }

//      const postData = async()=>{
//         try{
//             const res = await fetch("/api/test",{
//                 method:'POST',
//                 body:JSON.stringify({data : '이호현 귀요미 귀귀ㅜ기ㅜ기ㅜ기ㅜ귀요미'}),
//                 headers:{
                    
//                     "Content-Type": "application/json",
//                 }
//             });
//             const responseData = await res.json();
//             setResponsePostData(responseData.data);
//         }
//         catch(err){
//             console.log(err);
//         }
//      }

//      useEffect(() => {
//         gettime();
//         postData();
//     }, []);

    return (
        <div className={styled.App}>
            {/* <div>백엔드에서 가져온 getData : {time? time : data}</div>
            <div>백엔드에서 가져온 postData : {responsePostData? responsePostData: ""}</div>            */}
            <Signupform />
        </div>
        
    );
}

export default App;
