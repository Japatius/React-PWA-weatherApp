import React, {Component} from 'react';

class Weatherform extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.loadWeather}>
                    <div className="input-pos">
                        <input type="text"
                               name="city"
                               className="text-input"
                               placeholder="Enter city"
                        />
                        <br/>
                        {/*<input type="text" name="country" className="form-control" placeholder="Enter country" />*/}
                        <br/>
                        <div className="btn-container">
                            <button className="btn btn-primary btn-lg">Get Weather!</button>
                        </div>
                        <br/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Weatherform;