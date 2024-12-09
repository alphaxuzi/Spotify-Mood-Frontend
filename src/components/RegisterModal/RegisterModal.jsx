import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ activeModal, onClose }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      })
    
      const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }))
      }

  return (
    <ModalWithForm
      activeModal={activeModal ? "login" : ""}
      buttonText={"Register"}
      title={"Sign up"}
      onClose={onClose}
    >
       <label className="modal__label">
        <p className="modal__input_header">Email</p>
        <input
          placeholder="Email"
          type="email"
          className="modal__input"
          id="email-register"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </label>
      <label className="modal__label">
        <p className="modal__input_header">Password</p>
        <input
          placeholder="Password"
          type="password"
          className="modal__input"
          name="password"
          id="password-register"
          onChange={handleChange}
          value={formData.password}
        />
      </label>
      <label className="modal__label">
        <p className="modal__input_header">Name</p>
        <input
          placeholder="Name"
          type="text"
          className="modal__input"
          id="name-register"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <label className="modal__label">
        <p className="modal__input_header">Image</p>
        <input
          placeholder="Image URL"
          type="url"
          className="modal__input"
          id="imageURL-register"
          name="avatar"
          onChange={handleChange}
          value={formData.avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
