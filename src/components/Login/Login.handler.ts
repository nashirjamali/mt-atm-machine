import axios from 'axios';

export const authUser = async (username: string, pin: string) => {
    const response = await axios.post('/api/auth', { username, pin });

    if (response.status !== 200) {
      throw new Error(response.data.data.message);
    }

    return response.data.data.username;
};
