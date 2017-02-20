import React, { Component } from 'react';
import App from './App';
import {
    Link
} from 'react-router';

const Copy = () => {
    return <p>Please click on a book to view details in a modal. You can copy/paste the link of
the modal. The link will open book on a separate page.</p>
}


class Index extends Component {
    PRODUCTS = [];
    constructor(props){
        super(props);
        this.PRODUCTS = this.props.route.products;
    }
    render() {
        return (
            <div>
                <Copy />
                <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
                <div>
                    {this.PRODUCTS.map(picture => (
                        <Link key={picture.id}
                            to={{
                                pathname: `/products/${picture.id}`,
                                state: {
                                    modal: true,
                                    returnTo: this.props.location.pathname
                                }
                            }
                            }>
                            <img style={{ margin: 10 }} src={picture.src} height="100" />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Index;