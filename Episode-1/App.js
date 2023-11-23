const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world form React!"
);
//Here React.createElement() takes # attributes. 1.HTML Tag name, 2.HTML attributes, 3.Data Inside the Tag.

console.log(heading); //💫#It Returns Nothing But a Object.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //💫#Here render Mehtod Basically rendaring the Object to the Dom as a HTML Format.

// Create Nested Element in React

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This First Children of First Child"),
    React.createElement("h2", {}, "This Secound Children of First Child"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This First Children of 2nd Child"),
    React.createElement("h2", {}, "This Secound Children of 2nd Child"),
  ]),
]);
console.log(parent);

const render_root = ReactDOM.createRoot(document.getElementById("root1"));

render_root.render(parent);
