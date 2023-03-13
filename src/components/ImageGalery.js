import React,{useState} from "react";
//Create simple galery with pictures and button
//pictures must be moveing in order from first to last and again

export default function ImageGalery(){
    const images = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    return(
        <div>
            <img src={images[selectedIndex]} />
        </div>
    );
};