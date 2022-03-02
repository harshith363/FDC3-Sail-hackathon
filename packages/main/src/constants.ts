export const DEFAULT_WINDOW_HEIGHT : number = 600;
export const DEFAULT_WINDOW_WIDTH : number = 800;
export const TOOLBAR_HEIGHT : number = 90;

export enum TARGETS {
    SEARCH_RESULTS = "searchResults",
    INTENT_RESOLVER = "intentResolver",
    CHANNEL_PICKER = "channelPicker"
}

export enum TOPICS {
    WORKSPACE_INIT = "WORK:Init",
    WORKSPACE_START = "WORK:Start",
    WINDOW_START = "WIN:start",
    WINDOW_SHOW = "WIN:show",
    NAVIGATE = "VIEW:navigate",
    SIGN_IN = "SYSTEM:signIn",
    SIGN_OUT = "SYSTEM:signOut",
    CONTEXT_MENU = "VIEW:context",
    SAVE_ENTITY = "SYSTEM:SaveEntity",
    ADD_TAB = "WORK:addTab",
    NEW_TAB = "WORK:newTab",
    SELECT_TAB = "WORK:selectTab",
    CLOSE_TAB = "WORK:closeTab",
    DROP_TAB = "WORK:dropTab",
    JOIN_CHANNEL = "WORK:joinChannel",
    JOIN_WORKSPACE_TO_CHANNEL = "FDC3:joinWorkspaceToChannel",
    CONFIRM_JOIN = "FDC3:confirmJoin",
    PICK_CHANNEL = "RES:pickChannel",
    CHANNEL_SELECTED = "WORK:channelSelected",
    FETCH_FROM_DIRECTORY = "WIN:fetchFromDirectory",
    FRAME_DEV_TOOLS = "WORK:openFrameDevTools",
    TAB_DEV_TOOLS = "WORK:openTabDevTools",
    RES_LOAD_RESULTS = "RES:loadResults",
    RES_PICK_CHANNEL = "RES:pickChannel",
    RES_RESOLVE_INTENT = "RES:resolveIntent",
    HIDE_WINDOW = "WORK:hideWindow",
    FDC3_START = "FDC3:start",
    FDC3_INITIATE = "FDC3:initiate",
    FDC3_GET_ACTION_URL = "FDC3:getActionUrl",
    FDC3_SET_CURRENT_CHANEL = "FDC3:setCurrentChannel",
    FDC3_GET_OR_CREATE_CHANNEL = "FDC3:getOrCreateChannel",
    FDC3_ADD_CONTEXT_LISTENER = "FDC3:addContextListener",
    FDC3_INTENT = "FDC3:intent",
    FDC3_CONTEXT = "FDC3:context",
    FDC3_BROADCAST = "FDC3:broadcast",
    FDC3_OPEN = "FDC3:open",
    FDC3_DROP_CONTEXT_LISTENER = "FDC3:dropContextListener",
    FDC3_GET_CURRENT_CONTEXT = "FDC3:getCurrentContext",
    FDC3_GET_SYSTEM_CHANNELS = "FDC3:getSystemChannels",
    FDC3_LEAVE_CURRENT_CHANNEL = "FDC3:leaveCurrentChannel",
    FDC3_ADD_INTENT_LISTENER = "FDC3:addIntentListener",
    FDC3_JOIN_CHANNEL = "FDC3:joinChannel",
    FDC3_FIND_INTENT = "FDC3:findIntent",
    FDC3_FIND_INTENTS_BY_CONTEXT = "FDC3:findIntentsByContext",
    FDC3_GET_CURRENT_CHANNEL = "FDC3:getCurrentChannel",
    FDC3_GET_APP_INSTANCE = "FDC3:getAppInstance",
    FDC3_RAISE_INTENT = "FDC3:raiseIntent"
};