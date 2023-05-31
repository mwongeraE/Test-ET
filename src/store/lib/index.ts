import { ActionContext } from 'vuex';
import { IRootState } from './states/root.state';

// MODULES & TYPES
export * from './modules/base.module';
export * from './modules/crud.module';
export * from './modules/mutation.types';

// STATES
export * from './states/root.state';
export * from './states/crud.state';
export * from './states/base.state';

// STORAGE
export * from './storage';

export type Context<State> = ActionContext<State, IRootState>;
