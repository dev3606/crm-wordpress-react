import me from 'assets/img/avatars/avatar.png'

const FreeCard = () => {
  const {name, avatar} = JSON.parse(localStorage.getItem('gatewayagency'));

  return (
    <div className="relative mt-14 flex justify-center">
      <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full" style={{ backgroundColor: `#D4B65E` }}>
        <img src={avatar?avatar:me} className='p-[11px] rounded-full' alt="gateway ower"/>
      </div>
      <div className="mt-16 flex h-fit flex-col items-center">
        <p className="text-lg font-bold text-black">{name}</p>
      </div>
    </div>
  );
};

export default FreeCard;
