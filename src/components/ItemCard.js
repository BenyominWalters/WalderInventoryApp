import React from 'react';
import Thumbnail from '../images/ModelingClay.jpg';

const ItemCard = ({ ItemName, Zone, Location, Cabinet, Box, Activities, Keywords, Notes }) => {
    return (
        <div className='item-card center tl w-90 ttc bg-lightest-blue dib br3 p3 ma2 bw2 shaddow-5'>
            <div className='thumbnail fl db w-20 p2'>
                <img className='center db w4 p3' alt='item' src={Thumbnail} />
            </div>
            <div className='fr db p2 w-80'>
                <h2 className='f3 athelas mt0 lh-title'>{ItemName}</h2>
                <div className='f5 pl3 lh-copy measure mt2 mid-gray'>
                    <dl class="f6 lh-title mv2">
                        <dt class="dib b">Zone:</dt>
                        <dd class="dib mh2 gray">{Zone}</dd>
                        <dt class="dib b"> Location:</dt>
                        <dd class="dib mh2 gray">{Location}</dd>
                        <dt class="dib b">Cabinet:</dt>
                        <dd class="dib mh2 gray">{Cabinet}</dd>
                        <dt class="dib b">Box:</dt>
                        <dd class="dib mh2 gray">{Box}</dd>
                    </dl>
                    <dl class="f6 lh-title mv2">
                        <dt class="dib w-20 b">Activities:</dt>
                        <dd class="dib w-80 ml0 gray">{Activities}</dd>
                  
                        <dt class="dib w-20 b">Keywords:</dt>
                        <dd class="dib w-80 ml0 gray">{Keywords}</dd>
                 
                        <dt class="dib w-20 b">Notes:</dt>
                        <dd class="dib w-80 ml0 gray">{Notes}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;