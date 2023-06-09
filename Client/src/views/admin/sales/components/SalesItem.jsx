import {decode as base64_decode} from 'base-64';
const SalesItem = ({data}) => {

  return (
    <div className="flex w-full flex-col rounded-[22px] p-5 bg-yellow">
      <div className="bg-black rounded-[20px] p-5 grid grid-cols-1 gap-5 md:grid-cols-5 lg:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 text-white">
        <div className="flex justify-center flex-col col-span-3">
            <label className="text-[12px] text-grey">CLIENT'S NAME</label>
            <label className="">{data[0]?.name}</label> 
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 col-span-2">
            <div className="flex justify-center flex-col col-span-1">
                <label className="text-[12px] text-grey">EMAIL</label>
                <label  className="text-[10px] text-grey">{data[0]?.email}</label> 
            </div>
            <div className="flex justify-center flex-col col-span-1">
                <label className="text-[12px] text-grey">PHONE NUMBER</label>
                <label  className="text-[10px] text-grey">{data[0]?.phone}</label> 
            </div>
        </div>
    </div>
    <div className="pt-5 overflow-auto">
      <table className="w-full">
          <thead>
            <tr>
              <th className="pb-[10px] text-center">
                DATE
              </th>
              <th className="pb-[10px] text-center">
                services
              </th>
              <th className="pb-[10px] text-center">
                commission
              </th>
              <th className="pb-[10px] text-center">
                Status
              </th>
              <th className="pb-[10px] text-center">
                Cash out
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="text-[12px] border-b border-black pt-[14px] pb-[20px]">
                      {item.created_at.slice(0, 10)}
                    </td>
                    <td className="text-[12px] border-b border-black pt-[14px] pb-[20px]">
                      {item.s_name}-{decodeURIComponent(base64_decode(item.title))}<br/>{item.email}
                    </td>
                    <td className="text-[14px] text-center border-b border-black pt-[14px] pb-[20px]">
                      ${parseFloat(item.price).toFixed(2)}
                    </td>
                    <td className="text-[14px] border-b border-black">
                      {item.paid===1?"Paid":"Ordered"}
                    </td>
                    <td className={item.cashed===1?"text-[14px] border-b border-black":"text-[14px] text-white border-b border-black"}>
                      {item.cashed===1?"Yes":"No"}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesItem;
