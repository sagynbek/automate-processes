import React from 'react';
import { Link } from 'react-router-dom';



export const appNavigation: Array<
  {
    to: string,
    title: string,
    description?: string,
  }
> = [
    {
      to: "/text-into-paragraph",
      title: "Seperate joined words",
      description: "ex: camelCasedText => Camel cased text"
    },
    {
      to: "/change-paragraph-case",
      title: "Fix paragraph cases",
      description: "ex: Upper Cased Text => Upper cased text"
    },
  ];

const DashboardPage = () => {
  return (
    <div>
      <ul className="dashboard-list">
        {appNavigation.map(({ title, to, description }, key) => (
          <li>
            <Link to={to} key={key}>
              {title}
            </Link>
            {description && <em>({description})</em>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;
