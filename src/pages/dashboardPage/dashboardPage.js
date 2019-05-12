import React from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import css from './dashboardPage.css';

class dashboardPage extends React.Component {
  state = {
    nurseries: [
      { id: 'nursery1', name: 'newAge', landDetails: { location: 'Hogwarts', Area: '500 acres' } },
      {
        id: 'nursery2',
        name: 'oldAge',
        landDetails: { location: 'Hobbit Town', Area: '700 acres' }
      },
      {
        id: 'nursery3',
        name: 'Broomstick',
        landDetails: { location: 'Diagon Alley', Area: '700 acres' }
      },
      {
        id: 'nursery4',
        name: 'Weasleys',
        landDetails: { location: 'Hogsmade', Area: '700 acres' }
      },
      {
        id: 'nursery5',
        name: 'Weasleys',
        landDetails: { location: 'Hogsmade', Area: '700 acres' }
      },
      {
        id: 'nursery6',
        name: 'Weasleys',
        landDetails: { location: 'Hogsmade', Area: '700 acres' }
      }
    ]
  };

  renderNurseryList = () => {
    const { nurseries } = this.state;
    return <Card nurseryDetails={nurseries} />;
  };

  render() {
    return (
      <div className={css.root}>
        <div>
          <Header />
        </div>
        <div className={css.body} id="nur">
          {this.renderNurseryList()}
        </div>
      </div>
    );
  }
}

export default dashboardPage;
