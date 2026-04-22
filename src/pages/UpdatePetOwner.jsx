import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useFetch from '../utils/useFetch';

UpdatePetOwner.route = {
  path: '/update-owner/:id',
}

export default function UpdatePetOwner() {

  const { id } = useParams()

  const formInitialState = {
    id: '',
    name: '',
    email: ''
  }

  const [formData, setFormData] = useState(formInitialState)
  const [formSent, setFormSent] = useState(false)
  const navigate = useNavigate()


  const [petOwner, loading] = useFetch('/api/petOwners/' + id)

  useEffect(() => {
    if (!loading && petOwner){
    setFormData({
      id: petOwner.id ?? '',
      name: petOwner.name ?? '',
      email: petOwner.email ?? ''
    })
    }
  }, [loading, petOwner])
  
  if(loading) return <p>Loading...</p>


  function updateFormData(event) {
    //console.log(event)
    const { name: key, value } = event.target;  // event.target.name == "email"
    // const key = event.target.name
    // const value = event.target.value
    // console.log(key, value)
    // [key] - dynamisk tilldelning av t ex "email" eller "name"
    setFormData({ ...formData, [key]: value })
  }


  async function sendForm(event) {
    event.preventDefault()
    await fetch('/api/petOwners' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    setFormSent(true)
  }

  if (formSent) {

    return <>
      <p>The pet owner {formData.name} has been created</p>
      <button onClick={() => {
        setFormSent(false);
        setFormData({ ...formInitialState })
      }}>Create another pet owner</button>
      <button onClick={() => navigate('/pets-and-owners')}>
        See the list of pets and their owners</button>
    </>

  } else {

    return <>
      <h2>Edit {petOwner.name}</h2>
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

}