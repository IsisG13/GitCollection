import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Gitcollection" />
            <Title>Catálogo de repositórios do Github</Title>

            <Form>
                <input placeholder="usermane/repository_name" />
                <button type="submit">Buscar</button>
            </Form>

            <Repos>
                <a href="/repositories">
                    <img
                        src="https://avatars.githubusercontent.com/u/94871953?s=400&u=25088c025fec67c83f39c4e19366bd05195f6000&v=4"
                        alt="repositorio"
                    />
                    <div>
                        <strong>IsisG13/GitCollection</strong>
                        <p>Repositorio do mine curso gratuito de reactjs</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

            </Repos>
        </>
    )
};
