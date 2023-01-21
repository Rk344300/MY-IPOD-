import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export class Artists extends Component {
    render() {
        return (
            <div className="artists-screen" style ={styles.artistScreen}>
                <h1>
                    Artists
                </h1>
                <div>
                <i className="far fa-smile"></i>
                    <FontAwesomeIcon icon={faSmile} style ={styles.fontIcon} />
                </div>

                <div style ={styles.artistScreen}>
                     <h3>
                         Thank You !!!
                     </h3>
                </div>
            </div>
        )
    }
}
const styles = {
     
    artistScreen : {
         textAlign : 'center',

    },
       
    fontIcon : {
        margin :'40px 100px',
        width : '60px',
        height : '60px',
        // color:'yellow'
    }
}
export default Artists
