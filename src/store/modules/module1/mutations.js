import {CHANGE_CHILD_TEXT, CHANGE_TEST_MSG} from "../../mutation-types";

export default {
    /**
     * 修改父组件的内容
     * @param state
     * @param str
     */
    [CHANGE_TEST_MSG](state, str){
        state.testMsg = str;
    },

    /**
     * 修改子组件的内容
     * @param state
     * @param str
     */
    [CHANGE_CHILD_TEXT](state, str){
        state.childText = str;
    }
};
