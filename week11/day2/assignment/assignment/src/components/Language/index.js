import React, {Component} from 'react';
import "./language.css"

class Language extends Component {
    constructor() {
        super()
    }

    render() {
        let languages = this.props.languages.map(language=> {


        return(
            <div>
            <td>{language}</td>
            </div>

        )
    })
    return (
        <div className="Table"><u><label>Languages Available</label></u><table>{languages}</table></div>
    )
    }
}

export default Language