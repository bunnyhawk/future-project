import React from 'react';
import { Link } from "react-router-dom";
import Title from '../components/Title';
import TextLink from '../components/TextLink';

const About = () => {
  return (
    <main className="about m-auto">
      <div className="m-auto mb-8">
        <Title>About Covid • In Memoriam</Title>
      </div>
      <p className="mb-4">I write this heartbroken by the devastation that has struck our nation. Nearly <TextLink href="https://www.cdc.gov/nchs/nvss/vsrr/covid19/index.htm">194,000,000</TextLink> plus people, disproportionately <TextLink href="https://www.npr.org/sections/coronavirus-live-updates/2020/08/13/902261618/covid-19-death-rate-for-black-americans-twice-that-for-whites-new-report-says">Black, Brown, and Indigenous are dead</TextLink>. The entire <TextLink href="https://www.nytimes.com/2020/09/13/us/Wildfires-Oregon-California-Washington.html">West Coast is in flames</TextLink>. 20.5 million people are <TextLink href="https://www.pewresearch.org/fact-tank/2020/06/11/unemployment-rose-higher-in-three-months-of-covid-19-than-it-did-in-two-years-of-the-great-recession/">unemployed</TextLink>. Others are being <TextLink href="https://www.washingtonpost.com/graphics/investigations/police-shootings-database/">gunned down</TextLink> in broad daylight. And yet, our nation trudges on, numb to the carnage. Blind to the horrors of unrelenting racism. Complicit in our own demise.</p>

      <p className="mb-4">This project then, serves as an ode to the voiceless. To those no longer physically with us who perished from a novel illness that has spared few, but who’s devastation has been amplified by centuries of systemic inequities and calloused negligence. Given the complexity of gathering this sort of data, the names you see here have been sourced from The <TextLink href="https://www.nytimes.com/interactive/2020/05/24/us/us-coronavirus-deaths-100000.html">New York Times</TextLink>, <TextLink href="https://www.washingtonpost.com/health/2020/04/24/coronavirus-dead-victims-stories/?arc404=true">Washington Post</TextLink>, and <TextLink href="https://www.latimes.com/projects/coronavirus-lives-lost-in-california/#nt=7030col1">Los Angeles Times</TextLink>. All other data has been submitted by loved ones of those who’ve passed — an intentional decision to empower anyone, anywhere to submit proof of transition and <Link to="/submit" className="underline active:text-primary hover:text-primary focus:text-primary">honor a loved one</Link>, without being deterred by expensive obituary fees. We invite you to share this project far and wide to provide those grieving with the opportunity to find catharsis, and to help us render visible the scale of this moment.</p>

      <p className=" mb-4">Secondly, this project hopes to serve as a space for communal remembrance and healing. A digital space to honor the dead and solemnly reflect. And lastly, in the words of Arundhati Roy, it serves as a reminder:</p>

      <blockquote className="italic mb-4">“To love. To be loved. To never forget your own insignificance. To never get used to the unspeakable violence and the vulgar disparity of life around you. To seek joy in the saddest places. To pursue beauty to its lair. To never simplify what is complicated or complicate what is simple. To respect strength, never power. Above all, to watch. To try and understand. To never look away. And never, never to forget.”</blockquote>

      <p className="mb-4">What does this visualization make you think and feel—and what are we missing? <TextLink href="mailto:contact@rememberingcovid19.co">Let us know.</TextLink></p>

      <p className="mb-4">
        <span className="inline-block pb-2">This project was made possible by:</span><br />
        <TextLink href="https://twitter.com/MikeWamungu">Mike Wamungu - Concept and Strategy</TextLink><br />
        <TextLink href="https://twitter.com/francois_bach">Frank Bach - Design</TextLink><br />
        <TextLink href="https://twitter.com/positronicshell">Robert Higdon - Development</TextLink>
      </p>
    </main>
  );
}
 
export default About;