const Selector = () => {
   return (
      <div>
         <div className="selector_area">
            <span>나는</span>
            <select>
               <option value={"육류"}>육류</option>
               <option value={"해산물"}>해산물</option>
               <option value={"치즈"}>치즈</option>
            </select>
            <span>에 어울리는</span>
            <select>
               <option value={"산뜻"}>산뜻</option>
               <option value={"묵직"}>묵직</option>
            </select>
            <span>하고</span>
            <select>
               <option value={"달달"}>달달</option>
               <option value={"안달달"}>안달달</option>
            </select>
            <span>하고 산미</span>
            <select>
               <option value={"있는"}>있는</option>
               <option value={"없는"}>없는</option>
            </select>
            <span>와인이 필요해요</span>
         </div>
         <div className="btn_area">
            <button>다른 조건 보기</button>
            <button>보러가기</button>
         </div>
      </div>
   );
}

export default Selector; 