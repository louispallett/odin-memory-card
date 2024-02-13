import { useState } from "react";
import { apiData } from "../scripts/api_data";

import arrowLogo from "../../assets/arrow.svg";

export default function Welcome({ startPlaying }) {
    const beginPlay = () => {
        startPlaying();
    }
    return (
        <div className="welcome-wrapper">
            <h2>Knowledge is Porridge...</h2>
            <section>
                <div className="welcome-image" style={{ backgroundImage: `url(${apiData[5].image})` }}></div>
                <div className="welcome-text-wrapper">
                    <p>Hi, there.</p>
                    <p>Stewart Pearson here. Just a lad from Leeds with a lust for life.</p>
                    <p>I've been thinking of ways to turn your team into a little <i>cluster of excellence</i>.
                       I've been running my brain through the ideas carousel and I've come up with a little memory
                       exercise for you to do.
                    </p>
                    <p>It's a pretty simple memory game. I've got a list of 12 of your colleagues and counterparts
                       on the opposition side. You've just gotta click on all 12 without clicking on the same card
                       twice. If you do click on the same card twice, you start again.
                    </p>
                    <p>So, are you an Ameri<b>CAN</b> or an Ameri<b>CAN'T</b>?</p>
                </div>
            </section>
            <div>
                <img src={arrowLogo} id="arrow"/>
                <button onClick={beginPlay}>Yes and ho!</button>
            </div>
        </div>
    )
}