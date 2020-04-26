import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTax from '../components/BannerTax'

const Tax = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Tax Consultancy" />
    </Helmet>

    <BannerTax />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>General Business Consultancy</h2>
          </header>
          <p>
            We provide our individual and business clients with the expert and
            knowledgeable tax consultancy that they deserve throughout the year.
            Tax services include:
          </p>
          <ul>
            <li>Registering your business for VAT</li>
            <li>
              Preparing and filing for VAT returns and advising on VAT
              liabilities as they fall due
            </li>
            <li>
              Turnaround strategy implementation Business loan re-organisation,
            </li>
            <li>Payroll tax returns compliance</li>
            <li>Income tax returns</li>
            <li>Individual tax returns</li>
            <li>Withholding tax returns</li>
            <li>
              We help with tailored advice to plan, manage and minimise tax and
              make use of tax efficient financial solutions
            </li>
            <li>Taxing authority representation</li>
            <li>Advice on tax effects of buying/selling a business</li>
          </ul>
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

export default Tax
