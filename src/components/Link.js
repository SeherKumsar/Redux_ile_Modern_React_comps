import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) { // ilk parametre gideceği yol, ikinci parametre gösterilecek metin
    const { navigate } = useContext(NavigationContext);
    
    const handleClick = (event) => {
        event.preventDefault();

        navigate(to);
    };
    
    return (
        <a onClick={handleClick}>{ children }</a>  // a etiketi içerisine href parametresi ile gideceği yol, children parametresi ile gösterilecek metin
    );
}

export default Link;