import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroView from "./components/IntroView";
import Payments from "./components/Payments";
import Qualities from "./components/Qualities";
import Workings from "./components/Workings";

function App() {
	return <div className="App">
    <Header />

    <IntroView />

    <Qualities />

    <Workings />

    <Payments />

    <Demo />

    <Footer/>
  </div>;
}

export default App;
