import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="mx-auto w-[420px] mt-3 h-[800px] ">
      <Header />
      <Contents />
      <Footer />
    </main>
  );
};

export default App;
