import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

// Props to be validated, 'interface' determines type of object
interface PageHeaderProps {
    // props must have a title with string type. 
    // If prop is optional, add '?' to it, like 'title?:'
    title: string; 
}

// PageHeader have a type React.'F'unction'C'omponent with parameter <PageHeaderProps>
// All properties of PageHeader it's in 'props' parameter of arrow function
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                    <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {/* Content of <PageHeader>Content</PageHeader> */}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;