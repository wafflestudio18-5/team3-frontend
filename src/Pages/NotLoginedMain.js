import { NotLoginedMain } from '../Components/NotLoginedMain';

const NotLoginedMainPage = () => {
  return (
    <div className="nanum">
      <button
        style={{
          padding: '0 12px',
          borderRadius: '15px',
          lineHeight: '30px',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 'bold',
          backgroundColor: '#c62917',
          position: 'absolute',
          top: '50px',
          left: '10px',
        }}
      >
        루트 유저로 입장하기
      </button>
      <NotLoginedMain />
    </div>
  );
};

export default NotLoginedMainPage;
