import React from 'react';
import Preferences from './Preferences';
import PreferencesForm from './PreferencesFormContainer';

export const PreferencesParent = props => {
    return (
        <div>
            <Preferences {...props}/>
            <PreferencesForm {...props}/>
        </div>
    )
}
