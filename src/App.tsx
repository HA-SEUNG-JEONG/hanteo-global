import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./components/Charts";
import Contents from "./components/Contents";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import Store from "./components/Store";
import Whook from "./components/Whook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/charts" element={<Charts />} />
        <Route path="/whook" element={<Whook />} />
        <Route path="/event" element={<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <main className="mx-auto w-[420px] mt-3 h-[800px] ">
        <Header />
        <Contents />
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
