import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ activeModal, onClose }) {
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
      buttonText={"Login"}
      title={"Login"}
      onClose={onClose}
    >
      <label className="modal__label">
        <p className="modal__input_header">Email</p>
        <input
          placeholder="Email"
          type="email"
          className="modal__input"
          id="email-login"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        <p className="modal__input_header">Password</p>
        <input
          placeholder="Password"
          name="password"
          type="password"
          className="modal__input"
          id="password-login"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
