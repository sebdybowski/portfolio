import React from "react";

interface LogoProps {
    main: string | HTMLElement,
    caption: string | HTMLElement,
}

export const Logo = ({ main, caption }: LogoProps) => <header>
    <span>{main}</span>
    <span>{caption}</span>
</header>;
