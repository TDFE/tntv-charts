import "./index.less";
import React from "react";
import {
	Line,
	Bar,
	LineBar,
	Pie,
	Tmap,
	Radar,
	Funnel,
	Gauge,
	WordCloud,
	Liquidfill,
	Circle
} from "@/components";

export default function App() {
	return (
		<>
			<Line />
			<Bar />
			<LineBar />
			<Pie />
			<Tmap />
			<Radar />
			<Funnel />
			<Gauge />
			<WordCloud />
			<Liquidfill />
			<Circle />
		</>
	);
}
