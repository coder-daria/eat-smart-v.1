import React from 'react';
import Preferences from './Preferences';
import PreferenceForm from './PreferenceForm';

export const PreferencesParent = props => {
    return (
        <div>
            <Preferences {...props}/>
            <PreferenceForm {...props}/>
        </div>
    )
}
