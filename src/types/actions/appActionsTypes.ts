export type appInitializedTrueActionType = {
  type: string;
};

export type appInitializedFalseActionType = {
  type: string;
};

export type appContentInitializedTrueActionType = {
  type: string;
};

export type appContentInitializedFalseActionType = {
  type: string;
};

export type AppActionsTypes =
  | appInitializedTrueActionType
  | appInitializedFalseActionType
  | appContentInitializedTrueActionType
  | appContentInitializedFalseActionType;
