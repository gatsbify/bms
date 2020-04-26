import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerBookeeping from '../components/BannerBookeeping'

const Bookeeping = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Bookeeping Services" />
    </Helmet>

    <BannerBookeeping />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Bookeeping</h2>
          </header>
          <p>
            we can help you capture data promptly into your accounting systems
            software (Pastel, Quickbooks, Syspro, Accpac etc) and generate
            accurate and timely financial reports. <br />
            <br />
            Some of our book-keeping services include:
          </p>
          <ul>
            <li>Data capture</li>
            <li>Customer/supplier reports</li>
            <li>Payroll system reports</li>
            <li>Cash flow statements</li>
            <li>Budgets</li>
            <li>Record filing</li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/audits" className="button next">
                Audits
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Bookeeping
