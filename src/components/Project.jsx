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
