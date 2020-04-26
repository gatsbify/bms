import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerValuation from '../components/BannerValuation'

const Valuation = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Business Consultancy" />
    </Helmet>

    <BannerValuation />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Valuation</h2>
          </header>
          <p>
            Some of the compelling reasons you should do a professional business
            valuation include:
          </p>
          <ul>
            <li>Business management advisory.</li>
            <li>
              Know your business's estimated value, and then take steps to
              increase value if you are planning to sell.
            </li>
            <li>Establishing partner ownership.</li>
            <li>Resolve disputes such as divorce.</li>
            <li>
              Through a business valuation, you can drive up business value by
              identifying current and future advantages your business either has
              or will have; thus you can strategically position your business
              for future growth and earnings.
            </li>
            <li>
              After we do a business valuation, we carefully maintain financial
              records, which can make buyers easily understand your business.
            </li>
            <li>
              As a buyer, proven profitability and future earnings potential are
              the most attractive qualities in a potential business acquisition,
              and these can be determined by a professional business valuation.
            </li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/secreterial" className="button next">
                Secreterial Services
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Valuation
