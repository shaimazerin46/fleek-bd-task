import Banner from "../Components/HomeComeponents/Banner";
import BestDestination from "../Components/HomeComeponents/BestDestination";
import TopPlaces from "../Components/HomeComeponents/TopPlaces";
import TripSteps from "../Components/HomeComeponents/TripSteps";
import WhySafara from "../Components/HomeComeponents/WhySafara";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestDestination></BestDestination>
            <TripSteps></TripSteps>
            <TopPlaces></TopPlaces>
            <WhySafara></WhySafara>
        </div>
    );
};

export default Home;