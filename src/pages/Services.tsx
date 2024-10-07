import React from 'react';
import { Layout } from '../components/Layout';
import { ServiceList } from '../components/ServiceList';

export const Services: React.FC = () => {
    return (
        <Layout>
            <ServiceList />
        </Layout>
    );
};
