import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'

const icon = 'M322.5,207.5a66.5,66.5,0,1,0-73,66.18V364.5a6.5,6.5,0,0,0,13,0V273.68A66.59,66.59,0,0,0,322.5,207.5ZM256,261a53.5,53.5,0,1,1,53.5-53.5A53.56,53.56,0,0,1,256,261Z'
// const icon2 = "M106.581,61.372c0,19.074-34.539,55.795-34.539,55.795S37.502,80.446,37.502,61.372c0-19.076,15.464-34.539,34.539-34.539  C91.116,26.833,106.581,42.296,106.581,61.372z"
const viewBox = '0 0 512 640'
// const viewBox2 = '0 0 144.083 150'
const pinStyle = {
    cursor: 'pointer',
    fill: '#FF3B3F',
};

class PlacecastPin extends PureComponent {

    render() {
        const {size = 40, onClick} = this.props;

        return (
            <svg height={size} viewBox={viewBox} style={{...pinStyle, transform: `translate(${-size / 2}px,${-size}px)`}} onClick={onClick}>
                <g>
                    <path d={icon}/>
                </g>
            </svg>
        );
    }
}

PlacecastPin.propTypes = {
    size: PropTypes.number,
    onClick: PropTypes.func
}

export default PlacecastPin;