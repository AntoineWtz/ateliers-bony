import React from 'react';
import { Layout } from '../components/Layout';
import { HistorySection } from '../components/HistorySection';
import { ContactForm } from '../components/ContactForm';

export const History: React.FC = () => {
    return (
        <Layout>
            <HistorySection />
            <ContactForm />
        </Layout>
    );
};
