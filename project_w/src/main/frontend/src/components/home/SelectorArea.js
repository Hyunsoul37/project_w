import Selector from "./Selector";
import SelectorSlider from "./SelectorSlider";

const SelectorArea = () => {
   return (
      <section>
         <div className="maxframe">
            <Selector />
         </div>
         <SelectorSlider />
      </section>
   );
};

export default SelectorArea;