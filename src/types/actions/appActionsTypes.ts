export type AppInitializedTrueActionType = {
  type: string;
};

export type AppInitializedFalseActionType = {
  type: string;
};

export type AppContentInitializedTrueActionType = {
  type: string;
};

export type AppContentInitializedFalseActionType = {
  type: string;
};

export type AppActionsTypes =
  | AppInitializedTrueActionType
  | AppInitializedFalseActionType
  | AppContentInitializedTrueActionType
  | AppContentInitializedFalseActionType;
