import React from 'react';

interface BarProps {
    percentage: number;
}

const Bar: React.FC<BarProps> = ({ percentage }) => {
    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    return (
        <div style={{
            width: '29vw',
            height: '1vw',
            backgroundColor: '#fff',
            borderRadius: '5px',
            overflow: 'hidden',
        }}>
            <div
                style={{
                    width: `${clampedPercentage}%`,
                    height: '100%',
                    backgroundColor: '#1875FF',
                    transition: 'width 0.5s ease',
                }}
            />
        </div>
    );
};

export default Bar;
