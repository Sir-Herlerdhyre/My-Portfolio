// Component: PageHeaderContent
// Description: Reusable component for rendering section headers with an icon.

import './Styles.css';

const PageHeaderContent = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
