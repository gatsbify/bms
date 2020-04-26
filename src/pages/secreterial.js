import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSecreterial from '../components/BannerSecreterial'

const Secreterial = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Secreterial Services" />
    </Helmet>

    <BannerSecreterial />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Secreterial Services</h2>
          </header>
          <p>
            You save a lot of time &amp; money, not to mention trouble, by
            engaging the services of a good company secretary, including:
          </p>
          <ul>
            <li>Governance support to the company directors</li>
            <li>Preparation and filing of statutory returns</li>
            <li>Preparation of relevant minutes, records and resolutions</li>
            <li>Preparation of distribution of meeting packs</li>
            <li>Physical attendance at the board (or shareholder) meetings</li>
            <li>Company name search</li>
            <li>Company formation</li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/liquidation" className="button next">
                Business Liqudaton
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Secreterial
