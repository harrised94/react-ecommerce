import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container" style={{ backgroundImage: `url(${urlFor(heroBanner.image)})` }}>
        <div className="banner-content-container">
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.smallText}</h1>
            

            <div>
                <Link href={`/product/${heroBanner.product}`} >
                    <button type="button">{heroBanner.buttonText}</button>
                </Link>
                <div className="desc">
                    <p>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner