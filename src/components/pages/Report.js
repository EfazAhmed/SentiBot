import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Index.css'

const Report = () => {

    const { state } = useLocation();

    return (
        <div className="DashboardBody">
            <div className="DashboardClass">

                <div className="TextModule">
                    
                    <p>{state}</p>
                    
                </div>

                <div className="CorrectionModule">

                </div>

                <div className="VerdictModule">
                </div>

                <div className="GraphModule">
                </div>

            </div>
        </div>
        
    )
}

export default Report;
