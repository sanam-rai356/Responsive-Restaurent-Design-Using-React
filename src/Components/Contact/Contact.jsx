import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contactSection" id="contact">
        <h3 className="heading">
          <span>CONTACT</span> US
        </h3>

        <div className="contact_Details">
          <h4>GET IN TOUCH</h4>
          <form>
            <div className="contactDiv">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="FullName" />
            </div>

            <div className="contactDiv">
              <i class="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>

            <div className="contactDiv">
              <i class="fa-solid fa-phone"></i>
              <input type="text" placeholder="Number" />
            </div>
            <button className="mainBTN">Contact Now</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
