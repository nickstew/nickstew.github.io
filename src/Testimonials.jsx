import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <aside className="testimonials aside section">
        <div className="section-inner">
          <h2 className="heading">Testimonials</h2>
          <div className="content">
            <div className="item">
              <blockquote className="quote">
                <p><i className="fa fa-quote-left"></i>James is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!</p>
              </blockquote>
              <p className="source"><span className="name">Tim Adams</span><br /><span className="title">Curabitur commodo</span></p>
            </div>
            <p><a className="more-link" href="#"><i className="fa fa-external-link"></i> More on Linkedin</a></p>
          </div>
        </div>
      </aside>
    );
  }
}

export default Testimonials;
