const React = require(`react`);

class Show extends React.Component {
    render(){
        const fruit = this.props.fruit
        return (
        <div>
            <h1>Show Page</h1>
            The {fruit.name} is {fruit.color}. <br></br>
            {fruit.readyToEat ? `It is ready to eat!` : `It is not ready to eat... Don't touch that!`}
        </div>
        );
    }
};

// We can write javascript code inside the curly brackets

module.exports = Show