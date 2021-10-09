import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function ProgressBarChart({user, now, progressInstance}) {
    return (
        <>
        <div className="progress-bar" style={{width:"auto", color:"green"}} >
        {now}
    </div>
    </>
    )
}

export default ProgressBarChart;
