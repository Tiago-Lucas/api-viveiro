import React from 'react';
import {Container, AddNew, TextButtonAdd} from './home-styles' 
import List from '../../components/List/List.component';
import MyModal from '../../components/modal/modal.component';

const Home = () => {
    return(
        <Container>
          <List/>

            <AddNew>
                <MyModal/>
            </AddNew> 
        </Container>
    )
}

export default Home;
