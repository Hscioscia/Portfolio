import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
window.Swal = Swal;

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (form.current.checkValidity()) {
            emailjs
                .sendForm(
                    "service_niwe809",
                    "template_w0r90wd",
                    form.current,
                    "X5YhU8gsbomddCWin"
                )
                .then((result) => {
                    console.log(result.text);
                    form.current.reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Enviado!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch((error) => {
                    console.error("Error:", error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Al intentar enviar el correo electronico',
                    })
                });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Por favor',
                text: 'Complete todos los campos correctamente',
            })
        }
    };

    return (
        <section className="contactSection">
            <div id="contact">
            <h1 className="contactTitle"> Contacto </h1> <br></br>
                <span className="contactDesc">
                Contáctame aquí y recibirás una respuesta rápida! ¡Gracias por tu interés!
                </span>
                <form className="contactForm" ref={form}>
                    <div className="form-container">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="name"
                                    placeholder="Nombre"
                                    name="your_name"
                                    required
                                />
                                <input
                                    type="email"
                                    className="email"
                                    placeholder="Email"
                                    name="your_email"
                                    required
                                />
                                <textarea
                                    className="message"
                                    name="msg"
                                    cols="40"
                                    rows="6"
                                    placeholder="Dejame tu mensaje"
                                    required
                                ></textarea>
                                <button type="submit" className="form-submit-btn" onClick={sendEmail}>Enviar</button>                            
                            </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
