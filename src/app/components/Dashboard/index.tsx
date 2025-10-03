import React from 'react';
import LineChart from './LineChart';
import IntroSection from './IntroSection';
import ProductTable from './ProductTable';
import RecentOrderTable from './RecentOrderTable';

const Dashboard = () => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const dataPoints = [1200, 1900, 3000, 2500, 4000, 3500];

  return (
    <>
      <IntroSection />
      <ProductTable />
      <RecentOrderTable />
      <LineChart labels={labels} dataPoints={dataPoints} title="Monthly Sales" />
    </>
  );
};

export default Dashboard;
