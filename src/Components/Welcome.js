import React, { useState, useEffect } from "react";


export function Welcome() {

    const [IMGData, setIMGData] = useState([]);

    async function loadIMGData() {
        const response = await fetch('https://aim48ho1qg.execute-api.us-east-2.amazonaws.com/Production/gallery-images');
        let jsonData = await response.json();
        setIMGData(jsonData);
      }
  
      useEffect(() => {
        loadIMGData();
      }, []); 

    return (
        <div className="scene" id="welcome">
            <article className="content">
                <div className="gallery">
                    {
                        IMGData.map((image) => 
                            <img 
                                className={image.className}
                                src={image.src} 
                                alt={image.alt} 
                            />
                        )
                    }
                </div>
                <h1>Welcome to the Landon&nbsp;Hotel</h1>
                    <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and 
                    <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.
                    </p>
            </article>
        </div>
    )
}