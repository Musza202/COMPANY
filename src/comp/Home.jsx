import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return (
        <div>
            <div className='carousel-wrapper'>
                <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./SlideShow/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./SlideShow/2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./SlideShow/3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./SlideShow/4.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./SlideShow/5.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h5>Fifth slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./SlideShow/6.jpg"
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h5>Sixth slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </div>
            
            <img src="./images/logo.png" alt="Alma Kft. Logo" />
            <h1>Köszöntelek az Alma Kft. Weboldalán</h1>
            <p>Az Alma Kft. egy dinamikusan fejlődő vállalat, amely elkötelezett a minőség és az ügyfélelégedettség iránt. Cégünk több mint 10 éve működik sikeresen a piacon, és számos elégedett ügyféllel büszkélkedhetünk.</p>
            <p>Csapatunk szakértőkből áll, akik elhivatottak abban, hogy a legjobb megoldásokat kínálják ügyfeleink számára. Folyamatosan fejlesztjük szolgáltatásainkat és termékeinket, hogy megfeleljünk a változó piaci igényeknek.</p>
            <p>Nálunk az ügyfél mindig az első helyen áll. Hiszünk abban, hogy a hosszú távú kapcsolatok építése és az őszinte kommunikáció a siker kulcsa.</p>
            <p>Köszönjük, hogy érdeklődsz cégünk iránt! Ha bármilyen kérdésed van, vagy további információra van szükséged, ne habozz kapcsolatba lépni velünk.</p>
            <p>Ha bármilyen kérdésed van, ne habozz kapcsolatba lépni velünk!</p>
            <p>Kapcsolat: info@almakft.hu</p>
            <p>Telefon: +36 1 234 5678</p>
            <p>Cím: 1234 Budapest, Alma utca 1.</p>
            <button onClick={() => window.location.href = '/Rolunk'}>Ismerje meg a cégünket</button>

        </div>
    )
}