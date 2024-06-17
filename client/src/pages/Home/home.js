
import './home.css';
import Header from '../../components/Header/header';
import NavBar from '../../components/Navbar/navbar';
import logoImg from "../../Imgs/GIZLogo.jpg";
import Map from '../../components/Map/map';
import Card from '../../components/Card/card';
import Contact from '../../components/Contact/contact';
import cardImg from '../../Imgs/GIZLogo.jpg';


const Home = () => {

	return (
		<div className="home">
            <NavBar logoImg={logoImg}/>
            <Header/>
            <Map/>
			<Card cardImg={cardImg}/>
			<Contact/>
		</div>
	);
};

export default Home;
