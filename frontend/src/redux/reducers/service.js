import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const serviceReducer = createReducer(initialState, {
  serviceCreateRequest: (state) => {
    state.isLoading = true;
  },
  serviceCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.service = action.payload;
    state.success = true;
  },
  serviceCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all services of shop
  getAllServicesShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllServicesShopSuccess: (state, action) => {
    state.isLoading = false;
    state.services = action.payload;
  },
  getAllServicesShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete services of a shop
  deleteServiceRequest: (state) => {
    state.isLoading = true;
  },
  deleteServiceSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteServiceFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all services
  getAllServicesRequest: (state) => {
    state.isLoading = true;
  },
  getAllServicesSuccess: (state, action) => {
    state.isLoading = false;
    state.allServices = action.payload;
  },
  getAllServicesFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state) => {
    state.error = null;
  },
});
