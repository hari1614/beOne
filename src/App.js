
// import './App.css';

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./components/ContactUs/ContactUs";
import DisplayContent from "./components/DisplayContent/DisplayContent";
import { useState } from "react";
import DisplayTwo from "./components/DisplayContent/DisplayTwo/DisplayTwo";


function App() {
  const [data, setData] = useState([
    {
      title: "Gulf of Thailand, Thailand",
      discription: "The Gulf of Thailand, bordered by Thailand, Cambodia, and Vietnam, is a tropical paradise renowned for its pristine beaches, crystal-clear waters, and vibrant marine life. Here's a glimpse into what makes the Gulf of Thailand a captivating destination for nature tourism:",
      button: "Read More",
      display_img: "http://localhost:3000/images/island1.jpg",
      dynamic_style: "asc"
    },
    {
      title: `
      El Nido, Philippines`,
      discription: `
      El Nido, located in the province of Palawan in the Philippines, is a tropical paradise renowned for its stunning natural beauty and pristine beaches. Here's a glimpse into what makes El Nido a must-visit destination for nature tourism:`,
      button: "Read More",
      display_img: "http://localhost:3000/images/island2.jpg",
      dynamic_style: "des"
    }
   
]);
function Aero(){
  if(data.title===''){
    setData('Newyork')
  }
}

  return (
    <div className="App">
       <Navbar />
       <Banner />
       {data && data.map(d => (
          <DisplayContent data={d} aero={Aero}  />
       ))}
       <DisplayTwo />
       <ContactUs/>
       <Footer />
     
    </div>
  );
}

export default App;
