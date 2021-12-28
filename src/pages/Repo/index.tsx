import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepoInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

interface RepositoryParams {
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  React.useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then(response => console.log(response.data));

    api
      .get(`repos/${params.repository}/issues`)
      .then(response => console.log(response.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Gitcollection" />
        <Link to="/">
          <FiChevronLeft /> Voltar
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img src="" alt="Marcelly Isis" />
          <div>
            <strong>IsisG13/GitCollection</strong>
            <p>This project was bootstrapped with </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1938</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>406</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>28</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>ruifoefe forjefe fjeofe</strong>
            <p>k. r,je lferfjlekwhdewjwkdh kefed</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
