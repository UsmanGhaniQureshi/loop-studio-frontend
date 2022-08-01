import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurCreation from "./components/OurCreation";

function App() {
  return (
    <>
      <div
        className="h-96 md:h-[500px] object-fill bg-no-repeat"
        style={{
          backgroundImage: "url(/images/bg.jpg)",
        }}
      >
        <Header />
      </div>
      <div className=" w-4/5 mx-auto">
        <Hero />
        <OurCreation />
      </div>
      <Footer/>
    </>

  );
}

export default App;
