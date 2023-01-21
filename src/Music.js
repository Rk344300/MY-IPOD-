import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'


export class Music extends Component {
   

    render() {
        return (
            <div style={styles.musicContainer}>
                <div style={styles.list}>
                    <div style={styles.titlebar}>
                        <p style = {{fontWeight:'bold',textAlign:'center'}}>Ipod</p>
                    </div>

                    <ListGroup style={{borderRadius:'0'}}>
                        <ListGroup.Item style ={{border:'0',padding :'0.2rem 0.6rem'}} className={this.props.activeItem === 'AllSongs'? 'active':''}>
                            All Songs {this.props.activeItem === 'AllSongs' ? <span style ={{fontWeight:'bold',float:'right'}}> &gt;</span> : ''}
                            </ListGroup.Item>
                            <ListGroup.Item style ={{border:'0',padding :'0.2rem 0.6rem'}} className={this.props.activeItem === 'Artists'? 'active':''}>
                           Artists {this.props.activeItem === 'Artists' ? <span style ={{fontWeight:'bold',float:'right'}}> &gt;</span> : ''}
                            </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer}>
                </div>
               
            </div>
        )
    }
}

const styles ={
    musicContainer :{
        height : '100%',
        width :'100%',
        display:'flex',

    },
    list :{
        height:'100%',
        width :'50%',
       // backgroundColor:'white',
        borderRadius:'12px 0 0 12px',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1',
    },
    imageContainer :{
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://live.staticflickr.com/4046/4464871872_c22968b6a9_b.jpg")',
        backgroundSize : 'cover',
        backgroundPosition : 'right',
        borderRadius : '0 12px 12px 0'
    },
    titlebar :{
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        paddingBottom : '5px'
    }
}

export default Music
