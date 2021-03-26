import logo from './logo.svg';
// import { Row, Col, Container } from 'react-bootstrap';
import './App.css';
import ActionCentre from './Components/ActionCentre/ActionCentre';
import HeroGreeting from './Components/HeroGreeting/HeroGreeting';
// import ActionCentre from './Components/ActionCentre/ActionCentre';
import Sidebar from './Components/Sidebar/Sidebar';
import ActiveCourse from './Components/ActiveCourse/ActiveCourse';
import CourseList from './Components/CourseList/CourseList';
import StatisticsImage from './Assets/statistics.svg';
import StudyImage from './Assets/study.svg';
import FLogo from './Assets/FLogo.svg';
import SidebarNavs from './Assets/SidebarNavs.svg';

const courseList = [
	{
		name: "Learn Figma",
		author: "Christopher Morgan",
		duration: "6h 30m",
		rating: 4.9,
		progress: 83,
		status: 'in-progress',
	},
	{
		name: "Basics of Drawing",
		author: "Jean Tate",
		duration: "11h 30m",
		rating: 4.95,
		progress: 100,
		status: 'complete',
	},
	{
		name: "Analog Photography",
		author: "Gordon Norman",
		duration: "3h 15m",
		rating: 4.7,
		progress: 100,
		status: 'complete',
	},
	{
		name: "Master Instagram",
		author: "Sophie Gill",
		duration: "7h 40m",
		rating: 4.6,
		progress: 97,
		status: 'in-progress',
	},
];

function App() {
	return (
		// <div className="App bg-pink-500 grid lg:grid-cols-6 p-6">
		// 	<div className="Sidebar col-span-1 h-screen rounded-lg bg-red-500">
		// 		<div className="h-screen m-5 bg-black w-2/3">

		// 		</div>
		// 	</div>
		// 	<div className="Content grid lg:col-span-5 lg:grid-cols-5 gap-10 h-screen bg-pink-800">
		// 		<div className="Hero flex flex-col lg:col-span-3 gap-4">
		// 			<HeroGreeting />
		// 			<ActiveCourse courses={courseList}/>
		// 			<CourseList courses={courseList}/>
		// 		</div>
		// 		<div className="Secondary lg:col-span-2 flex flex-col gap-8">
		// 			<ActionCentre courses={courseList}/>
		// 			<img src={StatisticsImage} />
		// 			<div className="h-48 bg-gray-100 w-full rounded-md flex flex-row items-center gap-1 p-2">
		// 				<div className="h-full w-1/2 flex flex-col px-2 gap-1">
		// 					<span className=" h-1/3 font-baloo font-semibold text-md flex flex-row items-center">
		// 						Learn even more!
		// 					</span>
		// 					<span className="h-1/3 text-xs">
		// 						Unlock Premium features only for $9.99 per month.
		// 					</span>
		// 					<button className="h-10 w-2/3 bg-black text-white text-xs rounded-md">
		// 						Go Premium
		// 					</button>
		// 				</div>
		// 				<img src={StudyImage} className="h-2/3 w-1/2 m-4 text-center" />
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className="App min-h-screen flex flex-col lg:flex-row flex-grow">
			<div className="SidebarCol lg:w-1/6 flex flex-col lg:p-4 items-center overflow-visible">
				<div className="Sidebar w-full lg:w-2/3 h-full lg:m-2 gap-2 lg:rounded-2xl lg:top-0 bg-black text-white flex flex-col items-center justify-between p-4">
					<div className="logo w-8 h-1/6 m-4 flex flex-col justify-center items-center">
						<img src={FLogo} />
					</div>
					<div className="SidebarNavs w-20 h-4/6 p-2 flex flex-col justify-between items-center">
						<img src={SidebarNavs} className="h-4/5 m-4" />
					</div>
					<div className="Logout w-20 h-1/6 p-2 flex flex-col justify-between items-center">
						<span>
							Logout
						</span>
					</div>
				</div>
			</div>
			<div className="Content flex-grow lg:w-5/6 flex flex-col-reverse lg:flex-row p-10 gap-10 lg:overflow-y-auto">
				<div className="Hero min-h-screen flex flex-col lg:col-span-3 gap-4">
					<HeroGreeting />
					<ActiveCourse courses={courseList}/>
					<CourseList courses={courseList}/>
				</div>
				<div className="Secondary flex-grow lg:col-span-2 flex flex-col gap-8">
					<ActionCentre courses={courseList}/>
					<img src={StatisticsImage} />
					<div className="h-48 bg-gray-100 w-full rounded-md flex flex-row items-center gap-1 p-2">
						<div className="h-full w-1/2 flex flex-col px-2 gap-1">
							<span className=" h-1/3 font-baloo font-semibold text-md flex flex-row items-center">
								Learn even more!
							</span>
							<span className="h-1/3 text-xs">
								Unlock Premium features only for $9.99 per month.
							</span>
							<button className="h-10 w-2/3 bg-black text-white text-xs rounded-md">
								Go Premium
							</button>
						</div>
						<img src={StudyImage} className="h-2/3 w-1/2 m-4 text-center" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
