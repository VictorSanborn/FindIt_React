export async const loginUser = (user, password) => {
  try {
    const response = await axios.get('193.10.202.73/User/GetUserID?username={'+username+'}&password={'+password+'}');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};