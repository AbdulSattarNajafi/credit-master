import { useState, useEffect } from 'react';

interface WindoDimensionsType {
    width: number;
    height: number;
}

function getWindowDimensions(): WindoDimensionsType {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export const useWindowDimensions = (): WindoDimensionsType => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};
