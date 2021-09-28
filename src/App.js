import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <hr/>
      <Footer />
    </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav class="navbar fixed-top navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main class="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec erat
          mi. Donec ultrices eu lectus in commodo. Etiam quis ullamcorper magna.
          Duis euismod ex pulvinar felis consequat condimentum. Morbi fermentum
          ipsum orci, non consectetur eros dapibus vel. Mauris pellentesque in
          nunc ac blandit. Fusce rutrum hendrerit velit eget ultrices. Duis orci
          risus, pharetra non ullamcorper sed, faucibus quis ex. Phasellus
          commodo tellus eros, eget laoreet nulla tincidunt id. Aenean eget
          purus ut nisl posuere bibendum ut in lectus. In auctor augue suscipit
          dolor congue accumsan.
        </p>

        <p>
          Vestibulum id ligula sem. Sed quis lacus metus. Nulla placerat vitae
          ante sit amet molestie. Donec lacinia luctus commodo. Suspendisse et
          iaculis diam, sed porttitor tortor. Maecenas nec felis massa. Proin
          eget facilisis arcu.
        </p>

        <p>
          Nam tortor nunc, tincidunt ac odio a, semper vulputate elit.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nunc ac laoreet nisl, sed sagittis massa. Nulla
          lobortis odio sed felis condimentum, sed suscipit justo mollis.
          Maecenas at ullamcorper metus, at ullamcorper sapien. Sed consectetur
          nibh non purus pulvinar, sed semper erat consequat. Aliquam
          pellentesque, sem id commodo tempus, eros diam porta odio, id lacinia
          purus nunc vel purus. Praesent est metus, pharetra sit amet nisi et,
          venenatis dignissim libero. Nunc scelerisque mi nec eros pulvinar
          tincidunt. Aliquam ac feugiat diam.
        </p>
      </main>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer class="container">
        Footer
      </footer>
    );
  }
}

export default App;
