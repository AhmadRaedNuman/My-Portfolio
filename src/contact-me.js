import { Card } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function ContactMe() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        if (!email || !name || !subject || !message) {
            setStatus("Please fill all fields.");
            return;
        }

        emailjs.send(
            "service_ksajumj",
            "template_izy1s1u",
            {
                from_email: email,
                from_name: name,
                subject: subject,
                message: message,
            },
            "qiAiovuzK4KnsjKdO"
        )
        .then(() => {
            setStatus("Message sent successfully!");
            setEmail("");
            setName("");
            setSubject("");
            setMessage("");
        })
        .catch((error) => {
            setStatus("Failed to send the message: " + error.text);
        });
    };

    return (
        <Card className="text-center mx-5">
            <Card.Body>
                <h2>Contact Me</h2>
                <br />

                {/* USE A FORM */}
                <form onSubmit={sendEmail}>
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        className="form-control"
                        name="from_email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                        name="from_name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />

                    <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        name="subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <br />

                    <textarea
                        placeholder="Your message"
                        rows="5"
                        className="form-control"
                        name="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <br />

                    <button 
                        type="submit"
                        className="btn btn-dark"
                        style={{ width: '150px', borderRadius: '10px' }}
                    >
                        Send to Me
                    </button>

                    {status && (
                        <div className="alert alert-info mt-3 d-flex align-items-center" role="alert">
                            <i className="bi bi-magic me-2"></i>
                            {status}
                        </div>
                    )}


                </form>
            </Card.Body>
        </Card>
    );
}

export default ContactMe;
