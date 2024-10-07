import React from 'react';
import { Layout } from '../components/Layout';
import { VideoBackground } from '../components/VideoBackground';
import { ServiceList } from '../components/ServiceList';
import { ProjectList } from '../components/ProjectList';
import { HistorySection } from '../components/HistorySection';

export const Home: React.FC = () => {
    return (
        <Layout>
            <VideoBackground />
            <ProjectList />
            <ServiceList />
            <HistorySection />
        </Layout>
    );
};
