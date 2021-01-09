import {useEffect} from 'react';
type Props = {
    message: string;
}
function Hello ( {message} : Props) {
    
    useEffect(() => {

        console.log('iniciando o componente!');

    }, []);
    
    return (
        <div>
            <h1>Oi, {message}</h1>
        </div>
    )
}


export default Hello;