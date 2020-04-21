import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Welcome to our website.</h1>
      </header>
      <div className="content">
        <p>
          {' '}
          We are a firm of Chartered Accountants in South Africa, specialising
          in: External and Internal Auditing, Accounting and Advisory Services.
          We started our operations in 2009.
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
