import styled from './Selector.module.css';

const Selector = () => {
   const foods = ['육류', '해산물', '치즈'];
   const foodList = foods.map((food) => (<option value={food}>{food}</option>));

   const bodys = ['산뜻', '묵직'];
   const bodylist = bodys.map((body) => (<option value={body}>{body}</option>));

   const sweets = ['달콤', '안달콤'];
   const sweetlist = sweets.map((sweet) => (<option value={sweet}>{sweet}</option>));

   const sours = ['있는', '없는'];
   const sourlist = sours.map((sour) => (<option value={sour}>{sour}</option>));

   return (
      <div>
         <div className={styled.selector_wrap}>
            <div>
               <span className={styled.text}>나는</span>
               <select className={styled.select}>
                  {foodList}
               </select>
               <span className={styled.text}>에 어울리는</span>
            </div>
            <div>
               <select className={styled.select}>
                  {bodylist}
               </select>
               <span className={styled.text}>하고</span>
               <select className={styled.select}>
                  {sweetlist}
               </select>
               <span className={styled.text}>하고 산미</span>
               <select className={styled.select}>
                  {sourlist}
               </select>
            </div>
            <div>
               <span className={styled.text}>와인이 필요해요</span>
            </div>
         </div>
         <div className="btn_area">
            <button>다른 조건 보기</button>
            <button>보러가기</button>
         </div>
      </div>
   );
}

export default Selector; 