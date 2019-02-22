import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
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
            }

            .card:hover {
              cursor: pointer;
              margin-top: 0;
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
              width: 20vw;
              border: 2px solid #19194d;
            }

            .card-title {
              padding-top: 20px;
              padding-bottom: 20px;
              color: #fff;
            }

            .projectModal {
              color: white;
              background-color: slateblue;
              margin-top: 10vh;
              margin-left: 30vw;
              width: 30vw;
            }

            .projectModal img {
              width: 80%;
            }

            .projectModal a {
              color: white;
            }
          `}
        </style>

        <div
          className="card"
          onClick={() => {
            this.handleOpenModal();
          }}
        >
          <h2 className="card-title">
            <b>{this.props.project.title}</b>
          </h2>
        </div>

        <Modal
          className="projectModal"
          isOpen={this.state.isOpen}
          link={this.props.link}
          description={this.props.description}
        >
          <h2>{this.props.project.title}</h2>
          <img src={this.props.project.img} />
          <br />
          <a href={this.props.project.link} target="_blank">
            {this.props.project.link}
          </a>
          <p>{this.props.project.description}</p>
          <button onClick={this.handleCloseModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Project;
