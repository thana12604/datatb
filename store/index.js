export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Firstname',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Lastname', value: 'lastname' },
    { text: 'ID', value: 'id' },
    { text: 'Password', value: 'password' },
    { text: 'Gender', value: 'gender' },
    { text: 'Birthday', value: 'birthday' },
    { text: 'Age', value: 'age' },
    { text: 'E-mail', value: 'email' },
    { text: 'Telephone', value: 'telephone' },
    { text: 'Address', value: 'address' },
    { text: 'District', value: 'district' },
    { text: 'Province', value: 'province' },
  ],
})
export const mutations = {
  input(
    state,
    {
      name,
      lastname,
      id,
      password,
      gender,
      birthday,
      age,
      email,
      telephone,
      address,
      district,
      province,
    }
  ) {
    state.data.push({
      name,
      lastname,
      id,
      password,
      gender,
      birthday,
      age,
      email,
      telephone,
      address,
      district,
      province,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
