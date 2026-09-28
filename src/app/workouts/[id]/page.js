import Link from "next/link";
import DetailsButtons from "./DetailsButtons";

const WorkoutDetailsPage = async ({params }) => {
   
    const {id} = await params;

    
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-2xl font-bold">Workout not found</h1>
            </div>
        );
    }

    const workout = await response.json();



    return (
        <section className="min-h-screen bg-base-100">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* LEFT SIDE — IMAGE */}
                    <div className="overflow-hidden rounded-3xl bg-base-200">
                        <img
                            src={workout.image}
                            alt={workout.name}
                            className="h-full min-h-[400px] w-full object-cover lg:min-h-[650px]"
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">
                        {/* TITLE + DESCRIPTION */}
                        <div>
                            <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">{workout.name}</h1>

                            <p className="mt-4 leading-7 text-base-content/70">{workout.description}</p>
                        </div>

                        {/* CATEGORY */}
                        <div className="flex flex-wrap gap-2">
                            {workout.categories?.map((category) => (
                                <span key={category} className="badge badge-lg bg-primary text-primary-content">
                                    {category}
                                </span>
                            ))}
                        </div>

                        {/* KEY SPECS */}
                        <section>
                            <h2 className="mb-3 text-xl font-bold">KEY SPECS</h2>

                            <div className="overflow-hidden rounded-2xl border border-base-300">
                                <div className="divide-y divide-base-300">
                                    <div className="flex justify-between px-5 py-4">
                                        <span className="font-semibold text-base-content/60">EQUIPMENT</span>
                                        <span>{workout.equipment}</span>
                                    </div>

                                    <div className="flex justify-between px-5 py-4">
                                        <span className="font-semibold text-base-content/60">DIFFICULTY</span>
                                        <span>{workout.difficulty}</span>
                                    </div>

                                    <div className="flex justify-between px-5 py-4">
                                        <span className="font-semibold text-base-content/60">SETS</span>
                                        <span>{workout.sets}</span>
                                    </div>

                                    <div className="flex justify-between px-5 py-4">
                                        <span className="font-semibold text-base-content/60">REPS</span>
                                        <span>{workout.reps}</span>
                                    </div>

                                    <div className="flex justify-between px-5 py-4">
                                        <span className="font-semibold text-base-content/60">DURATION</span>
                                        <span>{workout.duration} min</span>
                                    </div>

                                    <div className="flex justify-between px-5 py-4">
                                        <span className="font-semibold text-base-content/60">CALORIES</span>
                                        <span>{workout.calories} kcal</span>
                                    </div>

                                    <div className="flex justify-between px-5 py-4">
                                        <span className="font-semibold text-base-content/60">RATING</span>
                                        <span>⭐ {workout.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* INSTRUCTIONS */}
                        <section>
                            <h2 className="mb-4 text-xl font-bold">INSTRUCTIONS</h2>

                            <ol className="space-y-4">
                                {workout.instructions?.map((instruction, index) => (
                                    <li key={index} className="flex gap-4">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral text-sm font-bold text-neutral-content">
                                            {index + 1}
                                        </span>

                                        <p className="pt-1 leading-6 text-base-content/80">{instruction}</p>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* BUTTONS */}
                        <DetailsButtons workout={workout}></DetailsButtons>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetailsPage;
