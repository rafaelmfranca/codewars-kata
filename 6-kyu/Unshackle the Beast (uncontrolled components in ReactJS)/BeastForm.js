const React = require("react");

class BeastForm extends React.Component {
  constructor() {
    super();
    this.beastToRelease = { value: this };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    unshackle(this.beastToRelease.value)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} id="beastForm">
        <label>
          <input type="text" id="beastToRelease"/>
        </label>
        <button type="submit" value="Submit" id="submit"/>
      </form>
    )
  }
}