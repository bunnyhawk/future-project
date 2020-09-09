import React from 'react';
import Title from '../components/Title';

const Donate = () => {
  return (
    <div>
      <div className="m-auto mb-4">
        <Title>Make a donation</Title>
      </div>
      <ul>
        <li className="mb-4"><a href="https://www.feedingamerica.org/" className="underline">Feeding America</a> has a Covid-19 Response Fund that is helping to ensure food banks across the country can feed those in need right now, including the children who rely on school meals to eat.</li>
        <li className="mb-4"><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate" className="underline">The World Health Organization</a> is coordinating efforts across the world to respond to existing cases and prevent the novel coronavirus from spreading.</li>
        <li className="mb-4"><a href="https://www.oxfamamerica.org/explore/emergencies/COVID-19/" className="underline">Oxfam America</a> is organizing efforts to increase the delivery of clean water and sanitary supplies to refugees and those living in higher-risk environments.</li>
        <li className="mb-4"><a href="https://www.vitaminangels.org/" className="underline">Vitamin Angels</a> is a nonprofit which helps undernourished pregnant women and babies at risk of malnutrition.</li>
        <li className="mb-4"><a href="http://www.everytable.com/covid19/" className="underline">Everytable</a> has served 1.5 million meals so far to those in need in the Compton and South Los Angeles areas. The company has also partnered with the LA Mayor's Office to launch the <a href="https://www.instagram.com/p/B_BnTK-AYqY/?utm_source=ig_web_copy_link" className="underline">Emergency Senior Meals Response</a>, which is extending delivery of meals to even more senior citizens in the LA area. If you're 60 or older, you can contact the response fund at 213-482-7252 to receive 10 meals per week during the pandemic.</li>
        <li className="mb-4"><a href="https://www.detroitwaterproject.org/" className="underline">Human Utility Water</a> is a human right. But, the United States has a water affordability problem. In places like Detroit, Baltimore, and other cities, families unable to afford their water bills have their water shut off. When this happens, kids can't bathe, people can't wash dishes, and grandparents can't flush their toilets. The Human Utility is non-profit organization providing help to families and makes sure they always have running water at home.</li>
      </ul>
    </div>
  );
}
 
export default Donate;





