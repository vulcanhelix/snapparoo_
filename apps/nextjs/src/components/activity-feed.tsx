import React from 'react';
import * as Icons from "@saasfly/ui/icons";

const activities = [
  { icon: 'Deploy', title: 'Easy Deploy', description: 'Deploy your app with ease', time: '2m ago' },
  { icon: 'Mail', title: 'New Emails', description: 'Create beautiful emails', time: '5m ago' },
  { icon: 'User', title: 'User signed up', description: 'Auth, simple and clean', time: '10m ago' },
  { icon: 'CreditCard', title: 'Payment received', description: 'Stripe subscription', time: '15m ago' },
];

export const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center">
            <div className={`bg-${activity.icon.toLowerCase()}-500 rounded-full p-2 mr-3`}>
              {React.createElement(Icons[activity.icon], { className: "h-5 w-5 text-white" })}
            </div>
            <div>
              <h4 className="font-semibold">{activity.title}</h4>
              <p className="text-sm text-gray-500">{activity.description}</p>
            </div>
            <span className="ml-auto text-xs text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};