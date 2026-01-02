"use client"

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
    const { theme } = useTheme();
    return (
        <div
            className={"w-full h-8"}
            style={{ backgroundColor: theme.colors.primary }}
        >
        </div>
    );
};

Header.propTypes = {

};

export default Header;
