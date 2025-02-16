import './NotFound.css'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className='notfound'>
            <div className="notcontainer">
                <div className="notmessage">
                    <h1>¡Oh, valeroso aventurero!</h1>
                    <p>Has tropezado con un sendero olvidado, un camino que se desvanece en la bruma de la Red. En las tierras digitales, donde los bits y bytes danzan al capricho del destino, te has extraviado en los recovecos del ciberespacio.</p>
                    <p>En este paraje digital, donde las páginas son hojas de un libro sin fin, el eco de tus pasos se pierde en el vacío. La página que buscas es como un tesoro oculto bajo la montaña, un misterio que desafía incluso al más intrépido de los exploradores.</p>
                    <p>Pero no desesperes, oh viajero del internet. Recuerda que cada error es solo una nueva oportunidad de descubrimiento. Levanta la vista hacia las estrellas binarias y encuentra el coraje para continuar tu búsqueda. Quién sabe qué maravillas aguardan más allá de este pasadizo equivocado.</p>
                    <p>En el vasto mundo digital, los caminos se entrelazan y las puertas se abren con la llave adecuada. Persiste, oh buscador de conocimiento, y tarde o temprano encontrarás el umbral que te conducirá a tu destino. Por ahora, descansa y contempla la belleza de esta pausa inesperada en tu viaje hacia la red del conocimiento.</p>
                    <Link to='/' >
                        <div className="goBack">
                            <p>Regresar</p>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default NotFound