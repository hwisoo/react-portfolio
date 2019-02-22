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
              margin-top: 0;
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
              width: 20vw;
              border: 2px solid #19194d;
            }

            .card-title {
              padding-top: 20px;
              padding-bottom: 20px;
              background-color: #bac7f7;

              color: #fff;
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
          isOpen={this.state.isOpen}
          contentLabel="Modal Example"
          link={this.props.link}
          description={this.props.description}
          img={this.props.img}
        >
          <h2>{this.props.project.title}</h2>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
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
