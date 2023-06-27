import { defineStore } from 'pinia';

interface AppState {
  /**
   * 控制home的做侧边栏缩放
   */
  leftMenuControl: boolean;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    leftMenuControl: false,
  }),
  actions: {
    setLeftMenuControl(data) {
      this.leftMenuControl = data;
    },
  },
});
