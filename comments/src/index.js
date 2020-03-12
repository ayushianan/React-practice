import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

  class Comment extends React.Component{
    constructor(props){
      super(props)
      this.state={
        editing:false
      };
    }
    edit(){
      this.setState({editing:true});
    }
    remove(){
      console.log('Removing comment');
      this.props.deletefromBoard(this.props.index)
    }
    save(){
      this.props.updateCommentText(this.refs.newText.value,this.props.index);
      this.setState({editing: false});
    }
    renderNormal(){
      return(
        <div className="commentConatainer">
          <div classname="commentText">{this.props.children}</div>
          <button onClick={this.edit.bind(this)} className="button-primary">Edit</button>
          <button onClick={this.remove.bind(this)} className="button-primary">Remove</button>
        </div>
      );
    }
    renderForm(){
      return(
          <div classname="commentText">
          <textarea ref="newText" defaultValue={this.props.children}></textarea>
          <button onClick={this.save.bind(this)} className="button-success">Save</button>
        </div>
      );
    }
    render(){
      if(this.state.editing){
        return this.renderForm();
      }else{
        return this.renderNormal();
      }
    }
  }

  export
  default class Board extends React.Component{
    constructor(props){
      super(props)
      this.state={
        comments:[]
      };
    }
    add(text){
      var arr =this.state.comments;
      arr.push(text);
      this.setState({comments: arr})
    }
    updateComment(newText,i){
      //console.log('Updating comment');
      var arr = this.state.comments;
      arr[i]=newText;
      this.setState({comments:arr})
    }
    removeComment(i){
      //console.log('Removing comment: '+ i);
      var arr = this.state.comments;
      arr.splice(i,1);
      this.setState({comments:arr})
    }
    eachComment(text,i) {
      return(
        <Comment key={i} index={i} updateCommentText={this.updateComment.bind(this)} deletefromBoard={this.removeComment.bind(this)}>
          {text}
        </Comment>
            );
    }
    render(){
      return(
        <div>
        <button onClick={this.add.bind(this, 'Bacon tuna')} classname="button-info create">Add New</button>
          <div classname="board">
              {this.state.comments.map(this.eachComment.bind(this))}
          </div>
          </div>
      );
    }
  }



ReactDOM.render(<Board />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
