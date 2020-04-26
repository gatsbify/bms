import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'

const Services = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Business Consultancy" />
    </Helmet>

    <BannerServices />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Our Services</h2>
          </header>
          <p>
            The services will be based on experience and a depth of professional
            accounting, auditing and training expertise which will meet clients'
            business needs. nsuring continuity of service, is of paramount
            importance to us and to our client. With us besides your enterprise,
            you will have more time to concentrate on making your business more
            profitable.
          </p>
          <p>
            Located in Johannesburg - South Africa, clients can always be safe
            in the knowledge that we are available to see them at their own
            convenience.
          </p>
          <p>
            A significant part of our business is providing Statutory Auditing
            services. We however, offer back office client support to
            non-auditing clients covering bookkeeping and accounts preparation,
            accounts management and document handling. Other services include
            providing general business support services in addition to corporate
            compliance services.<br></br>
            Scotrace Consult services include:
          </p>
          <ul>
            <li>
              <Link onClick={props.onToggleMenu} to="/accounting">
                → Accounting Services
              </Link>{' '}
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/bookeeping">
                → Book-keeping Services
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/audits">
                → Audit Preparations
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/consultancy">
                → General Business Consultancy
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/training">
                → Business Training /Refresher Courses
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/valuation">
                → Business Valuation
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/secretary">
                → Company Secretarial Services
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/liquidation">
                → Business Liquidation
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/taxconsultant">
                → Tax Consultancy
              </Link>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/accounting" className="button next">
                Accounting
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Services
