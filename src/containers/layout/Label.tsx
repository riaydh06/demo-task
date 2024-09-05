import { useNavigate } from 'react-router-dom';

interface Props {
  route: string;
  name: string;
}

const Label = ({ route, name }: Props) => {
  const navigate = useNavigate();
  return <div onClick={() => navigate(route)}>{name}</div>;
};

export default Label;
