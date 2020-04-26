import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.webp'
import pic02 from '../assets/images/pic02.webp'
import pic03 from '../assets/images/pic03.webp'
import pic04 from '../assets/images/pic04.webp'
import pic05 from '../assets/images/pic05.webp'
import pic06 from '../assets/images/pic06.webp'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS"
          meta={[
            { name: 'description', content: 'SCOT RACE CONSULT' },
            { name: 'keywords', content: 'Accounting, Finance' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Consulting</h3>
                <p>General Business </p>
              </header>
              <Link to="/consultancy" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Audits</h3>
                <p>Internal &amp; External</p>
              </header>
              <Link to="/audits" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Liquidation</h3>
                <p>Business</p>
              </header>
              <Link to="/liquidation" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Valuation</h3>
                <p>Business</p>
              </header>
              <Link to="/valuation" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Training</h3>
                <p>Business &amp; Internal</p>
              </header>
              <Link to="/training" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Tax </h3>
                <p>Planning &amp; Consulting</p>
              </header>
              <Link to="/taxconsultant" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Social Responsibility</h2>
              </header>

              <p>
                We support the empowerment initiatives by the Botswana
                Government and support economic development through sound
                management consultancy and advisory services; backing efforts of
                non-governmental organizations in HIV and AIDS reduction,
                poverty alleviation and being environment friendly. We are also
                committed to the development and creation of self-help projects
                and small businesses for the local community.
              </p>

              <ul className="actions">
                <li>
                  <Link to="/services" className="button next">
                    Our Services
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
