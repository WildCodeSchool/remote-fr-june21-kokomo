import CocktailList from './CocktailList';
import Footer from './Footer';
import Header from './Header';

import './Home.css';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';


const Home = () => {

    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
          }
        setOpen(false);
    }

    
    const body = (
        <div className='modal'>
            <p className='modal-text'>Vous devez avoir 18 ans ou + pour accéder à ce site</p>
            <div className='modal-buttons'>
                <button className='capiche' onClick={handleClose}>Je certifie avoir au moins 18 ans</button>
            </div>
        </div>
    )

    return (
        <> 
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <CocktailList />
            <Footer />
        </>
    )
}

export default Home;
