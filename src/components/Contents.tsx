import Banner from "./Banner";

const Contents = () => {
  return (
    <section className="border-2 h-full overflow-hidden flex flex-col items-center gap-4 pb-10 bg-[#e2e2e2a1] ">
      <Banner />
      {[...Array(20)].map((_, i) => (
        <div key={i} className="w-96 h-10 mt-3 rounded-lg bg-white">
          <div className="bg-gray-600 w-10 h-10 relative top-0 rounded-md"></div>
        </div>
      ))}
    </section>
  );
};

export default Contents;
