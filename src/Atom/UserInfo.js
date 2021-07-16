import React from 'react';
import App from '../App';
import Image from '../Atom/Image';

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Image author={props.author} />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
        )
}

export default UserInfo;