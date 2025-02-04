import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contactBanner from '../assets/images/contact_banner.png';
import contactMap from '../assets/images/contact-map.png';
import telephone from '../assets/logo/telephone.png';
import email from '../assets/logo/email.png';
import location from '../assets/logo/location.png';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = '请输入名字';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = '请输入姓氏';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = '请输入留言内容';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="contact-container">
      <Header />
      <div className="contact-banner" style={{ backgroundImage: `url(${contactBanner})` }}>
        <div className="banner-content">
        </div>
      </div>
      <div className="contact-info-section">
        <div className="contact-card">
          <img src={telephone} alt="telephone" className="contact-icon" />
          <h2>Phone</h2>
          <p>+1 (555) 123-4567</p>
          <a href="tel:+15551234567">Call now</a>
        </div>
        <div className="contact-card">
          <img src={email} alt="email" className="contact-icon" />
          <h2>Email</h2>
          <p>info@thanstudio.com</p>
          <a href="mailto:info@thanstudio.com">Send email</a>
        </div>
        <div className="contact-card">
          <img src={location} alt="location" className="contact-icon" />
          <h2>Location</h2>
          <p>123 Design Street, Creative City</p>
          <a href="#map">View map</a>
        </div>
      </div>
      <div className="contact-form-section">
        <div className="form-container">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <button
              type="submit"
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? '发送中...' : '发送消息'}
            </button>
            {submitStatus === 'success' && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                消息发送成功！
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                发送失败，请稍后重试。
              </motion.div>
            )}
          </motion.form>
        </div>
        <div id="map" className="map-container">
          <img src={contactMap} alt="Location map" className="map-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;