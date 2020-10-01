import React from 'react';
import logo from "./logo.svg";
import './App.css';


//import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">

      <div className="container header">
      <img className="logo" src={logo} alt="Website Logo"/>
        <nav>
          <ul class="nav_links">
           <li><a href="#">Services</a></li>
           <li><a href="#">Projects</a></li>
           <li><a href="#">About</a></li>
          </ul>
         </nav>
          <a class="cta" href="#"><button>Contact</button></a>
      </div>
     
      <div className="container">
        <div className="ctn">
        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" placeholder="City"></input>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" placeholder="Zip"></input>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

        </div>


      
        
        <div>
        	<div class="footer-top">
		        <div class="container">
		        	<div class="row">
		        		<div class="col-md-4 col-lg-4 footer-about wow fadeInUp">
		        			<img class="logo-footer" src={logo}  data-at2x="assets/img/logo.png"/>
		        			<p>
		        				We are a young company always looking for new and creative ideas to help you with our products in your everyday work.
		        			</p>
		        			<p><a href="#">Our Team</a></p>
	                    </div>
		        		<div class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
		        			<h3>Contact</h3>
		                	<p><i class="fas fa-map-marker-alt"></i> Via Rossini 10, 10136 Turin Italy</p>
		                	<p><i class="fas fa-phone"></i> Phone: (0039) 001 12 68 525</p>
		                	<p><i class="fas fa-envelope"></i> Email: <a href="hello@domain.com">hello@domain.com</a></p>
		                	<p><i class="fab fa-skype"></i> Skype: Sam_React</p>
	                    </div>
	                    <div class="col-md-4 col-lg-3 footer-social wow fadeInUp">
	                    	<h3>Follow us</h3>
	                    	<p>
	                    		<a href="#"><i class="fab fa-facebook"></i></a> 
								          <a href="#"><i class="fab fa-twitter"></i></a> 
								          <a href="#"><i class="fab fa-google-plus-g"></i></a> 
								          <a href="#"><i class="fab fa-instagram"></i></a> 
								          <a href="#"><i class="fab fa-pinterest"></i></a>
	                    	</p>
	                    </div>
		            </div>
		        </div>
	        </div>
	        <div class="footer-bottom">
	        	<div class="container">
	        		<div class="row">
	           			<div class="col-md-5 footer-copyright">
	                    	<p>&copy; React JS by <a href="https://reactjs.com">SAMIRA</a></p>
	                    </div>
	           			
	           		</div>
	        	</div>
	        </div>
        </div>




  </div>
</div>

  );
}

export default App;
