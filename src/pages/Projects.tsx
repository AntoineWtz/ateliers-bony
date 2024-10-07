import React from 'react';
import { Layout } from '../components/Layout';
import { ProjectList } from '../components/ProjectList';
import { ContactForm } from '../components/ContactForm';

export const Projects: React.FC = () => {
    return (
        <Layout>
            <ProjectList />
            <ContactForm />
        </Layout>
    );
};
