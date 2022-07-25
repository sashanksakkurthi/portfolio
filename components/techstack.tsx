import React from "react";

const TechStack = () => {
  const Technologies = [
    {
      id: 1,
      name: "Web Development",
      percentage: 90,
    },
    {
      id: 2,
      name: "App Development",
      percentage: 50,
    },
    {
      id: 3,
      name: "Devops",
      percentage: 60,
    },
  ];
  return (
    <div className="flex h-screen w-screen flex-col items-center pt-4 sm:pt-10">
      <div className="font-Inter text-2xl font-bold">Tech Stack</div>
      {Technologies.map((value, key) => {
        return (
          <div key={value.id}>
            <TechProgressBar name={value.name} percentage={value.percentage} />
          </div>
        );
      })}
    </div>
  );
};

const TechProgressBar = (props: { percentage: number; name: string }) => {
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-2 pt-6 sm:flex-row sm:gap-5">
      <div className="font-Roboto text-xl font-semibold sm:w-48">
        {props.name}
      </div>
      <div className="h-2 w-60 rounded-full bg-gray-200 sm:w-96">
        <div
          className={`h-2 rounded-full bg-blue-600`}
          style={{ width: `${props.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TechStack;
