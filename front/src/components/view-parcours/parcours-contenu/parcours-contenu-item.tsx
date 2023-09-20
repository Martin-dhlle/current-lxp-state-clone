import { FC } from "react";
import Module from "../../../utils/interfaces/module";
import { getMonth } from "../../../utils/dates";
import RightArrowIcon from "../../UI/svg/right-arrow-icon";

const ParcoursContenuItem: FC<{ module: Module; iterationCount: number }> = ({
  module,
  iterationCount,
}) => {
  const minDate: { day: number; month: string } = {
    day: new Date(module.minDate!).getDay(),
    month: getMonth(new Date(module.minDate!).getMonth()),
  };

  return (
    <div className="flex gap-x-2">
      <div className="flex flex-col items-center bg-secondary-focus p-4 w-20 h-20 rounded-lg">
        <p>{minDate.day}</p>
        <p className="capitalize">{minDate.month}</p>
      </div>
      <div className="flex flex-col items-center bg-secondary-focus p-4 h-20 rounded-lg">
        <p className="self-start">{`Module ${iterationCount}`}</p>
        <p className="self-start">{module.title}</p>
        <span className="self-end">
          <RightArrowIcon />
        </span>
      </div>
    </div>
  );
};

export default ParcoursContenuItem;
