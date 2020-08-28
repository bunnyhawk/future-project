import React from 'react';

import { useFetch } from '../state/hooks';

import Header from '../components/Header';
import NameList from '../components/NameList';

const API_URL = 'https://a6sz7rpoic.execute-api.us-west-2.amazonaws.com/dev/';
const SUMMARY_API = 'https://covidtracking.com/api/us';

const Home = () => {
  const { status, data, error } = useFetch(API_URL, 'covidNames');
  const { status: summaryStatus, data: summaryData } = useFetch(SUMMARY_API, 'summary');
  console.log(summaryData);
  return (
    <div className="bg-dark text-light text-center">
      <div className="home__header m-auto">
        <Header><span className="text-cta">128,000</span> people have lost their lives to <span className="whitespace-no-wrap">COVID-19</span>.<br />These are their names.</Header>
        <h2 className="text-xl leading-6">Their memories live forever.</h2>
        <p className="leading-tight my-12">COVID-19 is caused by a coronavirus called SARS-CoV-2. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.</p>
      </div>
      {status === 'fetching' && <div className="flex justify-center"><div className="loading" /></div>}
      {status === 'fetched' && <NameList list={data || []} />}
      <button className="bg-light text-dark rounded px-5 py-2 mt-8">View More</button>
    </div>
  );
}
 
export default Home;