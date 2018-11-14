import {createSelector} from 'reselect'
import {propertyOrEmptyObject, propertyOrEmptyString, propertyOrNull} from './common'
import {Scopes} from '../constants/attributes'

export const getEditablePlacecast = state => state.edit.placecast
export const getEdit = state => propertyOrNull(state, Scopes.EDIT)

export const getEditablePhotoSrc = createSelector([getEditablePlacecast], placecast => {
    return propertyOrEmptyString(placecast, 'photoSrc')
})
export const getEditableTitle = createSelector([getEditablePlacecast], placecast => {
    return propertyOrEmptyString(placecast, 'title')
})
export const getNewPhotoSrc = createSelector([getEdit], edit => {
    return propertyOrEmptyString(edit, 'newPhotoSrc')
})
export const getNewAddress = createSelector([getEdit], edit => {
    return propertyOrEmptyObject(edit, 'newAddress')
})
export const getIsEditing = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'isEditing')
})
export const getIsEditingAudio = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'isEditingAudio')
})

export const getDisplayEditVisualsButton = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'displayEditVisualsButton')
})

export const getDisplayBinButton = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'displayBinButton')
})

export const getDisplayEditAudioButton = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'displayEditAudioButton')
})

export const getDisplaySaveOrCancelButtons = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'displaySaveOrCancelButtons')
})

export const getDisplaySaveOrCancelAudioButtons = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'displaySaveOrCancelAudioButtons')
})

export const getNewAudioSrc = createSelector([getEdit], edit => {
    return propertyOrEmptyString(edit, 'newAudioSrc')
})

export const getPlacecastId = createSelector([getEditablePlacecast], placecast => {
    return propertyOrEmptyString(placecast, 'id')
})

export const getPhotoEdited = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'photoEdited')
})

export const getAudioEdited = createSelector([getEdit], edit => {
    return propertyOrNull(edit, 'audioEdited')
})
