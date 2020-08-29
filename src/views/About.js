import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div>
      <div className="m-auto mb-4">
        <Header>About Covid • In Memoriam</Header>
      </div>
      <p className="leading-tight mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo quam eget elit molestie tristique. Cras non dictum ligula.</p>
      <p className="leading-tight mb-4">Quisque iaculis, dolor a dignissim vehicula, arcu odio pulvinar neque, quis tincidunt quam felis non lorem. Vestibulum dignissim erat sed mattis consequat. Aenean dictum nunc eu blandit lacinia. Aliquam vestibulum odio enim, vel placerat orci porttitor in. Sed a sollicitudin dolor. Proin malesuada nisl in erat congue aliquam. Donec erat ipsum, lacinia ac elementum at, efficitur vel risus. Phasellus sodales, lectus at convallis pharetra, justo mi molestie elit, et porttitor diam tortor eget velit. Donec at nulla eu nibh cursus ornare sed in leo.</p>
      <a href="mailto:contact@covidinmemoriam.com" className="underline">contact@covidinmemoriam.com</a>
    </div>
  );
}
 
export default About;