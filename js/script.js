let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

// re-useble navbar component
// navbar component
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Divya k</a>
      <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active p-4" aria-current="page" href="index.html">Home</a>
          </li>
          <a class="nav-link p-4" aria-current="page" href="about.html">About</a>
          </li>
          <a class="nav-link p-4" aria-current="page" href="pricing.html">Pricing</a>
        </li>
        <a class="nav-link p-4" aria-current="page" href="projects.html">Projects</a>
          </li>             
        </ul>
       <a href="cv/divya kumari's Resume-hackerresume.pdf" download="DivyaKumari " class="my-cv">Download CV</a>
      </div>
    </div>
    </nav>
        `;
  }
}

// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">Divya k</a>
              <p>I’m Divya Kumari, a junior and talented Web Designer with front end development skills.</p>
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
              <span class="contact"><a href="emailto:kumaridivya2796@gmail.com" class="email">
                <img src="./img/email.png" alt="email me"> &nbsp; &nbsp;
                kumaridivya2796@gmail.com</a></span>
            </div>
            <div class="quike-links text-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li><a href="about.html">About Me</a></li>
              </ul>
            </div>
            <div class="social-links text-center">
              <a href="https://www.linkedin.com/in/iamdivyak/"><img src="./img/LinkedIn Circled.png" alt="linkedin"></a><br>
              <!-- <a href=""><img src="./img/Instagram.png" alt="Instagram"></a><br> -->
              <a href="https://twitter.com/Imdivyakumari"> <img src="./img/Twitter.png" alt="twitter"></a><br>
              <a href="https://github.com/Iamdivyak"><img src="./img/GitHub.png" alt="github"></a>  
              
            </div>
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
