import React, {Component} from 'react';
import axios from 'axios';
import "./zipCode.css";

class ZipCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            data: [],

        };
    }


    handleChange = (event) => {
console.log(event.target.value)
        this.setState({
            zip: event.target.value
            
        });
    }

    componentDidMount = () => {
        
    }

    componentDidUpdate = (prevProps, prevState) => {

        if(prevState.zip !== this.state.zip) {

            this.componentDidMount();
        }

    }
    handleClick=(e)=>{
        
        e.preventDefault()
        axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`)
        .then(response => {
           
            this.setState({ 
                data: response.data});

        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            //placeholder
            <>
                <form >
                    Enter a Zip Code <br/>
                    <input type="text" name="zip" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Submit</button>

                </form>
                {this.props.name}
                {this.state.data.map(data =>
                    <div key={data.RecordNumber} className="zip">
                         <div className="zipCard">
                <ul>
                    <h3> {this.data.city}, {this.props.state}</h3>
                    <li> State: {this.props.state} </li>
                    <li> Location: ({this.props.latitude}, {this.props.longitude}) </li>
                    <li> Population (estimated): {this.props.population} </li>
                    <li> Total Wages: {this.props.wages} </li>
                </ul>
            </div>
                    </div>
                )}
            </>
        );
    }
};

export default ZipCode;