const GatewayLayout = () => {
  return (
    <>
      {new Array(10).fill("").map((e, i) => (
        <div className="px-4 py-3 text-sm text-gray-900" key={i}>
          <div className="text-md">Gateway {i + 1}</div>
          <div className="text-xs">Last Active: 2023-03-22 18:13:45</div>
        </div>
      ))}
    </>
  );
};

export default GatewayLayout;
