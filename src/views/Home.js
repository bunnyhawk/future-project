import React, { useReducer } from 'react';
// import { NamesContext } from '../state/context';
import { useFetch, FETCHING, FETCHED, namesReducer, GET_MORE_LIST_DATA} from '../state/hooks';

import Title from '../components/Title';
import NameList from '../components/NameList';

const API_URL = 'https://rdgqc6nd42.execute-api.us-west-2.amazonaws.com/dev/names?records=500';
const SUMMARY_API = 'https://api.covidtracking.com/v1/us/current.json';

const Home = () => {
  const [ namesState, dispatch ] = useFetch(API_URL, 'covidNames');
  const [{ data: summaryData }] = useFetch(SUMMARY_API, 'summary');
  const deaths = summaryData && summaryData[0] ? summaryData[0].death : '180,000';
  const { status, currentList } = namesState;

  // eslint-disable-next-line no-unused-vars
  // const [_, dispatch] = useReducer(namesReducer, namesState);

  function handleViewMore() {
    dispatch({ type: GET_MORE_LIST_DATA });
  }

  return (
    <div className="bg-dark text-light text-center">
      <div className="home__header m-auto">
        <Title><span className="text-cta">{deaths.toLocaleString()}</span> Americans have lost their lives to <span className="whitespace-no-wrap">COVID-19</span>.<br />These are their names.</Title>
        <h2 className="text-xl leading-6">Their memories live forever.</h2>
        <p className="leading-tight my-12">COVID-19 is caused by a coronavirus called SARS-CoV-2. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.</p>
      </div>
      {status === FETCHING && <div className="flex justify-center">
        <div>
          <span class="dot dot1">.</span>
          <span class="dot dot2">.</span>
          <span class="dot dot3">.</span>
        </div>
      </div>}
      {status === FETCHED && <NameList list={currentList || []} />}
      <button className="bg-light text-dark rounded px-5 py-2 mt-8" onClick={handleViewMore}>View More</button>
    </div>
  );
}
 
export default Home;