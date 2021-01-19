import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>User Is Loading...</div>;
    } else {
      return (
        <div className="App">
          <ui>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} | {item.username} | {item.email} |{" "}
                {item.address.city}
              </li>
            ))}
          </ui>
        </div>
      );
    }
  }
}

export default App;
