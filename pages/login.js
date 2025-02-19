import LoginForm from '@/component/Login/Login';
import Layout from '@/component/Layout/Layout';
import { axiosInstance } from '@/utils/axios';
import React from 'react';

function Login({ services }) {
  return (
    <Layout services={services}>
      <LoginForm />
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API or database
  const res = await axiosInstance.get('/services');
  const services = await res.data.services;

  return {
    props: {
      services,
    },
  };
}

export default Login;