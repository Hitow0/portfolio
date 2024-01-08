'use client'
import React from 'react';

const Footer: React.FC = () => {
    const redirectToGithub = () => {
        window.location.href = 'https://github.com/Hitow0';
    };

    const redirectToGitlab = () => {
        window.location.href = 'https://gitlab.univ-artois.fr/nicolas_blart';
    };

    return (
        <footer>
            <div>
                <p>Copyright © Nicolas Blart</p>
            </div>
            <div className={'social'}>
                <button onClick={redirectToGithub}><img style={{width:'3vw'}} src={'./assets/social/github.svg'} alt={'GitHub'}/> </button>
                <button onClick={redirectToGitlab}><img style={{width:'3vw'}} src={'./assets/social/gitlab.svg'} alt={'GitLab'}/></button>
            </div>
        </footer>
    );
};

export default Footer;