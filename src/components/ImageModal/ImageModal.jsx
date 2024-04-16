import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, closeModal, image: { urls: { regular } } }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"

    >
      <img src={regular} alt="Large Preview" />
    </Modal>
  )
}