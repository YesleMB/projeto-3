import "./App.css"
import {Navigation,Pagination} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import idoso1 from "./fotos/4136673.jpg"
import imag2 from "./fotos/image2.png";
import imag3 from "./fotos/imag3.png";
import imag4 from "./fotos/imag4.png";
import imag5 from "./fotos/imag5.png";
import face from"./fotos/facebook.png";
import inst from "./fotos/instagram.png";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"



function App() {
  const foto1 = idoso1
  const icone1= face
  const icone2= inst
  const colecao= [imag2,imag3,imag4,imag5];

  return (
    <div>
      <header >
        < button classNamme="menu1"><p>atividades oferecidas</p></button>
        <button classNamme="menu2">conheça-nos </button>
        <button classNamme="menu3">informaçoes</button>
      </header>
      <main>
        <h1>Casa de repouso das reliquias</h1>
        <div className="texto1"><p>Nossa página é um portal para um mundo repleto de experiências compartilhadas, histórias de vida e um oceano de sabedoria acumulada ao longo dos anos. Aqui, no Asilo do Amor, abraçamos com todo o coração as pessoas de idade, valorizando sua presença e enaltecendo a riqueza de suas vivências.
        </p>
        </div>
        <section>
        <div className="cards">
          <Swiper
          modules={[Navigation,Pagination]}
          navigation
          pagination>
           {
            colecao.map(colecao=>(
              <SwiperSlide>
                <img src={colecao}/>
              </SwiperSlide>
            
            ))}
          
          </Swiper>
             
        </div>
        </section>
       
      </main>
      <aside>
       
      </aside>
      
      
      
      <footer>
        <div className="contato"><h5>telefone:00000000 </h5>
        <h5>email:casaderepouso@gmail.com </h5>
        <h5> endereco: rua bo,9342, bairro vivibo 
porto alegre/RS
</h5></div>
<div className="icones">
    <div className="face"></div>
    <div className="inst"></div>
</div>
      </footer>




    </div>

  );
}

export default App;
