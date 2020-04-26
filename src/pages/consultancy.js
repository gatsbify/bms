import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerConsultancy from '../components/BannerConsultancy'

const Consultancy = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Business Consultancy" />
    </Helmet>

    <BannerConsultancy />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major"></header>
          <p>
            We focus on the key winning elements. Then we develop business plans
            which we help monitor and measure to maximise growth and improve the
            business performance. Our business consultancy services include:
          </p>
          <ul>
            <li>Business plans Long-term business</li>
            <li>
              Plans Business analysis and monitoring Business appraisal Business
            </li>
            <li>
              Turnaround strategy implementation Business loan re-organisation,
            </li>
            <li>
              Consolidation and repayments negotiations Business management
              advisory
            </li>
            <li>Business management advisory</li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/training" className="button next">
                Business Training
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Consultancy
