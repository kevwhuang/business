import React from 'react';

function Fallback(): React.ReactElement {
    return (
        <div className="error">
            <h6>200: Waiting for page load.</h6>
        </div>
    );
}

export default Fallback;
