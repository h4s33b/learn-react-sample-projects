import React, {Component} from 'react';
import Link from '../link/link';

class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menus: []
        }
    }

    componentDidMount() {
        fetch('menuData.json', {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            headers: new Headers({'Content-Type': 'text/plain'})
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({menus: data.menus})
        })
    }

    render() {
        return (
            <div>
                {this
                    .state
                    .menus
                    .map((v, i) => {
                        return <div key={i}><Link label={v}/></div>
                    })
}
            </div>
        );
    }
}

export default Menu;