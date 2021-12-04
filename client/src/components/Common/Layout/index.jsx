import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import { fetchPriceHistory } from '../../../actions/priceActions';
import { getLatestBlockHash } from '../../../actions/deployActions';
import { REFRESH_TIME } from '../../../constants/key';
import SideBar from '../SideBar';
import { isLoadingRequest } from '../../../selectors/request';

const Layout = (props) => {
	const dispatch = useDispatch();
	const ref = useRef(null);
	// State
	const [color, setColor] = useState('cd_light_theme_active');
	const [title, setTitle] = useState('dashboard');
	// Selector
	const isLoading = useSelector(isLoadingRequest);

	// Effect
	useEffect(() => {
		const refreshStateRootHash = setInterval(() => dispatch(getLatestBlockHash()), REFRESH_TIME);
		return () => clearInterval(refreshStateRootHash);
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchPriceHistory());
	}, [dispatch]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setColor(localStorage.getItem('themColor'));
		}
	}, []);

	useEffect(() => {
		if (isLoading) {
			ref.current.continuousStart();
		} else {
			ref.current.complete();
		}
	}, [isLoading]);

	// Function
	//TODO: Handle theme change
	// const themHandler = (val) => {
	// 	setColor(val ? 'cd_light_theme_active' : 'cd_page_dark_mode');
	// 	if (typeof window !== 'undefined') {
	// 		localStorage.setItem('themColor', val ? 'cd_light_theme_active' : 'cd_page_dark_mode');
	// 	}
	// };

	const url = window.location.pathname;
	useEffect(() => {
		setTitle(url.split('/')[1]);
	}, [url]);

	return (
		<div className={`cd_all_pages_content ${color === null ? 'cd_light_theme_active' : color}`}>
			<LoadingBar ref={ref} color="#53b9ea" height={5} className="loading_indicator" />
			<SideBar title={title || 'dashboard'} modules={props.modules} />
			<div className="cd_all_pages_inner_content">{props.children}</div>
		</div>
	);
};

export default Layout;
