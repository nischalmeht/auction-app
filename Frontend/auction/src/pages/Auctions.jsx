import Card from "../custom-components/Cards";
import Spinner from "../custom-components/Spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAuctionItems } from "../store/slice/auctionSlice";

const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);
 
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <article className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
          <section className="my-8">
            <h1
              className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
            >
              Auctions
            </h1>
            <div className="flex flex-wrap gap-6">
              {allAuctions && allAuctions.length>0 && allAuctions.map((element) => (
                <Card
                  title={element.title}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  imgSrc={element.image?.url}
                  startingBid={element.startingBid}
                  id={element._id}
                  key={element._id}
                />
              ))}
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default Auctions;