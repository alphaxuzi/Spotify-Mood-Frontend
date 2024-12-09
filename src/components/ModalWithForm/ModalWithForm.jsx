import "./ModalWithForm.css";

function ModalWithForm({ activeModal, children, buttonText, title, onClose, onSubmit }) {
  //   children,
  //   title,
  //   buttonText,
  //   isOpen,
  //   onClose,
  //   onSubmit,
  // }) {

  return (
    <div className={`modal ${activeModal ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button onClick={onClose} type="button" className="modal__exit-button"></button>
        <h2 className="modal__header">{title}</h2>
        <form className="modal__form">
            {children}
          <button type="submit" className="modal__submit-button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
