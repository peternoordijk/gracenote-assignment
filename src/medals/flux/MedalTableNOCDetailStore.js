import { ReduceStore } from 'flux/utils';
import MedalDispatcher from './MedalDispatcher';


const MEDAL_TABLE_ENDPOINT = '/GetMedalTableNOCDetail_Season.json';

// This store fetches and holds JSON data :)
class MedalTableNOCDetailStore extends ReduceStore {

  async initialize() {
    const state = this.getState();
    if (state.data || state.loading) {
      return;
    }
    try {
      this.getDispatcher().dispatch({
        type: 'fetch-start',
      });
      const response = await fetch(MEDAL_TABLE_ENDPOINT);
      const data = await response.json();
      this.getDispatcher().dispatch({
        type: 'fetch-success',
        data,
      });
    } catch (error) {
      this.initialized = false;
      this.getDispatcher().dispatch({
        type: 'fetch-fail',
        error,
      });
    }
  }

  getInitialState() {
    return {
      loading: false,
      error: null,
      data: null,
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'fetch-start':
        return {
          loading: true,
          error: null,
          data: null,
        };
      case 'fetch-success':
        return {
          loading: false,
          error: null,
          data: action.data,
        };
      case 'fetch-fail':
        return {
          loading: false,
          error: action.error,
          data: null,
        };
      default:
        return state;
    }
  }

}

export default new MedalTableNOCDetailStore(MedalDispatcher);
