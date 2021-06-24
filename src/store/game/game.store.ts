import { Module } from 'vuex';
import { GameMessage, GAME_TYPE, GlobalState } from '../../models';
import { router } from './../../router';

export interface GameState {
  isActive: boolean;
}

export const gameStore: Module<GameState, GlobalState> = {
  namespaced: true,
  state: (): GameState => ({
    isActive: false,
  }),

  getters: {},

  mutations: {
    setActive: (state) => (state.isActive = true),
  },

  actions: {
    startGame({ rootState }) {
      router.push({ name: 'game' });
      
    },

    processData({ dispatch }, data: GameMessage) {
      if (data.gameType === GAME_TYPE.START) dispatch('startGame');
    },
  },
};
