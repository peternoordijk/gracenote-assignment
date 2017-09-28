import React, { Component } from 'react';
import { Container } from 'flux/utils';
import MedalTableNOCDetailStore from './flux/MedalTableNOCDetailStore';
import LoadingView from './views/LoadingView';
import ErrorView from './views/ErrorView';
import MedalsView from './views/MedalsView';


// This class takes the appropriate stores and views and joins them all
// together
class MedalsTableContainer extends Component {

  static getStores() {
    return [
      MedalTableNOCDetailStore
    ];
  }

  static calculateState(prevState) {
    return MedalTableNOCDetailStore.getState();
  }

  componentDidMount() {
    MedalTableNOCDetailStore.initialize();
  }

  render() {
    const {
      loading,
      error,
      data,
    } = this.state;

    if (error) {
      return <ErrorView message={error.message}/>;
    }
    if (loading || !data) {
      return <LoadingView/>;
    }
    return <MedalsView data={data} />;
  }

}

export default Container.create(MedalsTableContainer);
