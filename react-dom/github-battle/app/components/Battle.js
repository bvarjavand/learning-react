var React = require('react');
var PropTypes = require('prop-types');

class PlayerInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState(()=>{
      return{
        username:value
      }
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }
  render(){
    return(
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange} />
          <button
            className='button'
            type='submit'
            disabled={!this.state.username}>
              Submit
          </button>
      </form>
    )
  }
}

PlayerInput.PropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

PlayerInput.defaultProps = {
  label: 'Username',
}

class Battle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playerOneImage: null,
      playerTwoImage: null,
      playerOneName: '',
      playerTwoName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (id, username){
    this.setState(() => {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }

  render(){
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    return (
      <div>
        <div className='row'>
          {!playerOneName && <PlayerInput
            id='playerOne'
            label='Player One'
            onSubmit={this.handleSubmit} />}
          {!playerTwoName && <PlayerInput
            id='playerTwo'
            label='Player Two'
            onSubmit={this.handleSubmit} />}
        </div>
      </div>
    )
  }
}
/*
Battle.PropTypes = {
  playerTwoImage: PropTypes.string.isRequired,
  playerOneImage: PropTypes.string.isRequired,
  playerTwoName: PropTypes.string.isRequired,
  playerOneName: PropTypes.string.isRequired
}
*/
module.exports = Battle;
