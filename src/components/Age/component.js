import { useDispatch, useSelector } from 'react-redux';

import { getAge, useInterval } from '../utils';

const Component = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.lastUpdate);

  let age = getAge(currentDate);

  useInterval(() => {
    dispatch({
      type: 'tick',
      light: true,
      lastUpdate: new Date(),
    });
    age = getAge();
  }, [1000]);

  return age;
};

Component.displayName = 'Age';

export default Component;
