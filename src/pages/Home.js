import React, {useState, useEffect} from "react";
import axios from "../axios/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import message from '../images/message.png';

function Home(props){
const [rows, setRows] = useState([]);
const [rows2, setRows2] = useState([]);
let response, response2 = null;
let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
};

useEffect(() => {
  getLanguage();
}, [props.lang]);

function getLanguage(){
  if(props === null || props.lang === null){
    getCz();
    getSliderCz();
  } else if (props.lang === 'cz'){
    //console.log('cz');
    getCz();
    getSliderCz();
  } else {
    //console.log('en');
    getEn();
    getSliderEn();
  }
}

async function getCz(){
  try{
    response = null;
    setRows(null);
    response = await axios.get('lang_cz.json');
    setRows((prevrows) => prevrows = response.data);
  }catch(err){
    console.log(err);
  }
}

async function getEn(){
  try{
    response = null;
    setRows(null);
    response = await axios.get('lang_en.json');
    setRows((prevrows) => prevrows = response.data);
  }catch(err){
    console.log(err);
  }
}

async function getSliderCz(){
  try{
    response2 = null;
    setRows2(null);
    response2 = await axios.get('lang_cz_slider.json');
    setRows2((prevrows2) => prevrows2 = response2.data);
  }catch(err){
    console.log(err);
  }
}

async function getSliderEn(){
  try{
    response2 = null;
    setRows2(null);
    response2 = await axios.get('lang_en_slider.json');
    setRows2((prevrows2) => prevrows2 = response2.data);
  }catch(err){
    console.log(err);
  }
}

function slider1(){
  let a = rows2 && rows2.length > 0 && rows2.map((i) => (
    <div key={Math.random()}>
      <span className="b1"></span>
      <div className="b2">
        <h6>{i.slider_p1}</h6>
        <p>{i.slider_date1}</p>
      </div>
    </div>
  ));
  return a;
}

function button1(){
  let a = rows && rows.length > 0 && rows.map((i) => (
    <button key={Math.random()} className="btn1" onClick={()=>'/'}>{i.button1}</button>
  ));
  return a;
}

return(
<div>
<section className="home1">
<div className="container">
<div className="row">
<div className="col-md-4">
<div className="frame"><img src={message} alt="message" /></div>
{
  rows && rows.length > 0 && rows.map((i) => (
    <div key={Math.random()}>
      <h5>{i.home_h5}</h5>
      <p>{i.home_p1}</p>
      <p>{i.home_p2}</p>
    </div>
  ))
}
</div>{/*col*/}
<div className="col-md-8"></div>{/*col*/}
<div className="clearfix"></div>

<div className="col-md-12">
<Slider {...settings}>
{slider1()}
</Slider>
<div className="clearfix"></div>

<div className="text-center">
{button1()}
</div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);}
export default Home;