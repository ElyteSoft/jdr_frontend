import Loading from 'react-loading';

const LoadingView = () => {
  return (
    <div className='bg-gray-800 shadow-md rounded-lg m-4 flex justify-center'>
      <div className='m-4'>
        <Loading type="spin" color="#fff" />
      </div>
    </div>
  );
};

export default LoadingView;
