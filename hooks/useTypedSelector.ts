import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../services/reduxStore/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
