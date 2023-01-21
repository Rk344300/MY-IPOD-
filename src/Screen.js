import React from 'react';
import Artists from './Artists';
import Game from './Game';
import Home from './Home';
import Music from './Music';
import   AllSongs  from './AllSongs';
import Setting from './Setting';



class Screen extends React.Component{

    render(){
      
        
        return (
           <div style={styles.screenCont} id="screenContainer">
               {this.props.activePage === 'Home'?<Home  activeItem ={this.props.activeItem}/> :null}
               {this.props.activePage === 'Music'?<Music  activeItem ={this.props.activeItem}/> :null}
               {this.props.activePage === 'Game'?<Game /> :null}
               {this.props.activePage === 'Settings'?<Setting /> :null}
               {this.props.activePage === 'AllSongs'?<AllSongs audio={this.props.audio} /> :null}
               {this.props.activePage === 'Artists'?<Artists /> :null}
           </div>
        )
    }
}

const styles ={
    screenCont : {
        height : '50%',
        width : '90%',
        marginTop: '20px',
        // backgroundColor : 'lightGrey',
        border :'2px solid black',
        borderRadius:'12px',
        backgroundColor:'white'

        
    }
}

export default Screen;