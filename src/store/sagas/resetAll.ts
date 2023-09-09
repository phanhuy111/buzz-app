import { createAction } from "@reduxjs/toolkit";

export const RESET_ALL = "resetAll";

// Create a custom reset action creator
export const resetAll = createAction(RESET_ALL);
