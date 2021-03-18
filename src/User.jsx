import { Name } from './Name';
import { Age } from './Age';
import { Nationality } from './Nationality';
export const User = ({ userName, userAge, userNationality }) => {
  return (
    <>
      <div>
        <ol>
          <li>
            <Name userName={userName} />
          </li>
          <li>
            <Age userAge={userAge} />
          </li>
          <li>
            <Nationality userNationality={userNationality} />
          </li>
        </ol>
      </div>
    </>
  );
};
