export const hello = async (event: any) => {
  // const body = JSON.parse(event.body);
  // console.log("🚀 ~ file: handler.ts:3 ~ hello ~ body:", body);
  console.log("1 min completed");
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: `Hello 1 min over` }),
  };
};
