import * as React from 'react';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { BarChart } from '@mui/x-charts/BarChart';
import registeredCustomers from './Registered_Customers.json';

const chartSetting = {
  yAxis: [{ label: 'Registered Customers' }],
  height: 450,
};

const valueFormatter = (value) => `${value} customers`;

export default function CustomerRegistrationChart() {
  return (
    <BarChart
      dataset={registeredCustomers}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'registered_customers', label: 'Registered Customers', valueFormatter }]}
      grid={{ horizontal: true }}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translateX(-10px)',
        },
        [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 2 },
      }}
      {...chartSetting}
    />
  );
}
