import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic08 from '../assets/images/pic08.webp'
import pic09 from '../assets/images/pic09.webp'
import pic10 from '../assets/images/pic10.webp'

const About = props => (
  <Layout>
    <Helmet>
      <title>SCOT RACE SA - CHATERED ACCOUNTANTS &amp; CONSULTANTS</title>
      <meta name="description" content="About Us" />
    </Helmet>

    <BannerAbout />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>About Us</h2>
          </header>
          <p>
            We offer a friendly and approachable accountancy service which is
            based on experience and a depth of professional accounting expertise
            which helps us get to the heart of your business needs.
          </p>
          <p>
            Located in Gaborone - Botswana, we offer accounting services that
            suit you and your business. Clients can always be safe in the
            knowledge that we are available to see them at their own
            convenience.
          </p>
          <p>
            Scot Race Consult is dedicated to the empowerment of its personnel
            through training BICA students, ACCA, CIMA, AAT, CAT and other
            associated degrees in accounting and finance.
          </p>
          <h2>Our Business</h2>
          <p>
            We specialise in the provision of accounting services, auditing
            services and advisory. A significant part of our business includes
            back office client support covering bookkeeping and accounts
            preparation, accounts management and document handling. Other
            services include providing general business support services in
            addition to corporate compliance services. We also offer training in
            the following disciplines:
          </p>
          <ul>
            <li>Corporate Governance</li>
            <li>Risk Management</li>
            <li>Leadership Skills</li>
            <li>Finance non-Financial Managers</li>
            <li>Customer Care</li>
            <li>Business Presentations</li>
            <li>Strategy Formulation and Implementation</li>
            <li>IFRS Back to Basic and Updates</li>
            <li>Auditing Update Workshops</li>{' '}
            <li>Quality Control in the Audit Environment</li>
          </ul>

          <h2>Our Vision</h2>
          <p>
            To be a leading, dynamic, vibrant and a center of innovative
            learning and training solutions that add value to our clients in
            Botswana and beyond.
          </p>
          <h2>Our Mission</h2>
          <p>
            To provide proficiently entrepreneurship and leadership skills
            through education, training, market research and professional
            service delivery that meet Botswana and international standards.
          </p>
          <p>
            Training of exceptional quality will be achieved through
            facilitators who are constantly evolving to achieve their highest
            potential and empowering others to do the same.
          </p>

          <h2>Our Objectives</h2>

          <ul>
            <li>To meet clients needs and strive to exceed those needs</li>
            <li>
              To provide first class service to all our valued business partners
            </li>
            <li>To ensure corporate viability for all our business partners</li>
            <li>
              To know our clients business and make their business processes
              understandable
            </li>
            <li>Integrity</li>
            <li>Objectivity</li>
            <li>Professional competence and due care</li>
            <li>Confidentiality</li>
            <li>Professional behaviour</li> <li>To meet community needs</li>
          </ul>
          <h2>Social Responsibility</h2>
          <p>
            The company will always support efforts of non-governmental
            organizations in HIV and AIDS reduction, poverty alleviation and a
            pollution free environment.
          </p>
          <p>
            We are also committed to the development and creation of self-help
            projects and small businesses for the local community.
          </p>
          <ul className="actions">
            <li>
              <Link to="/ourpeople" className="button next">
                Our Proffesionals
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
