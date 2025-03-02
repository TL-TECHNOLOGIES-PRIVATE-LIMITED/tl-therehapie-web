import React from "react";

export const ContactMap = () => {
  return (
    <div className="td-map-area fix">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="td-contact-map-box p-relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.2687572101895!2d55.370070324083414!3d25.26123857910621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db24a6724a1%3A0x385f6bd66eda131c!2sdu%20-%20Dubai%20Airport%20Freezone%20Dafza!5e1!3m2!1sen!2sin!4v1740654536468!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* <div className="td-contact-map-logo">
                <h3>theRehapie</h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
