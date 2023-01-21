import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'


export class Home extends Component {
   
    render() {
        return (
            <div id="homeScreen" style ={styles.homeScreen}>
                <div id="List" style={styles.list}>
                    <div id="title" style={styles.titlebar}>
                        <p style={{fontWeight:'bold',textAlign:'center'}}>Ipod</p> 
                    </div>
                    <ListGroup style={{borderRadius:'0'}}>
                    <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='NowPlay'?'active':''}>
                            Now Play {this.props.activeItem==='NowPlay'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Music'?'active':''}>
                            Music {this.props.activeItem==='Music'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Game'?'active':''}>
                            Games {this.props.activeItem==='Games'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Settings'?'active':''}>
                            Settings {this.props.activeItem==='Settings'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div >
                <div style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        )
    }
}

const styles = {
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    list :{
       // border :'1px solid black',
        height : '100%',
        width : '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1',
        //  backgroundColor: 'white',
         borderRadius:'12px 0 0 12px'
    },
    imageContainer : {
       // border:'1px solid red',
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://live.staticflickr.com/4046/4464871872_c22968b6a9_b.jpg")',
        backgroundSize : 'cover',
       
         backgroundPosition : 'right',
        borderRadius : '0 12px 12px 0'
    },
    titlebar:{
        border:'1px solid green',
        width : '100%',
        height : '12%',
        backgroundColor: 'lightGrey',
        color :'black',
        borderBottom : '1px solid black',
        borderRadius: '12px 0 0 0'
        

    }
}
export default Home
