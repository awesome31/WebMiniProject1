import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Rohan"
          timeAgo="Today at 4:45pm"
          comment="Nice post man!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <CommentDetail
        author="Rohit"
        timeAgo="Yesterday at 6:40pm"
        comment="Poor grammar :("
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
