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
              color: #19194d;
              text-align: center;
              margin-left: 30px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              transition: 0.3s;
              width: 20%;
            }

            .card:hover {
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
              width: 22%;
              border: 2px solid #19194d;
            }

            .card img {
              width: 90%;
            }
          `}
        </style>
        <h1>Projects</h1>

        <div className="card">
          <h2>
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
