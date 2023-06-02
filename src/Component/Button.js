import React from 'react'
import Base from '../Base/Base'

function Button() {
  return (
    <Base
    title={"Click the button"}
    description={"Showing the Buttons"}
    >
    <div>
      <h1>Button</h1>
      <input
        placeholder='Enter the Id of Student'
        type='number'
        />
        <div class="main-container">
        <div id="top-section-main">
            <div id="top-section-content">
                <h1>Avengers Assesmble It's a War</h1>
                <p>"Captain America-Iron Man-Hulk" The End Game</p>
                
            <div class="main-form">
                <form>
                    <h6>SIGHUP FOR FREE 30 DAYS TRAIL </h6>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <button type="submit" value="submit">Sigh Up Trail</button>
                </form>

            </div>
            
        </div>
        <div id="feature-title">
            <div class="feature-title-main">The original team consisted of Iron Man, Captain America, Hulk, Thor, 
            Black Widow and Hawkeye. 
            They were brought together by  S.H.I.E.L.D to combat Loki, Thor's adoptive brother. 
            </div>
        </div>


</div>
    </div>
    </div>
    </Base>
  )
}

export default Button