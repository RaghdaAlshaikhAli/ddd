import React from 'react'
import Block from './Block'

const PersonalInformation = () => {
    return (
        <div className="information">
            <Block text="Pakistan" title="from"/>
            <Block text="3 May -2023" title="Member since"/>
            <Block text="1 hours" title="Avg. Response Time"/>
            <Block text="2 hours" title="Last Delivery"/>
        </div>
    )
}

export default PersonalInformation