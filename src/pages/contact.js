import React from 'react'
import { Link } from 'gatsby'
const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <Link to="/index" className="link primary">
          Our Services
        </Link>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="#">nelson@scotracesa.co.za</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone</h3>
            <span>(000) 000-0000 x12387</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              1234 Somewhere Road #5432
              <br />
              Sandton, ZAR 2000
              <br />
              South Africa
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
