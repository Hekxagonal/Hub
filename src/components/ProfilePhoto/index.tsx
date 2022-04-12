import * as S from './styles';

interface Component {
  photo: string;
}

const ProfilePhoto = ({ photo }: Component) => {
  return (
    <S.Container>
      <S.Image src={photo} />
    </S.Container>
  );
};

export default ProfilePhoto;
