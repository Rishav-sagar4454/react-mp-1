import '../src/assets'
import './App.css';
import './index.css'
function App() {
  return (
    <div>
      <div className="banner">
    <div className="App">
    <div class="section-left">
      <h1><b>Inspiring design delivered to your inbox every morning</b></h1>
      <h3>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</h3>
      <h2>Show me how it looks</h2>
      
      <div>    
      <form>
      <input type="email" placeholder="Your e-mail address" class="t5"/>
      <button onclick=" myFunction"class="t6"> Register Now </button>
       </form >
       <div class="bottom-line">Free - No Spam - No Data Sharing</div>
       
     </div>
     </div>
     </div>
     <div class="section-right">
					<img src="../src/assests/Vector.png" alt='oldman_image' />
				</div>
     </div>
     <div class="footer">
				<ul>
					<li>Prompt Generator</li>
					<li>Dweep Daily</li>
					<li>All Contributors</li>
					<li>Your data on Dweep.io</li>
					<li>Contribute to Dweep</li>
				</ul>
				<ul class="footer-list2">
					<li>Dweep.io</li>
					<li>Made with love in India</li>
					<li class="logo-list">
						<img src="../src/assests/insta" alt="insta"/>
						<img src="../src/assests/linkedin" alt="linkedin" />
					</li>
					<li>&nbsp;</li>
					<li>hello@dweep.io</li>
				</ul>
			</div>
    </div>
  );
}

export default App;
