import {AttributeScopes, Validity} from '../constants/attributes';
import {createSelector} from 'reselect';
import {hasAllAttributesWithValidity, propertyOrNull} from './common';

export const getCreate = state => propertyOrNull(state, AttributeScopes.CREATE)

export const getCreateAttributes = createSelector(
    [ getCreate ],
    create => propertyOrNull(create, 'attributes'))


export const isReadyToSubmit = hasAllAttributesWithValidity(
    getCreateAttributes,
    [ Validity.VALID, Validity.NOT_APPLICABLE ])