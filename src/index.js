import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';

import './styles/styles.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Gustavo Luiz',
        avatar: 'https://avatars3.githubusercontent.com/u/22104796?s=460&v=4',
        time: 'há 13 minutos',
        body:
          'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.',
      },
      {
        id: 2,
        name: 'Vera Lumiko',
        avatar:
          'https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/33811081_1446142715489558_1428756068271390720_n.jpg?_nc_cat=111&_nc_ht=scontent.fbfh3-1.fna&oh=6fa8f06405c967417a00d3ce7ea42d98&oe=5D5FBBE3',
        time: 'há 50 minutos',
        body:
          'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d`entre elles a été altérée par l`addition d`humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div>{posts && posts.map(post => <Post key={post.id} data={post} />)}</div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
