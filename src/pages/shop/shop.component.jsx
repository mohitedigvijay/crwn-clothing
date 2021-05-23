import React , {Component} from 'react';
import ShopData from './shop-collection.component';
import CollectionPreview from '../../component/collection-preview/collection-preview.component';
import './shop.style.scss';

class Shop extends Component{
    constructor(){
        super();
        this.state={
            collections : ShopData
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-component">
                {
                    collections.map(({id , ...collectionProps})=>(
                   <CollectionPreview id={id} {...collectionProps}/>
                ))
            }
            </div>
        )
    }
}
export default Shop;