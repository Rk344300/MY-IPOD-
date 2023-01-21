import React, { Component } from 'react'


 class AllSongs extends Component {

    constructor(){
        super();
        this.state = {
            check: true
        }
    }

   
    componentDidMount(){
        let self = this;
        self.props.audio.play();

       this.setState({
           check:true
       })

        self.props.audio.addEventListener("timeupdate",function(){
            console.log('inside eventListerner')
            console.log(self);
            if(self.state.check){
                console.log('inside if');
                var pos = self.props.audio.currentTime/self.props.audio.duration;
                self.updateTime();
                let fill = document.getElementById("fill");
                console.log('fill',fill);
                if(fill !== null){
                    fill.style.width = pos*100 + "%";
                }
            }
        })
    
        
    }


    updateTime = () =>{
       
        this.setState({
            audio : this.props.audio
        })

    }


    componentWillUnmount(){
        this.setState({
            check:false
        })
             this.props.audio.pause();

    }
   
    render() {
        let audio = this.props.audio;
        console.log('audio',audio);
        return (
            <div style ={styles.musicContainer}>
                <div style={styles.titlebar}>
                        <p style={{fontWeight:'bold' ,textAlign:'center'}}>Ipod</p>
                       
                </div>
                <div style={styles.infoContainer}>
                    <img style={styles.image} src="https://cdns-images.dzcdn.net/images/artist/4c1bfb589c432b2c82aa0eeb04c52f1b/500x500.jpg"></img>
                    <div style={styles.subInfoContainer}>
                        <h4 style={{marginBottom:'0.5rem'}}>Despacito</h4>
                        <p style={{marginBottom:'0'}}> Luis Fonsi </p>
                        <p>Shawn Mendes</p>
                    </div>
                 </div>  
                 <div style={styles.statusBar}>
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                </div>
                
            </div>

            
        );
    }
}

const styles = {
    musicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection :'column',
    //    backgroundColor:'white',
       borderRadius:'12px'
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    infoContainer: {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfoContainer : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
        alignSelf : 'center'
    },
    titlebar :{
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px'
    }

}

export default AllSongs

