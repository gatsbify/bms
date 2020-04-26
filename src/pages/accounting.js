import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerAccounting'

const Accounting = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Accountingy" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Accounting</h2>
          </header>
          <p>Our dedicated staff are at hand to provide
          timely, accurate and well-organised financial records to ensure your
          business operations run efficiently and smoothly.
          We provide a full range of accounting services including:
          <ul>
            <li>Preparation of annual accounts / financial statements</li>
            <li>Accounting software selection and implementation</li>
            <li>Cash flow forecast and management</li>
            <li>Master budget</li>
            <li>Computerised payroll services</li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/bookeeping" className="button next">
                Bookeeping
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Accounting
