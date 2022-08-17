import React from 'react';
import ContactSection from '../components/Contact/ContactSection';
import Form from '../components/Contact/Form';
import Links from '../components/Contact/Links';
import MapSection from '../components/Contact/MapSection';

const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection />
            <MapSection />
        </React.Fragment>
    );
}

export default Contact;
