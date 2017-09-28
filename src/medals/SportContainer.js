import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SportStore from './flux/SportStore';
import MedalTableNOCDetailStore from './flux/MedalTableNOCDetailStore';
import LoadingView from './views/LoadingView';
import ErrorView from './views/ErrorView';
import SportView from './views/SportView';


// This class takes the appropriate stores and views and joins them all
// together
class SportContainer extends Component {

  static getStores() {
    return [
      MedalTableNOCDetailStore,
      SportStore,
    ];
  }

  static calculateState(prevState) {
    return {
      table: MedalTableNOCDetailStore.getState(),
      data: SportStore.getState(),
    };
  }

  componentDidMount() {
    const { sportId, color } = this.props.match.params;
    SportStore.setRouteParams(sportId, color);
  }

  render() {
    const {
      table: {
        loading,
        error,
      },
      data
    } = this.state;
    if (error) {
      return <ErrorView message={error.message}/>;
    }
    if (loading || !data) {
      return <LoadingView/>;
    }
    return <SportView data={data}/>;
  }

}

export default Container.create(SportContainer);
