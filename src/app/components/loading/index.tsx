// components/Loading.js
import styles from './Loading.module.css'; // Estilo opcional
import Image from 'next/image';

const Loading = () => {
    return (
        <div className={`${styles.loadingContainer} transition-all duration-300`}>
            <div className={styles.imageContainer}>
                <Image
                    layout="fill"
                    objectFit="cover"
                    src="/assets/logos/ima.png"	
                    alt="IMA Logo"
                    className={styles.bounce} // Classe para a animação
                />
            </div>
        </div>
    );
};

export default Loading;
