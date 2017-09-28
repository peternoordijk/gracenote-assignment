import { ReduceStore } from 'flux/utils';
import MedalDispatcher from './MedalDispatcher';
import MedalTableNOCDetailStore from './MedalTableNOCDetailStore';


// This class is only meant to deliver derived data from the
// MedalTableNOCDetailStore. In Redux this would only be a selector.
class SportStore extends ReduceStore {

  getInitialState() {
    return null;
  }

  setRouteParams(sportId, color) {
    // Actually I have to place these two at a separated store altogether...
    // Anyway... Choices choices
    this.sportId = parseInt(sportId, 10);
    this.color = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
    MedalTableNOCDetailStore.initialize();
    this.getDispatcher().dispatch({
      type: 'change-route-params',
    });
  }

  findData() {
    const { data } = MedalTableNOCDetailStore.getState();
    if (!this.sportId || !data) {
      return null;
    }
    const { SportList } = data;
    for (let index = 0; index < SportList.length; index++) {
      let sport = SportList[index];
      if (sport.Sport.n_ID === this.sportId) {
        return {
          list: sport[`${this.color}MedalList`],
          sportName: sport.Sport.c_Name,
          color: this.color,
        };
      }
    }
    return null;
  }

  reduce(state, action) {
    switch (action.type) {
      case 'fetch-success':
      case 'change-route-params':
        MedalDispatcher.waitFor([ MedalTableNOCDetailStore.getDispatchToken() ]);
        return this.findData();
      default:
        return state;
    }
  }

}

export default new SportStore(MedalDispatcher);
