import React from 'react';

const slidesInfo =[
    {
        src: "https://i.ibb.co/c3sYPHz/image-2.jpg",
        alt: "Concurso-CCH",
        desc: "Concurso-CCH"
    },
    {
        src: "https://i.ibb.co/HpWr9p5/image-1.jpg",
        alt: "Concurso-CCH-Diploma",
        desc: "Concurso-CCH-Diploma",        
    },
    {
        src:"https://i.ibb.co/hcmPQ5p/image-4.jpg",
        alt:"OEB",
        desc:"OEB"
    },
    {
        src:"https://i.ibb.co/Ln3JXDC/image-3.jpg",
        alt:"Constancia",
        desc:"Constancia"
    },
    {
        src:"https://i.ibb.co/Qr5wNLw/image-5.png",
        alt:"Minisumo",
        desc:"Misisumo"
    }
]

const slides = () => {
    return (
        slidesInfo.map(slide =>(
            <div className="slide-container">
                <img src={slide.src} alt={slide.alt}/>
                <div className="slide-desc">
                    <span>{slide.desc}</span>
                </div>
            </div>))
    )
};

export default slides;