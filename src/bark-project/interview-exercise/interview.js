import React from "react";
import "./interview.css"
import {AiOutlineHeart} from "react-icons/ai"
import image from "./corn-pic.png"

export default function Interview (){
    return(
        <div className="main-container">
            <div className="second-container">
                <div className="top-container">
                <h3 className="hello">Hello Corntek!</h3>
                <div className="name">My name is Jamiyansuren</div>
                </div>
            
            <div className="third-container">
                <div className="image-container">
                    {/* <div className="inside-third-container"> */}
                    <img src={image}/>
                    <div className="ronny-who">
                     Ronny Who <AiOutlineHeart/>
                    </div>
                    <div className="text-image">
                    CEO if Corn Kernel Tech
                    </div>
                </div>
                {/* <div>
                CEO if Corn Kernel Tech
                </div> */}
                <div className="welcome">
                    Welcome to the future of Corn3 Security
                </div>
                <div className="do-you-wish">
                    Do you wish to go down the rabbit hole of Corn3 with Corn 
                    Kernel Tech or stay within your own metaverse that is reality?
                </div>
                <div className="button-container">
                    <div className="button-blue">
                    Uhh... no.
                    </div>
                    <div className="button-red">
                        Let's Go
                    </div>
                    
                </div>
                
            </div>
            {/* </div> */}
            </div>
        </div>
    )
}