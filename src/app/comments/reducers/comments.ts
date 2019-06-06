/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 5/29/19 9:35 AM
 */

import { CommentsActions, CommentsActionTypes } from '../actions/comments';

export interface State {
  selectedItemId: number;
}

const initialState: State = {
  selectedItemId: null,
};

export function reducer(
  state = initialState,
  action: CommentsActions,
) {
  switch (action.type) {
    case CommentsActionTypes.LoadSuccess:
      return {
        ...state,
        selectedItemId: action.payload.id,
      };
    default: {
      return state;
    }
  }
}

export const getSelectedItemId = (state: State) => state.selectedItemId;
