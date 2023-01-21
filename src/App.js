import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars,faForward,faBackward,faPlay,faPause } from '@fortawesome/free-solid-svg-icons';
import sound from './assets/music/Despacito.mp3';


import ZingTouch from 'zingtouch';
import './App.css';
import Screen from './Screen';
//  function App() {
 class App extends React.Component{
  
constructor(){
  super();
  this.state ={
    activeItem : 'NowPlay',
    activePage :'Home',
    enter : 0,
    play :true

  }
}
  rotation = () =>{
    
   var container = document.getElementById('container');
   var activeRegion = new ZingTouch.Region(container);
   var val =0;
   var self = this;
   
   this.state.enter = this.state.enter + 1;
        // console.log(this.state.enter)
   
        if(this.state.enter < 2){
               console.log('enter');
               activeRegion.bind(container,'rotate',function(event){
                
                var angle = event.detail.distanceFromLast;
                console.log(angle);

                if(angle < 0){
                  console.log('value',val);
                  val++;
                  if(val === 15){
                      console.log("change state");
                      val = 0;
                      if(self.state.activePage === 'Home'){
                        if(self.state.activeItem === 'NowPlay'){
                            self.setState({
                                activeItem : "Music"
                            })
                        }else if(self.state.activeItem === 'Music'){
                            self.setState({
                                activeItem : "Game"
                            })
                        }else if(self.state.activeItem === 'Game'){
                            self.setState({
                                activeItem : "Settings"
                            })
                        }else if(self.state.activeItem === 'Settings'){
                            self.setState({
                                activeItem : "NowPlay"
                            })
                        }
                    }else if(self.state.activePage === 'Music'){
                        if(self.state.activeItem === 'AllSongs'){
                            self.setState({
                                activeItem : "Artists"
                            })
                      
                        }else if(self.state.activeItem === 'Artists'){
                            self.setState({
                                activeItem : "AllSongs"
                            })
                        }
                    }
                }
            }else{
                console.log('value',val);
                val++;
                if(val === 15){
                    console.log("change state");
                    val = 0;
                    if(self.state.activePage === 'Home'){
                        if(self.state.activeItem === 'NowPlay'){
                            self.setState({
                                activeItem : "Settings"
                            })
                        }else if(self.state.activeItem === 'Music'){
                            self.setState({
                                activeItem : "NowPlay"
                            })
                        }else if(self.state.activeItem === 'Game'){
                            self.setState({
                                activeItem : "Music"
                            })
                        }else if(self.state.activeItem === 'Settings'){
                            self.setState({
                                activeItem : "Game"
                            })
                        }
                    }else if(self.state.activePage === 'Music'){
                        if(self.state.activeItem === 'AllSongs'){
                            self.setState({
                                activeItem : "Artists"
                            })
                        
                        }else if(self.state.activeItem === 'Artists'){
                            self.setState({
                                activeItem : "AllSongs"
                            })
                        }
                    }
                }
            }
            });
    }else{
        console.log("Not allowed to enter")
    }
    
}

homeScreen = () =>{



  if(this.state.activeItem === 'AllSongs' || this.state.activeItem === 'Artists'){
    this.setState({
        activeItem : 'Music',
        activePage : 'Home'
    })
}else{
    this.setState({
        activeItem : this.state.activeItem,
        activePage : 'Home'
    })
}

}

pageChange = () =>{

  if(this.state.activeItem === 'Music'){
     this.setState({
      activeItem : 'AllSongs',
      activePage : this.state.activeItem
     })
  }
  else if(this.state.activeItem === 'NowPlay'){
    this.setState({
      activeItem : 'NowPlay',
      activePage : 'AllSongs'
     })
  }
  else{
    this.setState({
      activeItem : this.state.activeItem,
      activePage : this.state.activeItem
     })
  }
}

toggleButton = () =>{
    if(this.state.activePage === 'AllSongs'){
        if(this.state.play === true){
            this.state.audio.pause();
            this.setState({
                play : false
            })
        }else{
            this.state.audio.play();
            this.setState({
                play : true
            })
        }
        console.log('toggledWorked');
    }
}

componentDidMount(){
    let audio = document.getElementsByClassName("audioElement")[0];
    console.log('audio',audio);
    this.setState({
        audio : audio,
    })
    console.log('state',this.state)
}


   
   render(){
  return (

    <div  style = {styles.appContainer}>
       
       <audio className="audioElement">
           <source src={sound}></source>
       </audio>

     <Screen  activePage={this.state.activePage} activeItem ={this.state.activeItem} audio ={this.state.audio}/>
      
      <div id="container"  style ={styles.wheel} onMouseOver={this.rotation}>
        <div style={styles.buttonContainer}>
          <div style={styles.menu}>
          <FontAwesomeIcon style={styles.ibutton} icon={faBars}  onClick={this.homeScreen}/>
          </div>
        </div>

    



          <div style={styles.buttonContainer}>
            <div style={styles.middle}>

            <FontAwesomeIcon style={styles.ibutton} icon={faBackward}/>
           <div style={{backgroundColor:'black' ,cursor:'pointer', width : '5rem' , height : '5rem' , borderRadius : '50%',}} onClick ={this.pageChange}></div>
           <FontAwesomeIcon style={styles.ibutton} icon={faForward}/>

           </div>
         </div>
         <div style={styles.buttonContainer} onClick={this.toggleButton}>
           <div>
             <FontAwesomeIcon icon={faPlay} style={styles.ibutton} onClick={this.toggleButton}/>&nbsp;<FontAwesomeIcon style={styles.ibutton} icon={faPause} onClick={this.toggleButton}/>
           </div>
      </div>
  
      </div>

    </div> 
  );
}
 }

 const styles ={
    appContainer :{
      height : '33rem',
      width : '20rem',
     backgroundImage: 'radial-gradient(#adb1b5, #4d4f50)',
    // backgroundColor :'lightGrey', 
     margin : '4rem auto',
      display : 'flex',
      flexDirection : 'row',
      flexWrap : 'wrap',
      justifyContent : 'center',
      borderRadius : '24px',
    }, 
      wheel : {
        width : '75%',
        height : '40%',
        margin : '1rem auto',
        backgroundColor : 'lightGrey',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
      width : '85%',
      height : '30%',
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center'
  },
  menu : {
    alignSelf:'center',
    
},
middle: {
  alignSelf:'center',
  width : '100%',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-between'
},
ibutton: {
  
  alignSelf:'center',
  width: '25px',
  height :'25px',
 paddingTop:'10px',
 cursor:'pointer'
  
  

},
      
    }
 

export default App;
