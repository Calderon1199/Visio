import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This app will detect faces found in images,'}
            </p>
            <p className='f3'>
                {'Give it a try by inserting a URL!'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>       
            </div>
        </div>
    );
}

export default ImageLinkForm