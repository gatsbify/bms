import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLiquidation from '../components/BannerLiquidation'

const Liquidation = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Business Liquidation" />
    </Helmet>

    <BannerLiquidation />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Liquidation</h2>
          </header>
          <p>
            The business liquidation process includes an assessment of
            business's financial position and where necessary, forensic
            investigation of suspect transactions and possible litigation of
            claims.
          </p>
          <ul className="actions">
            <li>
              <Link to="/taxconsultant" className="button next">
                Tax Consultancy
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Liquidation
