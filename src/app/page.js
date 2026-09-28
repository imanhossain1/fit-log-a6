


import Banner from "../components/Banner";
import WorkoutPages from "./workouts/page";


const HomePage = async () => { 

  return (
    <div>
      <Banner />
      <WorkoutPages limit={6}/>
    </div>
  );
};

export default HomePage;