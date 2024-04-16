import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, image: { urls: { regular }, alt_description } }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"

    >
      <img src={regular} alt={alt_description} />
    </Modal>
  )
}