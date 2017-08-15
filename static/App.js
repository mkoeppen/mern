var contentNode = document.getElementById("contents");
var components = React.createElement(
  "h1",
  { className: "headline" },
  "Hello World!"
);
ReactDOM.render(components, contentNode);