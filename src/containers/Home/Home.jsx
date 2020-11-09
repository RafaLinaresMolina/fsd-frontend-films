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
  <Carousel autoplay={onChange}>
    <div class="imagen1">
      <h3 style={contentStyle}>1</h3>
    </div>
    <div class="imagen2">
      <h3 style={contentStyle}>2</h3>
    </div>
    <div class="imagen3">
      <h3 style={contentStyle}>3</h3>
    </div>
    <div class="imagen4">
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
}

export default Home;