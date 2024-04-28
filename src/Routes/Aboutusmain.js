import { Fragment , useEffect, useState } from 'react';
import Nav from './Nav'
import Footer from '../Components/Footer/Footer'
import Session8home from '../Components/Home/Session8home'
import Session7home from '../Components/Home/Session7home'
import Session6home from '../Components/Home/Session6home'
import Session1about from '../Components/Aboutus/Session1about'
import Session2aboutus from '../Components/Aboutus/Session2aboutus'
import Scrollh from './Scrollh'
import '../Components/Looding/looding.css'
import Session3aboutus from '../Components/Aboutus/Session3aboutus'
import Session4about from '../Components/Aboutus/Session4about'
import Slide1up from '../Components/Singleproduct/Slide1up';
const Aboutusmain = () => {
  const [looding1 ,setlooding] =useState(false)
  useEffect(()=>{
    setlooding(true)
    setTimeout(()=>{
      setlooding(false)
    },5000)
  } ,[])
  return (   
<Fragment>    {
  looding1 ? <div className='loader1'> <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div> </div>:<Fragment>
<Slide1up/>
         <Nav/>
        <Session1about/>
        <Session2aboutus/>
        <Session3aboutus/>
       <Session4about/>
        <Session6home/>
        <Session7home/>
        <Session8home/>
        <Footer/>
        <Scrollh/> 
        </Fragment>
}
       
    
    </Fragment>
    
  )
}

export default Aboutusmain