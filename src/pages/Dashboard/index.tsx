import React from 'react';
import { Title, Form } from './styles';
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
        </>
    )
};
