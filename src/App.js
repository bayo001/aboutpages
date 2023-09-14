import profileImg from "./asset/abdul.jpg"
import './App.css';
import './Mobile.css'

// Create 3(Three) different react app using the command, and modify your output to display:
// 1. A composition about you including an image.
// 2. A simple registration form with name, email, phone and sex.
// 3. A basic gallery with pictures and videos.

function App() {
  return (
    <div className="App">
      <section className="bio" id="bioCard">
        <div className="card">
        <img src={profileImg} alt="" />
        <p>Name: Abdulwahab Abdullahi</p>
        <p>Role: Frontend Developer</p>
        <p>Learning: Web2Advanced Course</p>
        </div>
        <a href="#form-page" className="next-btn">Next</a>
      </section>
      <section className="bio formOne" id="form-page">
        <form>
          <h2>Simple Registration Form</h2>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="text" placeholder="Sex" />
          <input type="text" placeholder="Your phone-no" />
          <button className="submitBtn">Submit</button>
          <div>
          <a href="#bioCard" className="prev-btn">Previous</a>
          <a href="#gallery" className="next-btn">Next</a>
          </div>
        </form>
      </section>
      <section id="gallery" className="bio">
        <h2>Photo Gallery</h2>
        <div className="photos">
        {/* <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=sph" alt="" /> */}
        <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=740&t=st=1694604493~exp=1694605093~hmac=07178623971f887b008b4bcab74a1ce7d5a85be955d0a15987f720abf6620668" alt="" />
        <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611048.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=sph" alt="" />
        <img src="https://img.freepik.com/free-vector/vr-game-metaverse-glasses-p2e-technology-vector-concept-gamer-character-virtual-reality-videogame-cartoon-illustration-man-girl-play-with-device-online-futuristic-isolated-gamefi-clipart_107791-21381.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=sph" alt="" />
        <img src="https://cdn.pixabay.com/photo/2022/02/23/15/56/technology-7030913_1280.png" alt="" className="small-r"/>
        <img src="https://cdn.pixabay.com/photo/2023/01/04/01/37/nft-7695648_1280.jpg" alt=""/>
        </div> <iframe width="100%" height="350" src="https://www.youtube.com/embed/M06sq95eJQE?si=cmDH76MOznQJuY6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div>
          <a href="#form-page" className="prev-btn">Previous</a>
          </div>
      </section>
      
    </div>
  );
}

export default App;
