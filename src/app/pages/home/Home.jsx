import { useState, useEffect } from 'react';
import './style.css';

const Home = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(0);

  const handleMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(nextPercentage);
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    let newPercentage = prevPercentage + percentage;

    newPercentage = Math.max(Math.min(newPercentage, 0), -100); // Limitar entre -100 y 0
    setNextPercentage(newPercentage);
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDownAt, prevPercentage, nextPercentage]);

  return (
    <div>
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0" style={{ transform: `translate(${nextPercentage}%, -50%)` }}>
        <img className="image" src="./img/1.jpg" alt="Imagen 1" draggable="false" style={{ objectPosition: `${nextPercentage + 100}% 50%` }} />
        <img className="image" src="./img/2.jpg" alt="Imagen 2" draggable="false" style={{ objectPosition: `${nextPercentage + 100}% 50%` }} />
        <img className="image" src="./img/3.jpg" alt="Imagen 3" draggable="false" style={{ objectPosition: `${nextPercentage + 100}% 50%` }} />
        <img className="image" src="./img/4.jpg" alt="Imagen 4" draggable="false" style={{ objectPosition: `${nextPercentage + 100}% 50%` }} />
        <img className="image" src="./img/5.jpg" alt="Imagen 5" draggable="false" style={{ objectPosition: `${nextPercentage + 100}% 50%` }} />
        <img className="image" src="./img/6.jpg" alt="Imagen 6" draggable="false" style={{ objectPosition: `${nextPercentage + 100}% 50%` }} />
        <img className="image" src="./img/7.jpg" alt="Imagen 7" draggable="false" style={{ objectPosition: `${nextPercentage + 100}% 50%` }} />
      </div>
      <ul>
        <li><a href="./vacio.html">VACIO</a></li>
      </ul>
    </div>
  );
};

export default Home;
