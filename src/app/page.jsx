import { css } from "../../styled-system/css";
import { center, flex } from "../../styled-system/patterns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <div className={css({bgColor:"bg",color:"text", h:"100%", fontFamily:"A P-OTF Bunkyu MidasiM Std"})}>

      <div className={flex({justifyContent:"space-around", alignItems:"flex-start", paddingTop:"4rem"})}>
        <div>
          <p>もりお　ゆうなの</p>
          <p className={(css({fontSize:"10rem"}))}>Port<br></br>Folio</p>
        </div>
        <img src="moon.svg" alt="" className={css({w:"35%"})}/>
      </div>

      <h2 className={center({m:"3rem",fontSize:"1.6rem",_after:{  }})}>About Me</h2>
      <div className={center({})}>
        <div className={flex({p:"2.5rem",fontSize:"1.2rem",borderRadius:"5px", bg:"rgba(255, 255, 255, 0.39)"})}>
          <div className={flex({flexDirection:"column", gap:"3rem", pr:"8rem", fontWeight:"900px"})}>
            <h3>Name</h3>
            <h3>Birthday</h3>
            <h3>Like</h3>
            <h3>Goals</h3>
          </div>
          <div className={flex({flexDirection:"column", gap:"3rem"})}>
            <p>森尾優菜</p>
            <p>2004/11.10</p>
            <p>ゲーム/ボカロ</p>
            <p>フロントエンドもバックエンドもできるように頑張っていきます</p>
          </div>
        </div>
      </div>

      <h2 className={center({m:"3rem",fontSize:"1.6rem",_after:{  }})}>Works</h2>
      <div>
        <img src="no-name.png" alt="" />
      </div>


    </div>
  )
}
