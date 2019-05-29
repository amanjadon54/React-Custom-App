import React from 'react';

import { Button } from '@blueprintjs/core';
import CreateNurseryDialog from 'components/CreateNurseryDialog';
import Card from 'components/Card';
import Layout from 'components/Layout';
import css from './dashboardPage.css';

class dashboardPage extends React.Component {
  state = {
    isDialogOpen: false,
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
      }
    ]
  };

  renderNurseryList = () => {
    const { nurseries } = this.state;

    return <Card nurseryDetails={nurseries} />;
  };

  handleDialogOpen = () => this.setState({ isDialogOpen: true });

  handleDialogClose = () => this.setState({ isDialogOpen: false });

  render() {
    const { isDialogOpen } = this.state;
    return (
      <Layout className={css.root} PageTitle="Dashboard">
        <header>
          <Button onClick={this.handleDialogOpen} className={css.create} icon="new-object">
            Create New Nursery
          </Button>
        </header>
        <div className={css.nur}>{this.renderNurseryList()}</div>
        <CreateNurseryDialog isOpen={isDialogOpen} onClose={this.handleDialogClose} />
      </Layout>
    );
  }
}

export default dashboardPage;
