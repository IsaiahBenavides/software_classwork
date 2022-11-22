const React = require(`react`);

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Fruit</h1>
                <form action="/fruits" method="POST"></form>
            </div>
        )
    };
};

module.exports = New