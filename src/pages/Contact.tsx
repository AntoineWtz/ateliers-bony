import React from 'react';
import { Layout } from '../components/Layout';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
    return (
        <Layout>
            <ContactForm />
        </Layout>
    );
};
