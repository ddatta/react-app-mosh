//two ways to create a component a class or function . but its more popular to use a function based component
function Message() {
  const name = "Mosh";
  //jsx
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
