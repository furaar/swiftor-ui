import React, { useEffect, useState } from 'react';

const MobileDashboardNotSupported = () => {
    const [marginTop, setMarginTop] = useState(0);

    useEffect(() => {
        const calculateMarginTop = () => {
            const viewportHeight = window.innerHeight;
            const messageHeight = document.getElementById('message').offsetHeight;
            const calculatedMarginTop = (viewportHeight - messageHeight) / 2;
            setMarginTop(calculatedMarginTop);
        };

        calculateMarginTop();

        window.addEventListener('resize', calculateMarginTop);

        return () => {
            window.removeEventListener('resize', calculateMarginTop);
        };
    }, []);

    return (
        <div
            id="message"
            style={{ textAlign: 'center', marginTop: `${marginTop}px` }}
        >
            <h2>Sorry, but the mobile dashboard isn't supported <span className="text-primary font-bold mb-3">yet.</span></h2>
            <p>Please <span className="text-primary font-bold mb-3">use a desktop</span> or tablet device to access the dashboard.</p>
        </div>
    );
}

export default MobileDashboardNotSupported;
