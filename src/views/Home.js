import React, { useState } from "react";
import { useFetch, airTable } from "../state/hooks";
import { FETCHING } from '../state/constants';

import Title from "../components/Title";
import NameList from "../components/NameList";

const SUMMARY_API = "https://api.covidtracking.com/v1/us/current.json";

const INITIAL_COUNT = '186,162';

const Home = () => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ namesState, dispatch ] = airTable.useFetchAirTable();
  const [ queryState, queryDispatch ] = airTable.useQueryAirTable();
  const [{ nationalData }] = useFetch(SUMMARY_API, "nationalData");

  const hasNationalData = nationalData && nationalData[0];
  const deaths = hasNationalData && nationalData[0].death;
  const { status, currentList } = namesState;
  const { status: queryStatus, queryList } = queryState;

  let isQueryList =  queryList.length > 0;

  function handleViewMore() {
    return airTable.fetchMoreData(dispatch);
  }

  function handleSearchSubmit() {
    airTable.fetchQueriedData(queryDispatch, searchTerm)
  }

  function handleSearchInputChange(event) {
    setSearchTerm(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit()
    }
  }

  function handleSearchClear() {
    setSearchTerm('');
    airTable.clearQueriedData(queryDispatch);
  }
  
  return (
    <main className="bg-theme text-text text-center">
      <div className="home__header m-auto">
        <Title>
          <span className={`totalNationalCount text-primary ${hasNationalData ? 'show' : ''}`}>{deaths && deaths.toLocaleString()}</span>
          {!hasNationalData && <span className="text-primary">{INITIAL_COUNT}</span>} Americans
          have lost their lives to{" "}
          <span className="whitespace-no-wrap">COVID-19</span>.<br />
          These are their names.
        </Title>
        <p className="leading-tight my-8">
          COVID-19 is caused by a coronavirus called SARS-CoV-2. Symptoms include fever, chills, cough, extreme fatigue, difficulty breathing, and new loss of taste or smell. The virus has devastated our nation, disproportionally harming Black and Brown communities — and engulfing the most vulnerable among us.
        </p>
        <div className="search flex items-end mx-auto mb-10">
          <div className="w-full mr-3">
            <label htmlFor="search" className="block text-sm normal-case text-left sr-only">
              Find someone
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchTerm}
              onKeyDown={handleKeyDown}
              onChange={handleSearchInputChange}
              className="w-full bg-theme text-base border-b border-solid border-text p-1"
            />
          </div>
          <button
            className="border border-solid border-text px-2 py-1 p-1 active:border-primary hover:border-primary focus:border-primary rounded text-sm"
            onClick={isQueryList ? handleSearchClear : handleSearchSubmit}>
              { isQueryList ? 'Clear' : 'Search' }
            </button>
        </div>
      </div>

      {queryStatus !== FETCHING && currentList.length > 0 && (
        <NameList
          list={isQueryList ? queryList : currentList || []}
          isQueryList={isQueryList}
        />
      )}

      <div className="dots flex justify-center text-text">
        {(status === FETCHING || queryStatus === FETCHING) && (
          <div>
            <span className="dot dot1">.</span>
            <span className="dot dot2">.</span>
            <span className="dot dot3">.</span>
          </div>
        )}
      </div>
      <button
        className="bg-text text-theme rounded border border-solid border-text px-5 py-2 mt-8 active:border-primary hover:border-primary focus:border-primary"
        onClick={handleViewMore}
      >
        View More
      </button>
    </main>
  );
};

export default Home;
