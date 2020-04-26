import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTraining from '../components/BannerTraining'

const Training = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="Business Training" />
    </Helmet>

    <BannerTraining />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Business Training</h2>
          </header>
          <p>
            We also improve people's lives through knowledge sharing and
            empowerment in the following areas:
          </p>
          <header className="major">
            <h2>Finance for Non-Financial Managers</h2>
          </header>
          <p>
            This training programme is suitable for people who are
            non-accountants and would like to have a more and better
            understanding of accounting and finance. This training course is
            mainly targeting business people who had not had the opportunity to
            study accounting and finance enabling them to fully understand
            accounting and finance in making useful economic decisions. This
            business training course will enable non-financial managers to
            understand financial jargon and impact of finance that affect them.
          </p>
          <header className="major">
            <h2>Customer Care</h2>
          </header>
          <p>
            Companies too focused on new business risk ignoring, alienating and
            then losing the clients and business they already have. Customers
            that are taken for granted soon leave and business suffers. This
            training programme will empower businesses on areas such as, today's
            customer service tool which has brought us the customer experience,
            and is much more than the traditional customer service.
          </p>
          <header className="major">
            <h2>Corporate Governance</h2>
          </header>
          <p>
            Corporate governance refers to the system of structures, rights,
            duties and obligation by which corporations / businesses are
            directed and controlled. This training course should take the
            delegates through all the above mentioned terms in detail. The
            training will help candidates to specify the guidelines, rules and
            procedures for making decisions in business affairs.
          </p>
          <header className="major">
            <h2>Financial Wellness</h2>
          </header>
          <p>
            Financial wellness is an intricate balance of the mental, spiritual
            and physical aspects of money. When your finances are in check, the
            business can seem manageable. Our priority is to help businesses and
            individuals reach their financial goals. With this training course,
            we hope to lead businesses through the steps they need to take for a
            successful financial future.
          </p>
          <header className="major">
            <h2>Changes in Accounting Standards and Updates</h2>
          </header>
          <p>
            This training course will help trainees to stay up to date with GAAP
            and IFRS updates to keep up with the ever changing business
            environments and meet the requirements of BICA.
          </p>

          <ul className="actions">
            <li>
              <Link to="/valuation" className="button next">
                Business Valuation
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Training
