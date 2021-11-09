import RectangleSelection from "react-rectangle-selection";
import React from "react";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            origin: [0, 0],
            target: [0, 0],
        };
    }

    handleChange = (e) => {
        this.setState({ value: URL.createObjectURL(e.target.files[0]) });
    }

    render() {
        return (
            <div id="mainDiv">

                <div id="secDiv">
                    <h1>React Image Selector App</h1>
                    <input id="input" type="file" onChange={(e) => this.setState({ value: URL.createObjectURL(e.target.files[0]) })} />
                    <h3> Origin Point (x: <span id="oxspan"></span>,y: <span id="oyspan"></span>) </h3>
                    <h3> Target Point (x: <span id="txspan"></span>,y: <span id="tyspan"></span>)</h3>
                    <h3> height : <span id="hspan"></span></h3>
                    <h3> width : <span id="wspan"></span></h3>
                </div>

                <RectangleSelection id="thirdDiv"
                    onSelect={(e, coords) => {
                        this.setState({
                            origin: coords.origin,
                            target: coords.target,
                        }, () => {

                            let ox = document.querySelector('#oxspan');
                            let oy = document.querySelector('#oyspan');
                            let tx = document.querySelector('#txspan');
                            let ty = document.querySelector('#tyspan');
                            let height = document.querySelector('#hspan');
                            let width = document.querySelector('#wspan');

                            ox.innerHTML = coords.origin[0];
                            oy.innerHTML = coords.origin[1];
                            tx.innerHTML = coords.target[0];
                            ty.innerHTML = coords.target[1];
                            height.innerHTML = Math.abs(coords.origin[1] - coords.target[1]);
                            width.innerHTML = Math.abs(coords.origin[0] - coords.target[0]);

                        });
                    }}
                    style={{
                        // backgroundColor: "rgba(0,0,220,0.4)",
                        backgroundColor: "rgba(204, 204, 37,0.4)",
                        borderColor: "yellow"
                    }}
                >
                    <br/>
                    {this.state.value && <img id="image" src={this.state.value} alt="image" />}
                </RectangleSelection>
            </div>
        );
    }
}
export default Home;