import React from 'react';
import st from './Hero.module.css'
const Hero = () => {
  return (
    <div className={st.hero}>
      <div className={st.container + " container"}>
        <div className={st.content}>
          <h1 className={st.title}>
            <span className={st.stroke}>Shape </span>
            your ideal body
          </h1>
          <p className={st.desc}>
            In here we will help you to shape and build your ideal body and live up your life to fullest
          </p>
          <div className={st.btns}>
            <button className={"btn-reset " + st.btn}>Get started</button>
            <button className={"btn-reset " + st.btn + " " + st.btnStroke}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
