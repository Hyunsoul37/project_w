import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from './Selector.module.css';
import Button from '../ui/Button';

const foods = [
   { key: 0, value: '육류', label: '육류' },
   { key: 1, value: '해산물', label: '해산물' },
   { key: 2, value: '치즈', label: '치즈' }
]
const bodys = [
   { key: 0, value: '산뜻', label: '산뜻' },
   { key: 1, value: '묵직', label: '묵직' }
]
const sweets = [
   { key: 0, value: '달콤', label: '달콤' },
   { key: 1, value: '안달콤', label: '안달콤' }
]
const sours = [
   { key: 0, value: '있는', label: '있는' },
   { key: 1, value: '없는', label: '없는' }
]

const Selector = () => {
   const [food, setFood] = useState();
   const onFood = (e) => {
      setFood(e.target.value)
   }
   const [body, setBody] = useState();
   const onBody = (e) => {
      setBody(e.target.value)
   }
   const [sweet, setSweet] = useState();
   const onSweet = (e) => {
      setSweet(e.target.value)
   }
   const [sour, setSour] = useState();
   const onSour = (e) => {
      setSour(e.target.value)
   }
   const router = useRouter();
   const btnSearch = () => {
      // const list = [food, body, sweet, sour];
      router.push({ pathname: "/product", query: { food, body, sweet, sour } })
   }

   return (
      <div>
         <div className={styled.selector_wrap}>
            <div>
               <span className={styled.text}>나는</span>
               <select onChange={onFood} className={styled.select}>
                  <option value="default">안주선택</option>
                  {foods.map((food) => {
                     return <option key={food.key} value={food.value}>
                        {food.label}
                     </option>
                  })}
               </select>
               <span className={styled.text}>에 어울리는</span>
            </div>
            <div>
               <select onChange={onBody} className={styled.select}>
                  <option value="default">선택</option>
                  {bodys.map((body) => {
                     return <option key={body.key} value={body.value}>
                        {body.label}
                     </option>
                  })}
               </select>
               <span className={styled.text}>하고</span>
               <select onChange={onSweet} className={styled.select}>
                  <option value="default">선택</option>
                  {sweets.map((sweet) => {
                     return <option key={sweet.key} value={sweet.value}>
                        {sweet.label}
                     </option>
                  })}
               </select>
               <span className={styled.text}>하고 산미</span>
               <select onChange={onSour} className={styled.select}>
                  <option value="default">선택</option>
                  {sours.map((sour) => {
                     return <option key={sour.key} value={sour.value}>
                        {sour.label}
                     </option>
                  })}
               </select>
            </div>
            <div>
               <span className={styled.text}>와인이 필요해요</span>
            </div>
         </div>
         <div className={styled.btn_area}>
            <Button buttontext={'보러가기'} buttonColor={'main'} onClick={btnSearch} />
         </div>
      </div>
   );
}

export default Selector;