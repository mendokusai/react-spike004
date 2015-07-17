var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, react. This is CommentBox.
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('contents')
);