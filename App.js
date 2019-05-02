import React ,{Component} from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';
import { black } from 'ansi-colors';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(                    
            <View style={{
                position:'relative',
                marginTop:"10%",            
                alignSelf: 'center',
                width:300,
                height:350,
                backgroundColor:`rgb(${this.props.red},${this.props.green},${this.props.blue})`
            }} >                                
            </View>                        
        );
    };                           
}    

export default class rnintermediario extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  
            red:0,
            green:0,
            blue:0
        };
        this.convertSingleCode = this.convertSingleCode.bind(this);
        this.rgbToHex = this.rgbToHex.bind(this);
    }

    convertSingleCode(colorValue) {        
        let hexCode = Number(colorValue).toString(16);        

        return (hexCode.length == 1) ? ("0" + hexCode) : hexCode;
    }

    rgbToHex(red, green, blue) {
        return "#" + this.convertSingleCode(red) + this.convertSingleCode(green) + this.convertSingleCode(blue);
    }

  
    render() {
       
        return(
            <View style={styles.body}>
                <View style={styles.textos}>
                    <Text style={styles.texts}>RBG:rgb({this.state.red.toFixed(0)},{this.state.green.toFixed(0)},{this.state.blue.toFixed(0)})</Text>                                
                    <Text style={styles.texts}>Hexadecimal:{this.rgbToHex(this.state.red.toFixed(0), this.state.green.toFixed(0), this.state.blue.toFixed(0))}</Text>
                </View>
                <View style={styles.sliders}>
                    <Text style={styles.red}>Red</Text>
                    <Slider thumbTintColor="#0095ff" minimumTrackTintColor="#0095ff" style={styles.slider} maximumValue={255} minimumValue={0} onValueChange={(v)=>this.setState({red:v})} />                
                    <Text style={styles.green}>Green</Text>
                    <Slider thumbTintColor="#0095ff" minimumTrackTintColor="#0095ff" style={styles.slider} maximumValue={255} minimumValue={0} onValueChange={(v)=>this.setState({green:v})} />                
                    <Text style={styles.blue}>Blue</Text>
                    <Slider thumbTintColor="#0095ff" minimumTrackTintColor="#0095ff" style={styles.slider} maximumValue={255} minimumValue={0} onValueChange={(v)=>this.setState({blue:v})} />                
                </View>
                <Square red={this.state.red.toFixed(0)} green={this.state.green.toFixed(0)} blue={this.state.blue.toFixed(0)} />
            </View> 
        );
    }
}

const styles = StyleSheet.create ({
    body: {
        paddingTop:40,
        flex:1                      
    }, 
    slider: {
        paddingTop:20
    },
    sliders: {
        paddingTop:20
    }, 
    texts: {
        fontSize:25,
        fontWeight:'bold',
        color:"black"
    },
    textos: {
        alignItems:'center',
        paddingTop:0
    },
    red: {
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        color:"rgb(255,0,0)"
    },
    green: {
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        color:"rgb(0,255,0)"
    },
    blue:{
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        color:"rgb(0,0,255)"
    }
}); 