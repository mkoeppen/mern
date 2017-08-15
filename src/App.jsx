const contentNode = document.getElementById("contents");

const continents = ["Africa","America","Asia","Australia","Europe"];
const message = continents.map(c => `Hello ${c}!`).join(" ");

//const components = <h1 className="headline">Hello World!</h1>;
const components = <p>{message}</p>;
ReactDOM.render(components, contentNode);