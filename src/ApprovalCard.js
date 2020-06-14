import React from 'react';

const ApprovalCard = (props) => {
  const { children } = props;
  return (
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extra-content">
        <div class="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
