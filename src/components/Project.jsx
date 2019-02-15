import React from 'react';
import PropTypes from 'prop-types';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <style jsx>
          {`
            .card {
              margin-top: 20px;
              color: #19194d;
              text-align: center;
              margin-left: 30px;
              box-shadow: 2px 4px 8px 4px rgba(0, 0, 0, 0.2);
              transition: 0.3s;
              width: 20vw;
              height: 350px;
            }

            .card:hover {
              margin-top: 0;
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
              width: 20vw;
              height: 370px;
              border: 2px solid #19194d;
            }

            .card img {
              height: 40%;
              width: 70%;
              margin: auto;
            }

            .card-title {
              padding-top: 20px;
              padding-bottom: 20px;
              background-color: #19194d;
              color: #fff;
            }
          `}
        </style>

        <div className="card">
          <h2 className="card-title">
            <b>{this.props.title}</b>
          </h2>
          <a target="_blank" href={this.props.link}>
            <img src={this.props.img} />
          </a>
          <div>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Project;
