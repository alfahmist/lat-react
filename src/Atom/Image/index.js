import React from 'react';

export default class Image extends React.Component {
    render() {
        let {avatarUrl, name} = this.props.author
        return (
            <img className="Avatar"
            src={avatarUrl}
            alt={name}
        />
        )
    }
}