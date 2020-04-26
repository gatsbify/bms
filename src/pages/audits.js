import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAudits from '../components/BannerAudits'

const Audits = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Business Consultancy" />
    </Helmet>

    <BannerAudits />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major"></header>
          <p>
            The audit function can be time consuming and costly. We help in
            pre-audit preparation and support, post audit clean-up of certain
            accounts, procedure establishment and training.{' '}
          </p>
          <h3> Forensic Auditing</h3>
          <p>
            {' '}
            We can help your business prevent and detect frauds and errors, by
            identifying omission of amounts, manipulation, falsification or
            alteration of accounting records or supporting documents meant to
            deceive financial statements users.{' '}
          </p>
          <h3> Internal auditing</h3>
          <p>
            We do internal auditing to improve a business's operations. Internal
            auditing is a catalyst for improving your business's management
            controls by providing insight and recommendations based on analysis
            and assessment of data and business process.
          </p>
          <ul className="actions">
            <li>
              <Link to="/consultancy" className="button next">
                Business Consultancy
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Audits
