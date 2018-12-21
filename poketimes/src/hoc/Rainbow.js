import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * 6)];
    const className = randomColor + '-text'; // css class in materializecss has pattern color-text

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}

export default Rainbow;