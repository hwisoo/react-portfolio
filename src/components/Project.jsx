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
              text-align: center;
              margin-left: 30px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              transition: 0.3s;
              width: 40%;
            }

            .card:hover {
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            }

            .card img {
              width: 90%;
            }
          `}
        </style>
        <h1>Projects</h1>

        <div className="card">
          <a target="_blank" href={this.props.link}>
            <h2>
              <b>{this.props.title}</b>
            </h2>
            <img src={this.props.img} />
            <div>
              <p>Description: {this.props.description}</p>
            </div>
          </a>
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
