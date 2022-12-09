import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Footer.scss';
import { client } from '../../client';

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

const initContactFormData: ContactData = {
  name: '',
  email: '',
  message: '',
};
const Footer = () => {
  const [formData, setFormData] = useState<ContactData>(initContactFormData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href={`mailto:${process.env.MY_EMAIL}`} className={'p-text'}>
            {process.env.MY_EMAIL}
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href={`tel:${process.env.MY_PHONE}`} className={'p-text'}>
            {process.env.MY_PHONE}
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder={'Your Name'}
              name={'name'}
              value={name}
              onChange={handleChangeInput}
              className="p-text"
            />
          </div>

          <div className="app__flex">
            <input
              type="text"
              placeholder={'Your Email'}
              name={'email'}
              value={email}
              onChange={handleChangeInput}
              className="p-text"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={message}
              placeholder={'Your message'}
              // cols={30}
              // rows={10}
              onChange={handleChangeInput}
              className="p-tex"
            />
          </div>
          <button type={'button'} className="p-text" onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
