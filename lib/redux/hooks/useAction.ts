import { useDispatch }  from "react-redux";
import { useCallback, useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";

export const useAction = <T extends (...args: any[]) => any>(actionCreator: T) => {
    const dispatch = useDispatch();
    const boundAction = useMemo(()=>{
        return bindActionCreators(actionCreator,dispatch);
    },[actionCreator, dispatch]);

    return useCallback((...args: Parameters<T>) => boundAction(...args), [boundAction])
}