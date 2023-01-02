export default class UserCard{
   constructor(props){
      this.props = props;
      this.outputContainer = document.querySelector('#output');
   }

   render(){
      this.container = document.createElement('div');
      this.container.classList.add('user-card');

      this.username = document.createElement('p');
      this.username.classList.add('username');
      this.username.textContent = `Username: ${this.props.username}`;

      this.avatar = document.createElement('img');
      this.avatar.src = this.props.avatarUrl;

      this.container.append(this.username, this.avatar);
      this.outputContainer.append(this.container);
   }
}