/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ADD_FILTER_FIELD = 'ADD_FILTER_FIELD';
const REMOVE_FILTER_FIELD = 'REMOVE_FILTER_FIELD';
const UPDATE_FILTER_FIELD = 'UPDATE_FILTER_FIELD';
const UPDATE_EXCEPTION_FIELD = 'UPDATE_EXCEPTION_FIELD';
const ADD_GROUP_FIELD = 'ADD_GROUP_FIELD';
const UPDATE_LOGIC_COMBO = 'UPDATE_LOGIC_COMBO';
const REMOVE_GROUP_FIELD = 'REMOVE_GROUP_FIELD';
const CHANGE_CASCADING_VALUE = 'CHANGE_CASCADING_VALUE';
const EXPAND_ATTRIBUTE_PANEL = 'EXPAND_ATTRIBUTE_PANEL';
const EXPAND_SPATIAL_PANEL = 'EXPAND_SPATIAL_PANEL';
const SELECT_SPATIAL_METHOD = 'SELECT_SPATIAL_METHOD';
const SELECT_SPATIAL_OPERATION = 'SELECT_SPATIAL_OPERATION';
const REMOVE_SPATIAL_SELECT = 'REMOVE_SPATIAL_SELECT';
const SHOW_SPATIAL_DETAILS = 'SHOW_SPATIAL_DETAILS';
const QUERY_FORM_SEARCH = 'QUERY_FORM_SEARCH';
const QUERY_FORM_RESET = 'QUERY_FORM_RESET';
const WFS_LOAD_ERROR = 'WFS_LOAD_ERROR';
const SHOW_GENERATED_FILTER = 'SHOW_GENERATED_FILTER';

// const axios = require('../libs/ajax');

function addFilterField(groupId) {
    return {
        type: ADD_FILTER_FIELD,
        groupId: groupId
    };
}

function addGroupField(groupId, index) {
    return {
        type: ADD_GROUP_FIELD,
        groupId: groupId,
        index: index
    };
}

function removeFilterField(rowId) {
    return {
        type: REMOVE_FILTER_FIELD,
        rowId: rowId
    };
}

function updateFilterField(rowId, fieldName, fieldValue, fieldType) {
    return {
        type: UPDATE_FILTER_FIELD,
        rowId: rowId,
        fieldName: fieldName,
        fieldValue: fieldValue,
        fieldType: fieldType
    };
}

function updateExceptionField(rowId, message) {
    return {
        type: UPDATE_EXCEPTION_FIELD,
        rowId: rowId,
        exceptionMessage: message
    };
}

function updateLogicCombo(groupId, logic) {
    return {
        type: UPDATE_LOGIC_COMBO,
        groupId: groupId,
        logic: logic
    };
}

function removeGroupField(groupId) {
    return {
        type: REMOVE_GROUP_FIELD,
        groupId: groupId
    };
}

function changeCascadingValue(attributes) {
    return {
        type: CHANGE_CASCADING_VALUE,
        attributes: attributes
    };
}

function expandAttributeFilterPanel(expand) {
    return {
        type: EXPAND_ATTRIBUTE_PANEL,
        expand: expand
    };
}

function expandSpatialFilterPanel(expand) {
    return {
        type: EXPAND_SPATIAL_PANEL,
        expand: expand
    };
}

function selectSpatialMethod(method, fieldName) {
    return {
        type: SELECT_SPATIAL_METHOD,
        fieldName: fieldName,
        method: method
    };
}

function selectSpatialOperation(operation, fieldName) {
    return {
        type: SELECT_SPATIAL_OPERATION,
        fieldName: fieldName,
        operation: operation
    };
}

function removeSpatialSelection() {
    return {
        type: REMOVE_SPATIAL_SELECT
    };
}

function showSpatialSelectionDetails(show) {
    return {
        type: SHOW_SPATIAL_DETAILS,
        show: show
    };
}

function querySearchResponse(response) {
    return {
        type: QUERY_FORM_SEARCH,
        response: response
    };
}

function wfsLoadError(e) {
    return {
        type: WFS_LOAD_ERROR,
        error: e
    };
}

function query(seachURL, data) {
    return {
        type: SHOW_GENERATED_FILTER,
        data: data
    };
    /*return (dispatch) => {
        return axios.post(seachURL, data).then((response) => {
            dispatch(querySearchResponse(response.data));
        }).catch((e) => {
            dispatch(wfsLoadError(e));
        });
    };*/
}

function reset() {
    return {
        type: QUERY_FORM_RESET
    };
}

module.exports = {
    ADD_FILTER_FIELD,
    REMOVE_FILTER_FIELD,
    UPDATE_FILTER_FIELD,
    UPDATE_EXCEPTION_FIELD,
    ADD_GROUP_FIELD,
    UPDATE_LOGIC_COMBO,
    REMOVE_GROUP_FIELD,
    CHANGE_CASCADING_VALUE,
    EXPAND_ATTRIBUTE_PANEL,
    EXPAND_SPATIAL_PANEL,
    SELECT_SPATIAL_METHOD,
    SELECT_SPATIAL_OPERATION,
    REMOVE_SPATIAL_SELECT,
    SHOW_SPATIAL_DETAILS,
    QUERY_FORM_SEARCH,
    QUERY_FORM_RESET,
    WFS_LOAD_ERROR,
    SHOW_GENERATED_FILTER,
    addFilterField,
    removeFilterField,
    updateFilterField,
    updateExceptionField,
    addGroupField,
    updateLogicCombo,
    removeGroupField,
    changeCascadingValue,
    expandAttributeFilterPanel,
    expandSpatialFilterPanel,
    selectSpatialMethod,
    selectSpatialOperation,
    removeSpatialSelection,
    showSpatialSelectionDetails,
    query,
    reset,
    wfsLoadError,
    querySearchResponse
};
