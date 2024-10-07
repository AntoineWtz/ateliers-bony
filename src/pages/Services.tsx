import React from 'react';
import { Layout } from '../components/Layout';
import { ServiceList } from '../components/ServiceList';
import { ContactForm } from '../components/ContactForm';

export const Services: React.FC = () => {
    return (
        <Layout>
            <ServiceList />
            <ContactForm />
        </Layout>
    );
};
