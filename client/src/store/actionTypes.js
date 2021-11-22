export const DEPLOY = {
	PUT_DEPLOY: 'DEPLOY.PUT_DEPLOY',
	DEPLOY_CONTRACT: 'DEPLOY.DEPLOY_CONTRACT',
	GET_LATEST_BLOCK_HASH: 'DEPLOY.GET_LATEST_BLOCK_HASH',
	PUSH_TRANSFER_TO_LOCAL_STORAGE: 'DEPLOY.PUSH_TRANSFER_TO_LOCAL_STORAGE',
	GET_TRANSFERS_FROM_LOCAL_STORAGE: 'DEPLOY.GET_TRANSFERS_FROM_LOCAL_STORAGE',
	UPDATE_TRANSFER_LOCAL_STORAGE: 'DEPLOY.UPDATE_TRANSFER_LOCAL_STORAGE',
	GET_DEPLOYS_STATUS: 'DEPLOY.GET_DEPLOYS_STATUS',
	GET_DEPLOY_TRANSFERS: 'DEPLOY.GET_DEPLOY_TRANSFERS',
};

export const STAKE = {
	PUSH_STAKE_TO_LOCAL_STORAGE: 'STAKE.PUSH_STAKE_TO_LOCAL_STORAGE',
	GET_STAKES_FROM_LOCAL_STORAGE: 'STAKE.GET_STAKE_FROM_LOCAL_STORAGE',
};

export const USERS = {
	SET_USER_ADDRESS: 'USER.SET_USER_ADDRESS',
	FETCH_USER_DETAILS: 'USER.FETCH_USER_DETAILS',
};

export const SIGNER = {
	UPDATE_CONNECT_STATUS: 'SIGNER.UPDATE_CONNECT_STATUS',
	UPDATE_LOCK_STATUS: 'SIGNER.UPDATE_LOCK_STATUS',
	SET_CONNECT_ERROR: 'SIGNER.SET_CONNECT_ERROR',
	CLEAR_CONNECT_ERROR: 'SIGNER.CLEAR_CONNECT_ERROR',
};

export const KEY_MANAGER = {
	FETCH_KEY_MANAGER_DETAILS: 'KEY_MANAGER.FETCH_KEY_MANAGER_DETAILS',
	PUT_WEIGHT_DEPLOY: 'KEY_MANAGER.PUT_WEIGHT_DEPLOY',
	DEPLOY_KEY_MANAGER_CONTRACT: 'KEY_MANAGER.DEPLOY_KEY_MANAGER_CONTRACT',
	UPDATE_LOCAL_STORAGE: 'KEY_MANAGER.UPDATE_LOCAL_STORAGE',
	GET_LOCAL_STORAGE: 'KEY_MANAGER.GET_LOCAL_STORAGE',
	GET_DEPLOYS_STATUS: 'KEY_MANAGER.GET_DEPLOYS_STATUS',
};

export const PRICE = {
	FETCH_PRIZE_HISTORY: 'PRICE.FETCH_PRIZE_HISTORY',
};

export const TOKENS = {
	FETCH_TOKENS_INFO_WITH_BALANCE: 'TOKENS.FETCH_TOKENS_INFO_WITH_BALANCE',
	FETCH_TOKEN_INFO: 'TOKENS.FETCH_TOKEN_INFO',
	GET_FROM_LOCAL_STORAGE: 'TOKENS.GET_FROM_LOCAL_STORAGE',
	SET_LOCAL_STORAGE: 'TOKENS.SET_LOCAL_STORAGE',
};

export const REQUEST = {
	ADD_REQUEST_LOADING_STATUS: 'REQUEST.ADD_REQUEST_LOADING_STATUS',
	REMOVE_REQUEST_LOADING_STATUS: 'REQUEST.REMOVE_REQUEST_LOADING_STATUS',
};

export const NFTS = {
	FETCH_NFTS_INFO: 'NFTS.FETCH_NFTS_INFO',
};

export const VALIDATORS = {
	FETCH_ACTIVE_VALIDATORS: 'VALIDATORS.FETCH_ACTIVE_VALIDTORS',
};
