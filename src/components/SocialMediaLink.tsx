import { type ReactNode } from 'react';

interface SocialMediaLinkProps {
    link: string;
    children: ReactNode; 
}

export const SocialMediaLink = ({ link, children }: SocialMediaLinkProps) => {
    return (
        <a 
            className="flex rounded-full size-10 bg-gray-200 items-center justify-center hover:bg-gray-600 transition-colors"
            href={link}
            target="_blank" 
            rel="noreferrer"
        >
            {children}
        </a>
    );
};