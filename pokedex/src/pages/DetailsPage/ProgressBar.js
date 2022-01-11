import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const ProgressBar = (props) => {
    return (
        <div>
            <Progress percent={props.baseState} status="active" theme={{
                active: {
                    symbol: ' ',
                    color: '#fbc630',
                    trailColor: '#ccc'
                },

            }} />
        </div>
    )
}

export default ProgressBar;