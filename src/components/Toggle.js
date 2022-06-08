import * as React from 'react';
import {Switch} from 'react-native';

const Toggle = (props) => {
    return (
        <Switch value={props.value} onValueChange={props.openReminder}/>
    );
}

export default Toggle