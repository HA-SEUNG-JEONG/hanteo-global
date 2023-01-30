import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black w-[420px]">
      <p className="text-white ml-3 py-1 font-bold">9:41</p>
      <section className="bg-[#FFB1B2] flex space-x-10 font-bold justify-center py-1">
        <Link to="/charts">
          <article className="hover:opacity-30">차트</article>
        </Link>
        <Link to="/whook">
          <article className="hover:opacity-30">Whook</article>
        </Link>
        <Link to="/event">
          <article className="hover:opacity-30">이벤트</article>
        </Link>
        <Link to="/news">
          <article className="hover:opacity-30">뉴스</article>
        </Link>
        <Link to="/store">
          <article className="hover:opacity-30">스토어</article>
        </Link>
      </section>
    </header>
  );
};

export default Header;
