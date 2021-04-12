const INITIAL_STATE = {
	blog: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'traer_usuarios':
			return { ...state, blog: action.payload };

		default: return state;
	};
};