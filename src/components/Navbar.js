import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Home from '../pages/Home';
import Footer1 from '../components/Footer1';
import title from '../images/title.png';

const Navbar = props => {
const [lang, setLang] = useState('cz');
function language_switcher(e, lang='cz'){
  setLang(lang);

  var curr = e.target.textContent;
  var elem = document.querySelectorAll('#a');
  for (var i = 0; i < elem.length; i++) {
    if (elem[i].textContent === curr) {
      elem[i].className = 'active';
    } else {
      elem[i].className = '';
    }
  }
}

return(
<div>
<nav className="navbar navbar-expand-lg nav1 fixed-top">
<div className="container">
<div className="col-6">
  <NavLink to="/"><img src={title} className="logo" alt="logo" /></NavLink>
</div>
<div className="col-6">
  <div className='clearfix'></div>
  <ul className='language'>
    <li><span>?</span></li>
    <li><span className='active' id='a' onClick={(e)=>language_switcher(e, 'cz')}>CZ</span></li>
    <li><span id='a' onClick={(e)=>language_switcher(e, 'en')}>EN</span></li>
  </ul>
</div>
</div>{/*con*/}
</nav>
<Home lang={lang}/>
<Footer1 lang={lang} />
</div>
);
}
export default Navbar;