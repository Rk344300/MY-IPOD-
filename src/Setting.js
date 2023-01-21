import React, { Component } from 'react'


export class Setting extends Component {
   
    render() {
        return (
            <div style={styles.settingContainer}>
            <div style ={styles.titlebar}>
                <p style ={{fontWeight:'bold', textAlign: 'center'}}>Ipod</p>
            </div>
           <div style={{width : '100%',height:'90%'}}>
               <img style={styles.pic} src="https://cdn.dribbble.com/users/707433/screenshots/6720160/gears2.gif"></img>
           </div>
        </div>
        )
    }
}
const styles ={
    settingContainer : {
        width:'100%',
        height :'100%',

    },
    pic :{
        height: '100%',
        width :'100%',
        alignItem:'center',
        borderRadius :'12px'
    },
    titlebar :{
        height :'10%',
        width : '100%',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        paddingBottom : '5px'

    }
    
}

export default Setting
