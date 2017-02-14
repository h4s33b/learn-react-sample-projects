import React, { Component } from 'react';
import Link from '../link/link';

class Menu extends Component {
    render() {
        let menus = ['Home',
            'About',
            'Services',
            'Portfolio',
            'Contact us'
            ]
        return (
            <div>
                {
                    menus.map((v, i) => {
                        return <div key={i}><Link label={v}/></div>
                    })
                }
            </div>
        );
    }
}

export default Menu;