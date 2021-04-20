/*
 * @Describe: 测试首页
 */

import "./index.less";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Line } from "@/components";

const Home = props => {

	return (
		<div className="g-home">
			<Line />
		</div>
	);
};

const mapStateToProps = (state) => ({
	globalStore: state.global,
	homeStore: state.home
});

export default connect(mapStateToProps)(Home);

