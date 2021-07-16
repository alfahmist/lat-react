import React from "react";
import Image from './Atom/Image';
import UserInfo from "./Atom/UserInfo";
export default class Comment extends React.Component {
    render(){
        return (
        <div className="Comment">
            <UserInfo author = {this.props.author} />
            <div className="Comment-text">
            {this.props.text}
            </div>
            <div className="Comment-date">
            {this.props.date}
            </div>
        </div>
        )
    }
}