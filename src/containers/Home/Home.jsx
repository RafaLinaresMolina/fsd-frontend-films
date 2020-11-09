import { Carousel } from 'antd';
import './Home.scss';


const Home = () => {
  function onChange(a) {
    console.log(a);
  }
const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '43.6em',
  textAlign: 'center',
  };

return(
  <div className="imgCarrusel">
    <Carousel dots={false} autoplay={onChange}>
    <div class="imagen1">
    </div>
    <div class="imagen2">
    </div>
    <div class="imagen3">
    </div>
    <div class="imagen4">
    </div>
  </Carousel>
  </div>
  
);
}

export default Home;