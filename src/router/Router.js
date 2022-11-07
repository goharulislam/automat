import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import SliderHome from '../components/SliderHome';
import Blog from '../pages/Blog';
import NoMatch from '../pages/NoMatch';
function Router(){
return(
    <Routes>
		<Route path='/' element={<Home />} />
		<Route path='/sliderhome' element={<SliderHome />} />
		<Route path='/blog' element={<Blog />} />
		<Route path='*' element={<NoMatch />} />
	</Routes>
	);
}
export default Router;