import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="mx-auto w-[420px] mt-3 h-[800px] ">
      <Header />
      {/* 이미지 넣을 공간 */}
      <section className="mt-36">
        <img src="" alt="" />
      </section>
      <Contents />
      <Footer />
    </main>
  );
};

export default App;
