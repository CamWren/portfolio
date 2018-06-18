import React from 'react';
import Link from 'gatsby-link';

import hill_country from '../images/hill_country.jpg';

console.log(hill_country);

const IndexPage = () => (
	<div id="parent" style={{
		margin: '-150px 0px 0px 0px',
		width: '1494px'}}>

	  <div id="page1" style={{
		backgroundImage: "url(" + hill_country + ")",	
	  	margin: '-84px auto 20px auto',
	  	height: '50rem',
        maxWidth: '1494px',
        padding: '1.45rem 1.0875rem'}}>
	  	<a id="home" className="smooth"></a>
	    <h1>Cam Wren</h1>
	    <p>Welcome to your new Gatsby site.</p>
	    <p>Now go build something great.</p>
	  </div>

	  <div id="page2" style={{
	  	margin: '0 auto',
	  	height: '32rem',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'}}>
	  	<a id="about" className="smooth"></a>
	    <h1>Hi people</h1>
	    <p>Welcome to your new Gatsby site.</p>
	    <p>Now go build something great.</p>
	  </div>

	  <div id="page3" style={{
	  	margin: '0 auto',
	  	height: '32rem',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'}}>
	  	<a id="resume" className="smooth"></a>
	    <h1>Hi people</h1>
	    <p>Welcome to your new Gatsby site.</p>
	    <p>Now go build something great.</p>
	  </div>

	  <div id="page4" style={{
	  	margin: '0 auto',
	  	height: '32rem',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'}}>
	  	<a id="works" className="smooth"></a>
	    <h1>Hi people</h1>
	    <p>Welcome to your new Gatsby site.</p>
	    <p>Now go build something great.</p>
	  </div>

	  <div id="page5" style={{
	  	margin: '0 auto',
	  	height: '32rem',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'}}>
	  	<a id="footer" className="smooth"></a>
	    <h1>Hi people</h1>
	    <p>Welcome to your new Gatsby site.</p>
	    <p>Now go build something great.</p>
	  </div>

	</div>
)

export default IndexPage
