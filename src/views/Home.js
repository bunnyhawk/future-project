import React from "react";
import {
  useFetch,
  FETCHING,
  airTable,
} from "../state/hooks";

import Title from "../components/Title";
import NameList from "../components/NameList";

const SUMMARY_API = "https://api.covidtracking.com/v1/us/current.json";

const Home = () => {
  const [namesState, dispatch] = airTable.useFetchAirTable("covidNames");
  const [{ data: summaryData }] = useFetch(SUMMARY_API, "summary");
  const deaths =
    summaryData && summaryData[0] ? summaryData[0].death : "180,000";
  const { status, currentList } = namesState;

  function handleViewMore() {
    return airTable.fetchMoreData("covidNames", dispatch);
  }

  return (
    <div className="bg-dark text-light text-center">
      <div className="home__header m-auto">
        <Title>
          <span className="text-cta">{deaths.toLocaleString()}</span> Americans
          have lost their lives to{" "}
          <span className="whitespace-no-wrap">COVID-19</span>.<br />
          These are their names.
        </Title>
        <h2 className="text-xl leading-6">Their memories live forever.</h2>
        <p className="leading-tight my-12">
          COVID-19 is caused by a coronavirus called SARS-CoV-2. Older adults
          and people who have severe underlying medical conditions like heart or
          lung disease or diabetes seem to be at higher risk for developing more
          serious complications from COVID-19 illness.
        </p>
      </div>

      {currentList.length > 0 && <NameList list={currentList || []} />}
      <div className="dots flex justify-center">
        {status === FETCHING && (
          <div>
            <span className="dot dot1">.</span>
            <span className="dot dot2">.</span>
            <span className="dot dot3">.</span>
          </div>
        )}
      </div>
      <button
        className="bg-light text-dark rounded px-5 py-2 mt-8"
        onClick={handleViewMore}
      >
        View More
      </button>
    </div>
  );
};

export default Home;
