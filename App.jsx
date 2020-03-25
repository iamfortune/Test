import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello World</h1>
            </div>
        )
    }
}

if(Meteor.isClient) {
    Meteor.startup(function(){
        React.render(<App />)
    }) 
}