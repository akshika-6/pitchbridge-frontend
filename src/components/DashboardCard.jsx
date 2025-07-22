import React from 'react';

const DashboardCard = ({ icon: Icon, title, value, color }) => {
  return (
    <div className={`flex items-center p-5 rounded-2xl shadow-md ${color} text-white`}>
      <div className="mr-4">
        <Icon size={32} />
      </div>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
