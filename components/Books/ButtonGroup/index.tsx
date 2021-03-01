import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles'
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function ButtonGroup() {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            height: 65,
            backgroundColor: '#292d36',
            borderRadius: 10
        }}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', minWidth: '33%'}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name={"diamond-stone"} size={18} color={"#fa784a"}/>
                    <Text style={{color: 'white'}}> Claim</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', minWidth: '33%'}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name={"target"} size={18} color={"#fa784a"}/>
                    <Text style={{color: 'white'}}> Get Point</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', minWidth: '33%'}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name={"credit-card"} size={18} color={"#fa784a"}/>
                    <Text style={{color: 'white'}}> My Card</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
