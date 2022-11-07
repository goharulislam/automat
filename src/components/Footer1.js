import React, {useState, useEffect} from "react";
import axios from "../axios/index";

function Footer1(props){
const [rows, setRows] = useState([]);
let response = null;

useEffect(() => {
  getLanguage();
}, [props.lang]);

function getLanguage(){
  if(props === null || props.lang === null){
    getCz();
  } else if (props.lang === 'cz'){
    console.log('cz');
    getCz();
  } else {
    console.log('en');
    getEn();
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

return(
<footer>
<div className="container">
<div className="row b1">
<div className="col-md-6">
{
  rows && rows.length > 0 && rows.map((i) => (
    <p key={Math.random()}>{i.footer_p1}</p>
  ))
}
</div>{/*col*/}
<div className="col-md-6">

    <ul>
        <li><a href="https://www.facebook.com/automat" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a></li>
        <li><a href="https://www.facebook.com/automat" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
        <li><a href="https://twitter.com/automat" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/company/automat/" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube"></i></a></li>
    </ul>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</footer>
);}
export default Footer1;