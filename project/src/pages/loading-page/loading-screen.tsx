import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className='center-spin'>
      {[...Array(10)].map((item) => (
        <div key={item} className='wave'></div>
      ))}
    </div>
  );
}

export default LoadingScreen;
