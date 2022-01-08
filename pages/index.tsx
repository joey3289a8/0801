import type { NextPage } from "next";
import MediaPlan from "../components/MediaPlan";
import SpendingChart from "../components/SpendingChart";

const Home: NextPage = () => {
	return (
		<div className="container px-10 py-6 flex gap-16 flex-wrap">
			<MediaPlan />
			<SpendingChart />
		</div>
	);
};

export default Home;
