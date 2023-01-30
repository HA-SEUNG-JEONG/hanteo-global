import Banner from "./Banner";
import InfiniteScrollComponent from "./InfiniteScrollComponent";

const Contents = () => {
  return (
    <section className="border-2 min-h-full overflow-hidden flex flex-col items-center gap-4 pb-10 bg-gray-200 opacity-75">
      <>
        <Banner />
        <InfiniteScrollComponent />
      </>
    </section>
  );
};

export default Contents;
