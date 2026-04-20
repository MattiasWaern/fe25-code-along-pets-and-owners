import { useState } from 'react';


CreatePetOwner.route = {
  path: '/create-petowner',
  label: 'Create a pet owner',
  index: 5
}

export default function CreatePetOwner() {

  const formInitialState = {
    name: '',
    email: ''
  }

  const [formData, setFormData] = useState(formInitialState)

  function updateFormData(event) {
    const { name: key, value } = event.target;
    // console.log(key, value)
    setFormData({ ...formData, [key]: value })
  }


  async function sendForm(event) {
    event.preventDefault()
    // console.log(event)
    

  }


  return <>
    <h2>Create a new Pet owner</h2>
    <form onSubmit={sendForm}>
      <label>
        Name:
        <input name="name" type="text" placeholder="Name" value={formData.name} onChange={updateFormData} />
      </label>
      <label>
        Email:
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={updateFormData} />
      </label>
      <button type="submit">Create</button>
    </form>
  </>

}