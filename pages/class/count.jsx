import { Component } from "react"
import Count from "../../components/Count";

export default class CountPage extends Component {

    render() {
        return (
            <>
                <Count initialValue={100} step={37}></Count>
            </>
        );
    }

}