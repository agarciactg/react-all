// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Andres'
// };

// const getResult = () => {
//     return 4 + 4;
// }

import PropTypes from 'prop-types';

export const FirstApp = ({ 
    title, 
    subTitle = 'La tierra explota' 
}) => {

    return (
        <>
            <h1>{ title }</h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subTitle + 1 }</p>
        </>
    );
}

FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Andres Garcia',
    title: 'No hay título',
    subTitle: 'No hay subtítulo'
}