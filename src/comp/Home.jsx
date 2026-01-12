import Carousel from 'react-bootstrap/Carousel';
import homeJson from './home.json';

export default function Home() {
  return (
    <div>
    
      {/* Carousel */}
      <div className="carousel-wrapper">
        <Carousel data-bs-theme="dark">
          {homeJson.heroImages.map((imgSrc, index) => {
            console.log(imgSrc);
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={"."+imgSrc}
                  alt={`Slide ${index + 1}`}
                />
                <Carousel.Caption>
                  <h5>{homeJson.title}</h5>
                  <p>{homeJson.subtitle}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      {/* Fő tartalom */}
      <div className="page-content text-center">
        <h1>{homeJson.title}</h1>
        <p>{homeJson.subtitle}</p>
        <div>{homeJson.welcomeText}</div>
        <button onClick={() => window.location.href = '/rolunk'}>
        {homeJson.cta.text}
      </button>
      </div>

      
    </div>
  );
}
